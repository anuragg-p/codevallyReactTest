
export const data = [
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

export const recursiveData = [
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
