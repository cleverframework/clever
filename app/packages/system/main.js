'use strict'

let cleverCore = require('clever-core')
let Package = cleverCore.Package

// Defining the Package
var SystemPackage = new Package('system')

// All CLEVER packages require registration
SystemPackage
  .attach({
    where: '/'
  })
  .routes(['app', 'config', 'auth'])
  .models()
  .register()

// Just test a lazy registration
cleverCore.register('auth', (config) => {
  return 'isAwesome'
})
