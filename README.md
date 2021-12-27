#How to implement this 
The obvious answer is Through Recursion because it makes our lives worthwhile

the base case should be -------> SHOW A FILE

the Recusive case should be ---> SHOW FOLDERS &
                                 if there is a children call the recursive function again 


##GLOBAL STATES
------------------
#CURRENT_FILE STATE
the current file state should be used to highlight the currentfile

#PATH
------------------
path is a global string which stores a path when a folder or file gets clicked

WHEN A FOLDER GETS CLICKED
--------------------------
when a folder gets clicked and it is open it shows its path with name (path is path and name is the folder's name)

##COMPONENTS
------------------
#TREE
------------------
This is the top level component which calls the recursive case.

#FILE
------------------
file is just a simple component to show the files.


#FOLDER
-----------------
but folder is tricky since we also have to show the nested folders and files when
it gets clicked.

#PROPERTIES (properties of a file)
----------------
the properties are 
name, [string]
type [folder or file]
childrens [ array with objects inside (files and folders)]


--------------------------
WHEN A FOLDER IS CLICKED

when a folder gets clicked we would implement the collapsible component which renders all the children of the folder which maybe files or folders.

##SEARCH_METHOD

#RECURSIVELY GETTING ALL THE FILES AND STORING IT FOR SEARCH
we should recusively get all the files and then store it in a global variable to use ".map" method to search and and output the data and when clicked we should set the current path to its path and current file  

##COLLAPSE ALL (I didnt add it but it is an idea)

i didnt do the "open " property of all folders but it should be added so that when a search is made and it is clicked every folder should collapse and the file would be then selected




