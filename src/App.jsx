import styled from 'styled-components'
import SearchView from './components/SearchView'
import FolderView from './components/FolderView'

const AppView = styled.div`
  width:80%;
  height:600px;
  margin:auto;
  margin-top:50px;
  border:1px solid grey;
  display:flex;
`

//Main component -----------------------------------------------------------------
const App = () => {
  return (
    <AppView >
      <FolderView />
      <SearchView />
    </AppView>
  )
}

export default App
