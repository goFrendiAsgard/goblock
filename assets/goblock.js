function __arrayToString(val, space_count){
    var printed_val = '';
    var spaces = '';
    for(i=0; i<space_count; i++){
        spaces += '&nbsp;';
    }
    var subArray = false;
    for(i=0; i<val.length; i++){
        if($.isArray(val[i])){
            subArray = true;
            break;
        }
    }
    printed_val += spaces + '[ ';
    printed_val += subArray? '<br />' : '';
    var i=0;
    for(i=0; i<val.length; i++){
        if($.isArray(val[i])){
            printed_val += __arrayToString(val[i],space_count+1);
        }else{
            printed_val += subArray? spaces+'&nbsp;' : '';
            printed_val += val[i];
        }
        if(i<(val.length-1)){
            printed_val += ', ';
            printed_val += subArray? '<br />' : '';
        }
    }
    printed_val += subArray? '<br />' : '';
    printed_val += ' ]';
    return printed_val;
}

function __stripHtml(val){
    if($.isArray(val)){
        val = __arrayToString(val,0);
    }else if($.type(val) === 'string'){
        val = val.split("&").join("&amp;");
        val = val.split("<").join("&lt;");
        val = val.split(">").join("&gt;");
        val = val.split(" ").join("&nbsp;");
    }
    return val;
}

function __showMainContainer(){
    $('#__menuContainer li').removeClass('active');
    $('#__homeMenu').parent('li').addClass('active');
    $('#__lessonContainer').hide();
    $('#__aboutContainer').hide();
    $('#__mainContainer').show();
}

function __showLessonContainer(){
    $('#__menuContainer li').removeClass('active');
    $('#__lessonMenu').parent('li').addClass('active');
    $('#__lessonMenu').parent('li').addClass('active');
    $('#__mainContainer').hide();
    $('#__aboutContainer').hide();
    $('#__lessonContainer').show();
}

function __showAboutContainer(){
    $('#__menuContainer li').removeClass('active');
    $('#__aboutMenu').parent('li').addClass('active');
    $('#__aboutMenu').parent('li').addClass('active');
    $('#__mainContainer').hide();
    $('#__lessonContainer').hide();
    $('#__aboutContainer').show();
}        

function __showBlockContainer(){
    $('#__xmlContainer').hide();
    $('#__blockContainer').show();
}

function __showXmlContainer(){
    $('#__blockContainer').hide();
    $('#__xmlContainer').show();
}

function __clearCode() {
    var workspace = Blockly.getMainWorkspace();
    workspace.clear();
}

// EVENTS

$('.__clearCode').click(function(){
    alertify.confirm(
        'Clear Workspace', 
        'Are you sure want to clear the workspace?', 
        function(){ __clearCode();},
        function(){}
    ).set('closable',false); 
});

$('#__switchToBlock').click(__showBlockContainer);

$('#__switchToXml').click(__showXmlContainer);

$('.__menu').click(function(event){
    event.preventDefault();
});

$('#__homeMenu').click(__showMainContainer);
$('#__lessonMenu').click(__showLessonContainer);
$('#__aboutMenu').click(__showAboutContainer);

$(document).ready(function(){
    $.ajax({
        'url'     : 'partial/about.html',
        'success' : function(response){
            $('#__aboutContainer').html(response);
        }
    });
});