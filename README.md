# Getting Started with FilePathPicker component

Component imitates native file picker dialogs. It's allow to select path to single file.

### JSON Schema example:

```
{
  "path": "Folder name",
  "type": "folder",
  "children": [
    {
      "path": "Another folder name",
      "type": "folder",
      "children": []
    },
    {
      "path": "File name",
      "type": "file"
    }
  ]
}
```

### Helper functions

`getNodes` - takes JSON object as a starting node and a path pieces array as arguments and returns an array of nodes that are opened when traversing the file system structure according to the path.

`getFullPath` - takes a path pieces array as an argument and returns a string representation of the path using a specified delimiter ("/" by default).

Working example can be found [here](https://igorsharay.github.io/file-path-picker/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

