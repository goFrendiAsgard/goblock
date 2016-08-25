Goblock
=======
A visual programming for newbies. Goblock is built on top of google blockly. Compared to the original google blockly, it has several advantages:

* No ugly alert and prompt
  Goblock use stratified.js and bootstrap-modal to completely replace alert and prompt (except when you enter debugging mode). Thus, your risk of accidentally check "Prevent this page from creating another dialog" will be minimalized.

* Console-like output
  Rather than using javascript alert, goblock prints the output into console-like interface, thus you can retrieve the output history easier. I also have modify it can print array beautifuly.

* Better toolbox arrangement
  The toolbox is arranged in a more practical order, so that you won't have any difficulty to find where-is-what.

* Real time source code translation
  You can immediately look for corresponding python, javascript, php, dart, or lua code in the same screen.

Click [here](https://gofrendiasgard.github.io/goblock) for demo.

Requirement
-----------

To run goblock, you need a web server.

If you have Python installed, you can simply run `Python -m SimpleHTTPServer` in this directory.

If you use windows, you can install xampp.
