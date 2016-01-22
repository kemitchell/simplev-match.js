module.exports = simplevMatch

var parse = require('simplev-parse')

// Components of a simplev, in descending order of precedence.
var components = [ 'edition', 'update', 'correction', 'draft' ]

function simplevMatch(requirementString, simplevString) {
  // First argument must be a valid simplev.
  var requirement = parse(requirementString)
  if (!requirement) {
    throw new Error(
      'Invalid requirement string' +
      ' "' + requirementString + '"') }
  // Second argument must be a valid simplev.
  var simplev = parse(simplevString)
  if (!simplev) {
    throw new Error(
      'Invalid simplev string' +
      ' "' + simplevString + '"') }
  // Does the simplev match the requirement?
  return components.every(function(c) {
    return (
      !simplev.hasOwnProperty(c) ||
      parseInt(requirement[c]) <= parseInt(simplev[c]) ) }) }
