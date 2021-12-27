import { createSlice } from '@reduxjs/toolkit'

const initialFolderState = {
  currentFileName: "",
  //path is an array with depths same as its indices
  newPath: [
    ["folder1"],
    ["folder2"]
  ],
  path: [],
  pathString: "",
  globalCollapse: false,
}

const fileSlice = createSlice({
  name: "fileSlice",
  initialState: initialFolderState,
  reducers: {
    //CurrentFile Reducers
    addToCurrentFile(state, action) {
      state.currentFileName = action.payload
    },
    clearCurrentFile(state, action) {
      state.currentFileName = ""
    },
    //pathReducers
    addToPath(state, action) {
      state.path = [...state.path, action.payload]
    },
    updatePath(state, action) {
      state.path = action.payload
    },
    addToPathByIndex(state, action) {
      state.path[action.payload.index] = action.payload.name
      //Experimantal feature here
      /*
      state.newPath = [
        ...state.newPath,
        state.newPath[action.payload.index] = action.payload.array
      ]
      */
    },

    addToPathString(state, action) {
      state.pathString = action.payload
    },
    setGlobalCollapseTrue(state) {
      state.globalCollapse = true
    },
    setGlobalCollapseFalse(state) {
      state.globalCollapse = false
    }
  }
})

export const fileActions = fileSlice.actions

export default fileSlice.reducer

