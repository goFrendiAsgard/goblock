var LESSONS = [

    {
        code      : '00-01-introduction',
        caption   : '00 - 01 Pengenalan',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '00-02-simbol-flowchart',
        caption   : '00 - 02 Simbol Flowchart',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '00-03-bahasa-pemrograman',
        caption   : '00 - 03 Bahasa Pemrograman',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '01-01-output-hello',
        caption   : '01 - 01 String',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '01-02-output-10',
        caption   : '01 - 02 Number',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '01-03-output-true',
        caption   : '01 - 03 Boolean',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '01-04-output-hello-10-true',
        caption   : '01 - 04 String, Number, dan Boolean',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length != 3){
                return{success: false, message: 'Program harus menampilkan tiga output, "Hello", 10, dan true'}
            }
            if(output_list[0] != "Hello"){
                return{success: false, message: 'Output pertama harus kata "Hello"'}
            }
            if(output_list[1] !== 10){
                return{success: false, message: 'Output kedua harus angka 10'}
            }
            if(output_list[2] !== true){
                return{success: false, message: 'Output ketiga harus nilai boolean true'}
            }
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '02-01-output-hello-world',
        caption   : '02 - 01 Hello World',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length == 1 && output_list[0] == "Hello World"){
                return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
            }
            return{success: false, message: 'Output yang diberikan harus "Hello World"'}
        }
    },

    {
        code      : '02-02-output-hello-plus-world',
        caption   : '02 - 02 Concatenation (Penggabungan String)',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length == 1 && output_list[0] == "Hello World"){
                return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
            }
            return{success: false, message: 'Output yang diberikan harus "Hello World"'}
        }
    },

    {
        code      : '02-03-output-5-plus-4',
        caption   : '02 - 03 Operasi Aritmetik',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length == 1 && output_list[0] === 9){
                return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
            }
            return{success: false, message: 'Output yang diberikan harus 9'}
        }
    },

    {
        code      : '02-04-output-5-less-than-4',
        caption   : '02 - 04 Operasi Perbandingan',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length == 1 && output_list[0] === false){
                return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
            }
            return{success: false, message: 'Output yang diberikan harus false'}
        }
    },

    {
        code      : '02-05-output-not-true',
        caption   : '02 - 05 Negasi',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length == 1 && output_list[0] === false){
                return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
            }
            return{success: false, message: 'Output yang diberikan harus false'}
        }
    },

    {
        code      : '02-06-true-and-false',
        caption   : '02 - 06 Benar dan salah?',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length == 1 && output_list[0] === false){
                return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
            }
            return{success: false, message: 'Output yang diberikan harus false'}
        }
    },

    {
        code      : '02-07-true-or-false',
        caption   : '02 - 06 Benar atau salah?',
        test_case : [],
        validator : function(input_list, output_list){
            if(output_list.length == 1 && output_list[0] === true){
                return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
            }
            return{success: false, message: 'Output yang diberikan harus true'}
        }
    },

    {
        code      : '03-01-input-nama',
        caption   : '03 - 01 Your Name',
        test_case : [['Daenarys Queen of Meereen, Queen of the Andals(, the Rhoynar,) and the First Men, Lady Regnant of the Seven Kingdoms, Khaleesi of the Great Grass Sea, Mhysa, Breaker of Chains, the Unburnt, Mother of Dragons'], ['Uvwevwevwe Onyeteyevwe Ugwemubgwem Osas']],
        validator : function(input_list, output_list){
            if(output_list.length == 1 && output_list[0] === input_list[0]){
                return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
            }
            return{success: false, message: 'Output yang diberikan harus sama dengan input'}
        }
    },

    {
        code      : '03-02-hello-nama',
        caption   : '03 - 02 Hello again',
        test_case : [['Daenarys Queen of Meereen, Queen of the Andals(, the Rhoynar,) and the First Men, Lady Regnant of the Seven Kingdoms, Khaleesi of the Great Grass Sea, Mhysa, Breaker of Chains, the Unburnt, Mother of Dragons'], ['Uvwevwevwe Onyeteyevwe Ugwemubgwem Osas']],
        validator : function(input_list, output_list){
            if(output_list.length == 1 && output_list[0] === "Hello " + input_list[0]){
                return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
            }
            return{success: false, message: 'Output yang diberikan harus sama dengan "Hello " + input'}
        }
    },

    {
        code      : '03-04-penjumlahan',
        caption   : '03-04-penjumlahan',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '03-05-penjumlahan-variable',
        caption   : '03-05-penjumlahan-variable',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '04-01-if-false',
        caption   : '04-01-if-false',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '04-02-if-true',
        caption   : '04-02-if-true',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '04-03-if-3-less-than-4',
        caption   : '04-03-if-3-less-than-4',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '04-04-if-3-greater-than-4',
        caption   : '04-04-if-3-greater-than-4',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '04-05-if-lulus',
        caption   : '04-05-if-lulus',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '04-06-if-lulus-if-not-lulus',
        caption   : '04-06-if-lulus-if-not-lulus',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '04-07-if-lulus-else',
        caption   : '04-07-if-lulus-else',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '05-01-1-2-3',
        caption   : '05-01-1-2-3',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '05-02-i',
        caption   : '05-02-i',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '05-03-i-if',
        caption   : '05-03-i-if',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '05-04-while',
        caption   : '05-04-while',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '05-05-while-input',
        caption   : '05-05-while-input',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

    {
        code      : '05-06-while-if',
        caption   : '05-06-while-if',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Bagus!!! Tekan tombol "Ok" untuk melanjutkan'};
        }
    },

];
