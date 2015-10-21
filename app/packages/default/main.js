'use strict'

const cleverCore = require('clever-core')
const Package = cleverCore.Package

// Defining the Package
var DefaultPackage = new Package('default')

// All CLEVER packages require registration
DefaultPackage
  .attach({
    where: '/'
  })
  .routes(['app', 'config', 'awesome'])
  .models()
  .register()

// Just testing the lazy registration
cleverCore.register('awesome', (config) => {
  return 'Clever is Awesome!'
})
