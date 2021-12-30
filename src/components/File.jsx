import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";
import { AiOutlineFile } from 'react-icons/ai'
import { fileActions } from '../store/fileReducer'

//File view -------------------------------------------------------
const FileView = styled.div`
  display:flex;
  padding-left:20px;
  align-items:center;
  span {
  margin-left:5px;
  background-color:${p => (p.name === p.currentFile ? '#b3e4e6' : '')};
  }
`

const fileIcons = {
  js: <DiJavascript1 />,
  css: <DiCss3Full />,
  html: <DiHtml5 />,
  jsx: <DiReact />
};

const File = ({ name, depth, path }) => {
  const fileType = name.split(".")[1]
  //here we are implementing thhe global current fileState
  const fileState = useSelector(s => s.file)
  const dispatch = useDispatch()
  //Recursive function to find the name of the current file to output to out path

  const setGlobalCurrentFile = (fileName, filePath) => {
    dispatch(fileActions.addToCurrentFile(fileName))
    //this is the real function to set the path
    dispatch(fileActions.addToPathString(filePath + fileName))
    //Recursively find a file
  }

  return (
    <FileView name={name} currentFile={fileState && fileState.currentFileName}>
      {fileIcons[fileType] || <AiOutlineFile />}
      <span onClick={() => setGlobalCurrentFile(name, depth, path)}> {name}  </span>
    </FileView>
  )
}

export default File
