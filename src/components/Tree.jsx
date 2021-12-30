import styled from 'styled-components'
import TreeRecursive from './TreeRecursive'

const TreeView = styled.div`
  line-height:2;
`
const Tree = ({ data }) => {
  return (<TreeView>
    <TreeRecursive data={data} />
  </TreeView>)
}

export default Tree

