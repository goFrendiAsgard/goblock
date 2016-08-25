var SYS = require("stratifiedjs/modules/sys.sjs");
// state variables
var WAIT = false; // If WAIT is true, then the program shall halt until alert or prompt box is closed
var EXEC_MODE = false; // If EXEC_MODE is true, then alert and prompt should write output to #div-output
var SILENT_MODE = false; // Execute things, silently
var INPUT_LIST = [];
var OUTPUT_LIST = [];
var TEST_CASE_INDEX = 0; // If SILENT_MODE is activated, then INPUT is taken from LESSONS, thus we need to be informed about current INPUT_INDEX
var INPUT_TEST_INDEX = 0;
var INTERPRETER = null;
var HIGHLIGHT_PAUSE = false;
var LESSON_ID = 0

// original alert, prompt, and confirm
var WINDOW_ALERT = window.alert;
var WINDOW_PROMPT = window.prompt;
var WINDOW_CONFIRM = window.confirm;

// functions for thread handling
function hold_while_wait(){
    while(WAIT){
        hold(500);
    }
}

function set_wait(){
    WAIT = true;
}

function unset_wait(){
    WAIT = false;
}

// clear output
function clear_output(){
    $('div#div-output').html('<div style="font-size:large; margin-bottom:5px;">Output</div>');
}

// alert
window.alert = function(message){
    if(SILENT_MODE){
        OUTPUT_LIST.push(message);
    }else if(EXEC_MODE){
        OUTPUT_LIST.push(message);
        $('div#div-output').append('<b>' + message + '</b><br />');
    }else{
        $('div#div-alert-message').html(message);
        $('div#div-alert').modal('show');
        set_wait();
        hold_while_wait();
    }
}

function close_alert(){
    unset_wait();
    $('div#div-alert').modal('hide');
}
$('.close-alert').click(close_alert);

// prompt
window.prompt = function(message, default_value, callback){
    if(SILENT_MODE){
        test_case = LESSONS[LESSON_ID].test_case;
        if(TEST_CASE_INDEX < test_case.length){
            input_test = test_case[TEST_CASE_INDEX];
            if(INPUT_TEST_INDEX < input_test.length){
                result = input_test[INPUT_TEST_INDEX];
                INPUT_TEST_INDEX ++;
                return result;
            }else{
                return '';
            }
        }else{
            return ''; // out of bound
        }
    }
    // Acorn interpreter cannot handle custom window prompt
    if(EXEC_MODE && INTERPRETER){
        return WINDOW_PROMPT(message, default_value);
    }
    $('div#div-prompt-message').html(message);
    $('div#div-prompt').modal('show');
    $('textarea#textarea-prompt').val(default_value);
    $('textarea#textarea-prompt').focus();
    set_wait();
    hold_while_wait();
    var result = $('textarea#textarea-prompt').val();
    result = $.trim(result);
    if(callback){ // window.prompt is also called from outside sjs (e.g: when rename or make variables
        callback(result);
    }
    if(EXEC_MODE){
        INPUT_LIST.push(result);
        $('div#div-output').append('<b>' + message + '</b> ' + result + '<br />');
    }
    return result;
}

function close_prompt(){
    unset_wait();
    $('div#div-prompt').modal('hide');
}
$('.close-prompt').click(close_prompt);
$('textarea#textarea-prompt').keyup(function(event){
    if(event.keyCode == 13 && !event.shiftKey){
        close_prompt();
    }
});

// confirm
window.confirm = function(message, default_value, callback){
    $('div#div-confirm-message').html(message);
    $('div#div-confirm').modal('show');
    $('textarea#textarea-confirm').val(default_value);
    $('textarea#textarea-confirm').focus();
    set_wait();
    hold_while_wait();
    var result = $('input#input-confirm').val();
    if(callback){ // window.confirm is also called from outside sjs (e.g: when rename or make variables
        callback(result);
    }
    return result;
}

function close_confirm_ok(){
    unset_wait();
    $('input#input-confirm').val('1');
    $('div#div-confirm').modal('hide');
}
$('button#btn-confirm-ok').click(close_confirm_ok);

function close_confirm_cancel(){
    unset_wait();
    $('input#input-confirm').val('0');
    $('div#div-confirm').modal('hide');
}
$('button#btn-confirm-cancel').click(close_confirm_cancel);

// define and load the toolbox
var WORKSPACE = Blockly.inject('div-workplace', {
    toolbox : document.getElementById('toolbox'),
    media: 'assets/blockly/media/'
});

// functions for show source
function show_source_code(event) {
    var language = $('select#language').val();
    var source_code = Blockly[language].workspaceToCode(WORKSPACE);
    source_code = source_code.replace(/\n\n/g, '\n'); // remove double new line, we don't have too much space here
    source_code = source_code.replace(/ /g, '&nbsp;');
    source_code = source_code.replace(/\n/g, '<br />');
    source_code = '<div style="font-size:large; margin-bottom:5px;">' + language + '</div><div style="font-weight:bold">' + source_code + '</div>';
    $('div#div-source-code').html(source_code);
}

// function to run code
function run_code(event, is_evaluation) {
    INPUT_LIST = []; // clear input and output list
    OUTPUT_LIST = [];
    INTERPRETER = null;
    clear_output();
    window.LoopTrap = 10000000; // handle infinite loop
    Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var __code = Blockly.JavaScript.workspaceToCode(WORKSPACE);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    WORKSPACE.highlightBlock(null);
    EXEC_MODE = true; //enter EXEC_MODE
    try {
        SYS.eval(__code); // normal eval won't work
    } catch (e) {
        window.alert(e);
    }
    EXEC_MODE = false;
    // is_evaluation
    if(is_evaluation){
        // get test_case and evaluator function
        test_case = LESSONS[LESSON_ID].test_case;
        evaluator = LESSONS[LESSON_ID].validator;
        evaluation_result = evaluator(INPUT_LIST, OUTPUT_LIST); // get evaluation result for user's own test case
        success = evaluation_result.success;
        message = evaluation_result.message;
        if(success){
            SILENT_MODE = true;
            for(var i=0; i<test_case.length; i++){ // user my cleverly adjust the input and the output. In this case, we need lesson's test_case to validate
                TEST_CASE_INDEX = i;
                INPUT_TEST_INDEX = 0;
                var current_test_case = test_case[i];
                var error_message = 'Your program has been failed in our test case.<br /><b>Input:</b> <div style="padding-left:10px">' + current_test_case.join('<br />') + '</div>';
                try{
                    INPUT_LIST = []; // clear input and output list
                    OUTPUT_LIST = [];
                    SYS.eval(__code);
                    evaluation_result = evaluator(current_test_case, OUTPUT_LIST);
                    success = success && evaluation_result.success;
                    if(!success){
                        message = error_message + '<b>Output:</b> <div style="padding-left:10px">' + OUTPUT_LIST.join('<br />') + '</div><b>Message:</b> <div style="pading-left:10px">' + evaluation_result.message + '</div>';
                        break;
                    }
                }catch(e){
                    success = false;
                    message = error_message + '<b>Runtime error:</b> <div style="padding-left:10px">' + e + '</div>';
                    break;
                }
            }
            SILENT_MODE = false;
        }
        if(success){ // evaluation succeed
            next = window.confirm('<div class="alert alert-success"><b>Success:</b><div style="padding-left:10px;">' + message + '</div><b>Do you want to continue?</b></div>');
            if(next){ // user want to continue
                if(LESSON_ID < LESSONS.length - 1){ // move to next lesson
                    LESSON_ID ++;
                    $('#lesson-chapter').val(LESSON_ID);
                    load_lesson(LESSON_ID);
                }else{ // no other lesson available
                    window.alert('<div class="alert alert-success"><b>You have reach the end of the lesson.</b> Thank you for using goblock</div>');
                }
            }
        }else{ // evaluation failed
            window.alert('<div class="alert alert-danger"><b>Failed:</b><br />' + message + '</div>');
        }
    }
}
$('button#btn-run').click(function(event){run_code(event, false);});
$('button#btn-evaluate').click(function(event){run_code(event, true);});

// Debugging functions
function init_api(interpreter, scope) {
    // Add an API function for the alert() block.
    var wrapper = function(text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(alert(text));
    };
    interpreter.setProperty(scope, 'alert',
            interpreter.createNativeFunction(wrapper));

    // Add an API function for the prompt() block.
    var wrapper = function(text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(prompt(text));
    };
    interpreter.setProperty(scope, 'prompt',
            interpreter.createNativeFunction(wrapper));

    // Add an API function for highlighting blocks.
    var wrapper = function(id) {
        id = id ? id.toString() : '';
        return interpreter.createPrimitive(highlightBlock(id));
    };
    interpreter.setProperty(scope, 'highlightBlock',
            interpreter.createNativeFunction(wrapper));
}

function highlightBlock(id) {
    WORKSPACE.highlightBlock(id);
    HIGHLIGHT_PAUSE = true;
}

function step_code() {
    if(!INTERPRETER){
        clear_output();
        // get the code
        Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
        Blockly.JavaScript.addReservedWords('highlightBlock');
        window.LoopTrap = 10000000; // handle infinite loop
        Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
        var __code = Blockly.JavaScript.workspaceToCode(WORKSPACE);
        Blockly.JavaScript.STATEMENT_PREFIX = '';
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        // prepare interpreter
        INTERPRETER = new Interpreter(__code, init_api);
        HIGHLIGHT_PAUSE = false;
        WORKSPACE.traceOn(true);
        WORKSPACE.highlightBlock(null);
        window.alert('<p>You are entering debugging mode. Keep on clicking <b>step</b> button until the program finished. The currently executed block will be highlighted.</p><p>Please <b>never</b> check <i>Prevent this page from creating additional dialog</i> when prompt dialog popped up</p><br /><img src="assets/images/dont-click-this.png" />');
    }else{
        try {
            EXEC_MODE = true;
            var ok = INTERPRETER.step();
            EXEC_MODE = false;
        } finally {
            if (!ok) {
                // Program complete, no more code to execute.
                window.alert('Execution Complete');
                WORKSPACE.highlightBlock(null);
                INTERPRETER = null;
                return;
            }
        }
        if (HIGHLIGHT_PAUSE) {
            // A block has been highlighted.  Pause execution here.
            HIGHLIGHT_PAUSE = false;
        } else {
            // Keep executing until a highlight statement is reached.
            step_code();
        }
    }
}
$('button#btn-step').click(step_code);

// save xml
function show_xml(){
    xml = Blockly.Xml.workspaceToDom(WORKSPACE);
    xml = Blockly.Xml.domToPrettyText(xml);
    textarea = '<textarea class="form-control" style="height:200px;" readonly>' + xml + '</textarea>';
    html = '<h3>Please copy this XML to notepad and save it</h3>' + textarea;
    window.alert(html);
}
$('button#btn-save').click(show_xml);

// load xml
function load_xml(){
    xml = Blockly.Xml.workspaceToDom(WORKSPACE);
    xml = Blockly.Xml.domToPrettyText(xml);
    xml = window.prompt('<h3>Paste your XML below</h3>', xml);
    xml = Blockly.Xml.textToDom(xml);
    WORKSPACE.clear();
    Blockly.Xml.domToWorkspace(xml, WORKSPACE);
}
$('button#btn-load').click(load_xml);

// initialize lesson
for(var i=0; i<LESSONS.length; i++){
    var lesson = LESSONS[i]
    $('#lesson-chapter').append('<option value="'+i+'">' + lesson.caption + '</option>');
}

function load_lesson(id){
    if(id < 0 || id >= LESSONS.length){
        return null;
    }
    var lesson = LESSONS[id];
    var code = lesson.code;
    LESSON_ID = id;
    // use ajax to fill block and lesson
    $.ajax({
        'url' : 'lessons/' + code + '/intro.html',
        'cache' : false,
        'success' : function(html){
            $('div#div-lesson').html(html);
        }
    });
    $.ajax({
        'url' : 'lessons/' + code + '/block.xml',
        'dataType' : 'text',
        'cache' : false,
        'success' : function(xml){
            xml = Blockly.Xml.textToDom(xml);
            WORKSPACE.clear();
            Blockly.Xml.domToWorkspace(xml, WORKSPACE);
        }
    });
}
load_lesson(LESSON_ID);
$('#lesson-chapter').change(function(event){
    var new_lesson_id = $('#lesson-chapter option:selected').val();
    load_lesson(new_lesson_id);
});

// bind the event
WORKSPACE.addChangeListener(show_source_code);
$('select#language').change(show_source_code);
