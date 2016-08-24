var LESSONS = [
    {
        code : 'introduction',
        caption : 'Introduction',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'NIce. Please click "Ok" to continue'};
        }
    },
    {
        code : 'tell_me_anything',
        caption : 'Tell Me Anything',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length == 0){ return {success: false, message: 'You should write something'}; }
            if(output_list[0] == 'abc'){ return {success: false, message: 'You should write something else'}; }
            return {success: true, message: 'You got it,... Nice !!!'};
        }
    },
    {
        code : 'love_poem',
        caption : 'Love Poem',
        test_case : [],
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
        test_case : [['Arya Stark'], ['Daenarys Targaryen']],
        validator : function(input_list, output_list){
            if(input_list.length != 1){
                return {success: false, message: 'You only need to ask name. No more, no less !!!'};
            }
            var name = input_list[0];
            var correct_response = 'Hi, '+name;
            if(output_list.length != 1 || output_list[0] != correct_response){
                return {success: false, message: 'The program should say "' + correct_response + '". No more, no less !!!'};
            }
            return {success: true, message: 'Nice. Say hi can be the begining of new friendship or relationship...'};
        }
    },
    {
        code : 'even_more',
        caption : 'And Even More ...',
        test_case : [['Tiger Wong', 32], ['Nobita', 10]],
        validator : function(input_list, output_list){
            if(input_list.length != 2){
                return {success: false, message: 'You need to ask both, name and age. No more, no less !!!'};
            }
            var name = input_list[0];
            var age = input_list[1];
            var correct_response_1 = 'Hi, '+name;
            var correct_response_2 = 'You are '+age+' old';
            if(output_list.length != 2 || output_list[0] != correct_response_1 && output_list[1] != correct_response_2){
                return {success: false, message: 'The program should say "' + correct_response_1 + '<br />' + correct_response_2 + '". No more, no less !!!'};
            }
            return {success: true, message: 'Nice. Good friends know alot about each others'};
        }
    },
    {
        code : 'joining_forces',
        caption : 'Joining Forces',
        test_case : [[25000, 30000], [1000, 200]],
        validator : function(input_list, output_list){
            if(input_list.length != 2){
                return {success: false, message: 'You need to ask both, your money and your friend\'s money. No more, no less !!!'};
            }
            var your_money = input_list[0];
            var friend_money = input_list[1];
            var total = your_money + friend_money;
            if(output_list.length != 1 || output_list[0] != total){
                return {success: false, message: 'The program should say "' + total + '". No more, no less !!!'};
            }
            return {success: true, message: 'By joining forces (and money), you can achieve something greater. That\'s how bunch of idiots beat the smart one'};
        }
    },
    {
        code : 'pizza',
        caption : 'Pizza',
        test_case : [[101000, 100000], [100000, 100000], [51000, 50000], [50000, 50000], [20000, 30000]],
        validator : function(input_list, output_list){
            if(input_list.length != 2){
                return {success: false, message: 'You need to ask both, your money and your friend\'s money. No more, no less !!!'};
            }
            var your_money = input_list[0];
            var friend_money = input_list[1];
            var total = your_money + friend_money;
            if(total < 100000 && output_list.length == 1 && output_list[0] == 'pizza'){
                return {success: true, message: 'Great, you got the pizza'};
            }else if(total >= 100000 && output_list.length == 0){
                return {success: true, message: 'Sadly you don\'t get the pizza. Nice try however :)'};
            }
            return {success: false, message: 'No, computer should only say "pizza" if your money + your friend\'s money is greater or equal to 100000'};
        }
    },
    {
        code : 'pizza_or_no_pizza',
        caption : 'Pizza or No Pizza ',
        test_case : [[101000, 100000], [100000, 100000], [51000, 50000], [50000, 50000], [20000, 30000]],
        validator : function(input_list, output_list){
            if(input_list.length != 2){
                return {success: false, message: 'You need to ask both, your money and your friend\'s money. No more, no less !!!'};
            }
            var your_money = input_list[0];
            var friend_money = input_list[1];
            var total = your_money + friend_money;
            if(total < 100000 && output_list.length == 1 && output_list[0] == 'pizza'){
                return {success: true, message: 'Great, you got the pizza'};
            }else if(total >= 100000 && output_list.length == 1 && output_list[1] == 'no pizza'){
                return {success: true, message: 'Sadly you don\'t get the pizza. Nice try however :)'};
            }
            return {success: false, message: 'No, computer should only say "pizza" if your money + your friend\'s money is greater or equal to 100000, and say "no pizza" otherwise'};
        }
    },
    {
        code : 'deluxe_regular_or_no',
        caption : 'Deluxe, Regular, or No at All',
        test_case : [[101000, 100000], [100000, 100000], [51000, 50000], [50000, 50000], [20000, 30000]],
        validator : function(input_list, output_list){
            if(input_list.length != 2){
                return {success: false, message: 'You need to ask both, your money and your friend\'s money. No more, no less !!!'};
            }
            var your_money = input_list[0];
            var friend_money = input_list[1];
            var total = your_money + friend_money;
            if(total >= 200000 && output_list.length == 1 && output_list[0] == 'deluxe'){
                return {success: true, message: 'Great, you got deluxe'};
            }else if(total <= 200000 && total >= 100000 && output_list.length == 1 && output_list[0] == 'deluxe'){
                return {success: true, message: 'Great, you got regular'};
            }else if(total < 100000 && output_list.length == 1 && output_list[1] == 'no pizza'){
                return {success: true, message: 'Sadly you don\'t get the pizza. Nice try however :)'};
            }
            return {success: false, message: 'No, computer should only say "deluxe" if your money + your friend\'s money is greater or equal to 200000, otherwise, if your money + your friend\'s money is greater or equal to 10000, computer should say "regular". Finally, if you guys are really that poor, you should say "no pizza" (and probably should find a part-time job)'};
        }
    },

];
