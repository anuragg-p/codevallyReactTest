import Folder from './Folder'
import File from './File'

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

export default TreeRecursive
