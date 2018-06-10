'use strict'

const path = require('path')

/**
 * Return a function which will itself can require() a module relative to rootPath.
 *
 * @param {String} rootPath
 * @returns {function(*=): *}
 */
module.exports = (rootPath) => {
  if (rootPath.constructor !== String) {
    throw new Error('rootPath must be a string.')
  }

  return (modulePath) => {
    if (modulePath.constructor !== String) {
      throw new Error('modulePath must be a string')
    }

    return require(path.join(rootPath, '/', modulePath))
  }
}
