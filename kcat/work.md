Wcat 
It is used to display or make a copy content of one or more files in the terminal

Commands:
1- wcat filepath => displays content of the file in the terminal heavy_check_mark 
2- wcat filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order. heavy_check_mark 
3- wcat -s filepath => convert big line breaks into a singular line break heavy_check_mark

4- wcat -n filepath => give numbering to all the lines heavy_check_mark 
5- wcat -b filepath => give numbering to non-empty lines heavy_check_mark 
6- wcat filepath > filename2path => put all the content of filename into filename2 by overriding and also creates filename2 if it doesn't exist. heavy_check_mark 
7- wcat filename2path >> filename2path => append all the content of filename into filename2heavy_check_mark 
8- node wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2 heavy_check_mark We can mix and match the options.

Edge cases:
1- If file entered is not found then it gives file does not exist error. 
2- -n and -b are 2 options available together then command should give you an error