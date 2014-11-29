Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
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

function __setStorage(obj){
    localStorage.setItem('__GOBLOCK', JSON.stringify(obj));
}

function __getStorage(){
    result = localStorage.getItem('__GOBLOCK');
    if(result == undefined || result == null){
        __setStorage({passed:[]});
        result = localStorage.getItem('__GOBLOCK');
    }
    result = JSON.parse(result);
    return result;
}

function __loadLesson(){
    // storage
    var storage = __getStorage();
    var passed = storage.passed;
    $('#__lessonContainer').html('');
    // build the content of lesson
    for(i=0; i<__LESSONS.length; i++){
        lesson = __LESSONS[i];
        title = lesson.title;
        description = lesson.description;
        var badge = '<div>&nbsp;</div>';
        if($.inArray(title+"",passed) != -1){
            badge = '<div><span class="label label-success">Passed !!!</span></div>';
        }
        // build html
        var html = '<div class="col-xs-6 col-md-3">';
        html    += '    <div class="thumbnail">';
        html    += '        <a href="#" class="__lessonLink" index="'+i+'"><h4>'+title+'</h4></a>' + badge;
        html    += '        <p>'+description+'</p>';
        html    += '    </div>';
        html    += '</div>';
        $('#__lessonContainer').append(html);
    }
}



$(document).ready(function(){
    // get the content of about
    $.ajax({
        'url'     : 'partials/about.html',
        'cache'   : false,
        'success' : function(response){
            $('#__aboutContainer').html(response);
        }
    });
    
    __loadLesson();

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
    $('#__fullscreen').click(function(event){
        $(document).toggleFullScreen();
    });
    $(document).bind("fullscreenchange", function() {
        if($(document).fullScreen()){
            $('#__header').fadeOut('slow');
            $('body').css('padding-top','40px');
        }else{
            $('#__header').fadeIn('slow');
            $('body').css('padding-top','10px');
        }
    });
    
});