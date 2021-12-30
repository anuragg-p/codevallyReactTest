import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fileActions } from './store/fileReducer'

import { AiOutlineFile, AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';

import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";

import styled from 'styled-components'


const fileIcons = {
  js: <DiJavascript1 />,
  css: <DiCss3Full />,
  html: <DiHtml5 />,
  jsx: <DiReact />
};

const data = [
  {
    type: "folder",
    depth: 0,
    name: "folder1",
    path: '/',
    childrens: [
      {
        type: "folder",
        depth: 1,
        name: "folder21",
        path: '/folder1/',
        childrens: [
          {
            type: "file",
            depth: 2,
            path: '/folder1/folder21/',
            name: "file1.jsx"
          },
          {
            type: "file",
            path: '/folder1/folder21/',
            depth: 2,
            name: "file2.js"
          }
        ]
      },

      {
        type: "folder",
        depth: 1,
        name: "folder22",
        path: '/folder1/',
        childrens: [
          {
            type: "file",
            depth: 2,
            path: '/folder1/folder22/',
            name: "file221.css"
          },
          {
            type: "file",
            path: '/folder1/folder22/',
            depth: 2,
            name: "file222.html"
          }
        ]
      },
      {
        type: "file",
        depth: 1,
        path: '/folder1/',
        name: "file3.jsx"
      },
      {
        type: "file",
        depth: 1,
        path: '/folder1/',
        name: "file4.js"
      }
    ]
  },
  {
    type: "file",
    depth: 0,
    path: '/',
    name: "file5.html"
  }
]

const recursiveData = [
  {
    "type": "file",
    "depth": 2,
    "path": "/folder1/folder21/",
    "name": "file1.jsx"
  },
  {
    "type": "file",
    "path": "/folder1/folder21/",
    "depth": 2,
    "name": "file2.js"
  },
  {
    "type": "file",
    "depth": 2,
    "path": "/folder1/folder22/",
    "name": "file221.css"
  },
  {
    "type": "file",
    "path": "/folder1/folder22/",
    "depth": 2,
    "name": "file222.html"
  },
  {
    "type": "file",
    "depth": 1,
    "path": "/folder1",
    "name": "file3.jsx"
  },
  {
    "type": "file",
    "depth": 1,
    "path": "/folder1/",
    "name": "file4.js"
  },
  {
    "type": "file",
    "depth": 0,
    "path": "/",
    "name": "file5.html"
  }
]
//Tree -------------------------------------------
const TreeView = styled.div`
  line-height:2;
`

const Tree = ({ data }) => {
  return (<TreeView>
    <TreeRecursive data={data} />
  </TreeView>)
}

//File view -------------------------------------------------------


//FolderView ----------------------------------------------------------
const FolderComponent = styled.div`
  padding-left:20px;
  cursor:pointer;

  .folder {
    align-items:center;
    display:flex;
    span {
    margin-left:5px;
    }
  }
`
//for the collapsable option in the Folder Component

const Collapsible = styled.div`
  height:${p => (p.isOpen ? 'auto' : '0')};
  overflow:hidden;
`
////--------------------------------------------
const Folder = ({ name, depth, path, children }) => {
  const dispatch = useDispatch()
  const fileState = useSelector(s => s.file)
  const [isOpen, setIsOpen] = useState(false)

  const fileName = name
  //the path array

  const toggleCollapsible = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
    // if (!isOpen) dispatch(fileActions.setGlobalCollapseFalse())
    //ToUpdate the global path
    addThePathByIndex({ index: depth, name: fileName, path: path })
  }


  //function to update the path
  const addThePathByIndex = (obj) => {
    //main idea here is we output the path when a folder is open 
    // by outputting only path and name and when the folder is closed
    // It will upadate only its path


    if (isOpen) {
      //This is the real function for setting the path
      dispatch(fileActions.addToPathString(obj.path))
      //This is not in use currently
      dispatch(fileActions.addToPathByIndex({ index: obj.index, name: obj.name }))
    }
    if (!isOpen) {
      const thePath = [...fileState.path]
      const updatedPath = thePath.splice(0, obj.index)

      dispatch(fileActions.updatePath(updatedPath))
      //this is in use currently
      dispatch(fileActions.addToPathString(obj.path + obj.name))
    }
  }
  const folderOpen = isOpen && isOpen ? <AiOutlineFolderOpen /> : <AiOutlineFolder />

  return (
    <FolderComponent>
      <div className="folder" onClick={toggleCollapsible}>
        {folderOpen}
        <span >{name} </span >
      </div>

      <Collapsible isOpen={isOpen} > {children}</Collapsible>
    </FolderComponent>
  )
}

//The Main Recursive function

const TreeRecursive = ({ data }) => {
  return data.map(item => {

    if (item.type === 'file') {
      return <File name={item.name} depth={item.depth} path={item.path} name={item.name} />
    }

    if (item.type === 'folder') {
      return (
        <Folder name={item.name} depth={item.depth} path={item.path}>
          <TreeRecursive data={item.childrens} />
        </Folder >
      )
    }
  })
}

//--------------------------------Main-----------------------------
const AppView = styled.div`
  width:80%;
  height:600px;
  margin:auto;
  margin-top:50px;
  border:1px solid grey;
  display:flex;
`
const FolderView = styled.div`
  flex:1;
  width:90%;
  margin:auto;
  margin-top:5px;
  margin-bottom:5px;
  border-right:1px solid grey;
`
const FolderDownView1 = styled.div`
  flex:1;
`
const FolderDownView2 = styled.div`
  flex:1;
  height:100vh;
`

const SearchView = styled.div`
  flex:1;
  width:90%;
  margin:auto;
  margin-top:5px;
  margin-bottom:5px;
`
const Path = styled.h3`
  color:grey;
  letter-spacing:0.2px;
  margin:50px 30px;
  span {
    color:darkgrey;
  }
`
const SearchBar = styled.input`
  border:2px solid lightgrey;
  border-radius:5px;
  width:50%;
  margin-left:30px;
  margin-top:20px;
  margin-bottom:30px;
  height:30px;
`
const SearchButton = styled.button`
  background-color:white;
  border:2px solid teal;
  border-radius:5px;
  padding:7px 14px;
  color:teal;
  font-weight:bold;
  margin-left:5px;
  margin-bottom:30px;
  cursor:pointer;

  &:hover {
  background-color:teal;
  color:white
  };
`
const Output = styled.div`
  height:40px;
  margin-left:40px;
  width:70%;
  color:grey;
  border-bottom:2px solid lightgrey;
  cursor:pointer;
  &:hover {
  color:black;
  }
`
//Main component -----------------------------------------------------------------
const App = () => {
  const dispatch = useDispatch()
  const fileState = useSelector(s => s.file)
  const [path, setPath] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [showOutPut, setShowOutPut] = useState(false)

  const fileData = [...recursiveData]
  //when folderdownview2 is clicked we remove the global currentfile
  const removeGlobalCurrentFile = () => {
    dispatch(fileActions.clearCurrentFile())
  }

  useEffect(() => {
    setPath(fileState.pathString)
  }, [fileState.pathString])

  const onClickHandler = () => {
    setShowOutPut(true)
  }

  const outPut = fileData.map((data) => {
    if (data.name.includes(searchInput)) {
      return (
        <Output onClick={
          () => {
            dispatch(fileActions.addToCurrentFile(data.name))
            dispatch(fileActions.addToPathString(data.path + data.name))
          }
        }>
          {data.name}<span style={{ width: '10px' }}>  </span><span style={{ color: 'teal' }}>{data.path} </span >
        </Output>)
    }
  })
  //This was another method of outputing dynamic path
  /*
    const pathOutPut = fileState.path.map((path) => (
      <> {path} /</>
    ))
  
  */
  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <AppView >

      <FolderView>
        <FolderDownView1>
          <Tree data={data} />
        </FolderDownView1>

        <FolderDownView2 onClick={
          () => {
            removeGlobalCurrentFile()

            setShowOutPut(false)
          }
        }> </FolderDownView2 >
      </FolderView>

      <SearchView >
        <Path onClick={
          () => {
            removeGlobalCurrentFile()
            setShowOutPut(false)
          }
        }>
          <span> Path: </span>
          {path}
        </Path>
        <SearchBar value={searchInput} onChange={inputChangeHandler} ></SearchBar>
        <SearchButton onClick={onClickHandler}> Search Files </SearchButton>
        <Output style={{ color: 'black' }}>
          OUTPUT
        </Output>
        {showOutPut && outPut}
      </SearchView>
    </AppView>
  )
}


export default App
