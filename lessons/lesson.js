var LESSONS = [
    {
        code : 'introduction',
        caption : 'Introduction',
        validator : function(input_list, output_list){
            return {success: true, message: 'NIce. Please click "Ok" to continue'};
        }
    },
    {
        code : 'tell_me_anything',
        caption : 'Tell Me Anything',
        validator : function(input_list, output_list){
            if(output_list.length == 0){ return {success: false, message: 'You should write something'}; }
            if(output_list[0] == 'abc'){ return {success: false, message: 'You should write something else'}; }
            return {success: true, message: 'You got it,... Nice !!!'};
        }
    },
    {
        code : 'love_poem',
        caption : 'Love Poem',
        validator : function(input_list, output_list){
            if(output_list.length != 4){
                return {success: false, message: 'You should have exactly 4 lines'};
            }else if(output_list[0].toLowerCase() != 'roses are red'){
                return {success: false, message: 'First line should be "Roses are red"'};
            }else if(output_list[1].toLowerCase() != 'violet is blue'){
                return {success: false, message: 'Second line should be "Violet is blue"'};
            }else if(output_list[2].toLowerCase() != 'sugar is sweet'){
                return {success: false, message: 'Third line should be "Sugar is sweet"'};
            }else if(output_list[3].toLowerCase() != 'and so are you'){
                return {success: false, message: 'Fourth line should be "And so are you"'};
            }
            return {success: true, message: 'Good poem... Now move on...'};
        }
    },
    {
        code : 'one_step_closer',
        caption : 'One Step Closer',
        validator : function(input_list, output_list){
            if(input_list.length != 1){
                return {success: false, message: 'You only need to ask name. No more, no less !!!'};
            }
            var name = input_list[0];
            var correct_response = 'Hi, '+name;
            if(output_list.length != 1 || output_list[0] != correct_response){
                return {success: false, message: 'You just need to say "' + correct_response + '". No more, no less !!!'};
            }
            return {success: true, message: 'Nice. Say hi can be the begining of new friendship or relationship...'};
        }
    },
];
