touch resume.txt
for filename in _flowcharts/png/*.png 
do
    lesson="${filename/_flowcharts\/png\//}"
    lesson="${lesson/\.png/}"

    echo "{
        code      : '$lesson',
        caption   : '$lesson',
        test_case : [],
        validator : function(input_list, output_list){
            return {success: true, message: 'Nice. Please click \"Ok\" to continue'};
        }
    }," >> resume.txt
    #echo $lesson
    cp -R 00-flowchart $lesson
    cp $filename $lesson/gambar.png
done
