import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import styled from 'styled-components'

import {fileActions} from '../store/fileReducer.js'
import {data, recursiveData} from '../data.js'



const SearchViewComponent = styled.div`
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

const SearchView = () => {
  const [showOutPut, setShowOutPut] = useState(false)
  const [path, setPath] = useState("")
  const fileState = useSelector(s => s.file)
  const fileData = [...recursiveData]

  const dispatch = useDispatch()
  //when folderdownview2 is clicked we remove the global currentfile
  const removeGlobalCurrentFile = () => {
    dispatch(fileActions.clearCurrentFile())
  }
  //this data is got by recursively searching all the files

  useEffect(() => {
    setPath(fileState.pathString)
  }, [fileState.pathString])

  const onClickHandler = () => {
    setShowOutPut(true)
  }
  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const [searchInput, setSearchInput] = useState("")

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

  return (
    <>
      <SearchViewComponent >
        <Path onClick={ () => {
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
        {showOutPut && outPut }
      </SearchViewComponent>
      </>
  )
}

export default SearchView
