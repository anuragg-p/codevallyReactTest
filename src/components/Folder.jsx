import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fileActions } from '../store/fileReducer'
import styled from 'styled-components'
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';

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

export default Folder
