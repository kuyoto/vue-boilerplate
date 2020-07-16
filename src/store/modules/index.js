// automatically imports all the modules and exports as a single module object
// const requireModule = require.context('.', true, '/\.store\.js$/')
const requireModule = require.context(
  // search for files in the current directory
  '.',
  // search for files in subdirectories
  true,
  // Include any .js files
  /\.js$/
)

const modules = {}

requireModule.keys().forEach((fileName) => {
  // create the module name from fileName
  // remove the store.js extension and capitalize
  // const moduleName = filename.replace(/(\.\/|\/.*\.store\.js)/g, '')

  modules[fileName] = requireModule(fileName).default || requireModule(fileName)
})

export default modules
