import { useDispatch } from 'react-redux'
import { fileActions } from '../store/fileReducer'

import styled from 'styled-components'
import Tree from '../components/Tree'
import { data } from '../data'

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
const FolderViewComponent = () => {
  const dispatch = useDispatch()

  const removeGlobalCurrentFile = () => {
    dispatch(fileActions.clearCurrentFile())
  }
  return (
    <>
      <FolderView>
        <FolderDownView1>
          <Tree data={data} />
        </FolderDownView1>
        <FolderDownView2 onClick={
          () => {
            removeGlobalCurrentFile()
          }
        }> </FolderDownView2 >
      </FolderView>
    </>
  )
}

export default FolderViewComponent
