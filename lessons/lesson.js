var LESSONS = [
    {
        code : 'introduction',
        caption : 'Introduction',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Nice. Please click "Ok" to continue'};
        }
    },
    {
        code : 'tell_me_anything',
        caption : 'Tell Me Anything',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length == 0){ return {success: false, message: 'Computer should write something'}; }
            if(output_list[0] == 'abc'){ return {success: false, message: 'Computer should write something else'}; }
            return {success: true, message: 'You got it,... Nice !!!'};
        }
    },
    {
        code : 'love_poem',
        caption : 'Love Poem',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length != 4){
                return {success: false, message: 'Computer should write exactly 4 lines'};
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
        code : 'you_and_i_1',
        caption : 'You and I, Episode 01: The Beginning',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length != 1 || output_list[0].toLowerCase() != 'you and i'){
                return {success: false, message: 'Computer should only show a single line "You and I"'};
            }
            return {success: true, message: 'Good job'};
        }
    },
    {
        code : 'you_and_i_2',
        caption : 'You and I, Episode 02: No Other One',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length != 1 || output_list[0].toLowerCase() != 'you and i'){
                return {success: false, message: 'Computer should only show a single line "You and I"'};
            }
            return {success: true, message: 'Good job'};
        }
    },
    {
        code : 'you_and_i_3',
        caption : 'You and I, Episode 03: Just The Two of Us',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length != 1 || output_list[0].toLowerCase() != 'you and i'){
                return {success: false, message: 'Computer should only show a single line "You and I"'};
            }
            return {success: true, message: 'Good job'};
        }
    },
    {
        code : 'one_step_closer',
        caption : 'One Step Closer',
        test_case : [['Arya Stark'], ['Daenarys Targaryen']],
        validator : function(input_list, output_list){
            if(input_list.length != 1){
                return {success: false, message: 'Computer should ask for name.'};
            }
            var name = input_list[0];
            var correct_response = 'Hi, '+name;
            if(output_list.length != 1 || output_list[0] != correct_response){
                return {success: false, message: 'The program should say "' + correct_response + '".'};
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
                return {success: false, message: 'Computer should ask for name and age.'};
            }
            var name = input_list[0];
            var age = input_list[1];
            var correct_response_1 = 'Hi, '+name;
            var correct_response_2 = 'You are '+age+' old';
            if(output_list.length != 2 || output_list[0] != correct_response_1 && output_list[1] != correct_response_2){
                return {success: false, message: 'The program should say "' + correct_response_1 + '<br />' + correct_response_2 + '".'};
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
                return {success: false, message: 'You need to ask for both, your money and your friend\'s money.'};
            }
            var your_money = parseFloat(input_list[0]);
            var friend_money = parseFloat(input_list[1]);
            var total = your_money + friend_money;
            if(output_list.length != 1 || output_list[0] != total){
                return {success: false, message: 'The program should say "' + total + '".'};
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
                return {success: false, message: 'You need to ask for both, your money and your friend\'s money.'};
            }
            var your_money = parseFloat(input_list[0]);
            var friend_money = parseFloat(input_list[1]);
            var total = your_money + friend_money;
            if(total >= 100000 && output_list.length == 1 && output_list[0] == 'pizza'){
                return {success: true, message: 'Great, you got the pizza'};
            }else if(total < 100000 && output_list.length == 0){
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
                return {success: false, message: 'You need to ask for both, your money and your friend\'s money.'};
            }
            var your_money = parseFloat(input_list[0]);
            var friend_money = parseFloat(input_list[1]);
            var total = your_money + friend_money;
            if(total >= 100000 && output_list.length == 1 && output_list[0] == 'pizza'){
                return {success: true, message: 'Great, you got the pizza'};
            }else if(total < 100000 && output_list.length == 1 && output_list[0] == 'no pizza'){
                return {success: true, message: 'Sadly you don\'t get the pizza. Nice try however :)'};
            }
            return {success: false, message: 'No, computer should only say "pizza" if your money + your friend\'s money is greater or equal to 100000, and say "no pizza" otherwise'};
        }
    },
    {
        code : 'deluxe_regular_or_no_pizza',
        caption : 'Deluxe, Regular, or No Pizza',
        test_case : [[101000, 100000], [100000, 100000], [51000, 50000], [50000, 50000], [20000, 30000]],
        validator : function(input_list, output_list){
            if(input_list.length != 2){
                return {success: false, message: 'You need to ask for both, your money and your friend\'s money.'};
            }
            var your_money = parseFloat(input_list[0]);
            var friend_money = parseFloat(input_list[1]);
            var total = your_money + friend_money;
            if(total >= 200000 && output_list.length == 1 && output_list[0] == 'deluxe'){
                return {success: true, message: 'Great, you got deluxe'};
            }else if(total <= 200000 && total >= 100000 && output_list.length == 1 && output_list[0] == 'regular'){
                return {success: true, message: 'Great, you got regular'};
            }else if(total < 100000 && output_list.length == 1 && output_list[0] == 'no pizza'){
                return {success: true, message: 'Sadly you don\'t get the pizza. Nice try however :)'};
            }
            return {success: false, message: '<p>Computer should only say "deluxe" if your money + your friend\'s money is greater or equal to 200000.</p><p> Otherwise, if your money + your friend\'s money is greater or equal to 10000, computer should say "regular".</p><p>Finally, if you guys are really that poor, you should say "no pizza" (and probably should find a part-time job)</p>'};
        }
    },
    {
        code: 'nom_nom_nom_1',
        caption: 'Nom... Nom... Nom...',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length != 10){
                return {success: false, message: 'Computer should say "nom" 10 times'};
            }
            for(var i=0; i<10; i++){
                if(output_list[i] != 'nom'){
                    return {success: false, message: 'Line #' + (i+1) + ' should be "nom"'};
                }
            }
            return {success: true, message: 'Good... nom... nom... nom...'};
        }
    },
    {
        code: 'nom_nom_nom_2',
        caption: 'Dynamic Nom... Nom... Nom...',
        test_case : [[3],[5],[10]],
        validator : function(input_list, output_list){
            if(input_list.length != 1){
                return {success: false, message: 'Computer should ask for a number'};
            }
            var number = input_list[0];
            if(output_list.length != number){
                return {success: false, message: 'Computer should say "nom" ' + number + ' times'};
            }
            for(var i=0; i<(number-1); i++){
                if(output_list[i] != 'nom'){
                    return {success: false, message: 'Line #' + (i+1) + ' should be "nom"'};
                }
            }
            return {success: true, message: 'Good... nom... nom... nom...'};
        }
    },
    {
        code: 'hanabi_festival',
        caption: 'Hanabi Festival',
        test_case : [],
        validator : function(input_list, output_list){
            if(input_list.length != 1){
                return {success: false, message: 'Computer should ask for a number'};
            }
            var number = parseFloat(input_list[0]);
            if(output_list.length != number+1){
                return {sucess: false, message: 'Computer should show '+(number+1)+' lines of output'};
            }
            for(var i=0; i<(number-1); i++){
                if(output_list[i] != (number-i)){
                    return {success: false, message: 'Line #' + (i+1) + ' should be "' + (number-i) + '"'};
                }
            }
            if(output_list[number] != '*'){
                return {success: false, message: 'The last line should be "*"'};
            }
            return {success: true, message: 'It is always good to have fun, either by watching fireworks or just simply hangout with friends'};
        }
    },
    {
        code: 'part_time_job',
        caption: 'Part Time Job',
        test_case: [['y','y','y','y','y','n'], ['n'], ['y','y','n']],
        validator: function(input_list, output_list){
            if(output_list.length != 1){
                return {success: false, message: 'Computer should show your salary'};
            }else if(output_list[0] != 20000 * (input_list.length -1)){
                return {success: false, message: 'Your salary should be "' + (20000 * (input_list.length -1)) + '"'};
            }
            return {success: true, message: 'Nice. Keep your life in harmony'};
        }
    },
];
