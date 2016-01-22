```javascript
var match = require('simplev-match')
var assert = require('assert')

assert( match('1.1.1',   '1.1.1'))
assert( match('1.1.0',   '1.1.1'))
assert( match('1.0.0-1', '1.0.0'))
assert( match('1.0.0-1', '1.0.0-2'))

assert(!match('2.0.0',   '1.1.1'))
assert(!match('2.0.0',   '1.1.1'))
assert(!match('1.1.2',   '1.1.1'))
assert(!match('1.1.1',   '1.0.1'))
assert(!match('1.0.0-2', '1.0.0-1'))

assert.throws(
  function() {
    match('not a simplev', '1.0.0') },
  /Invalid requirement string "not a simplev"$/)

assert.throws(
  function() {
    match('1.0.0', 'not a simplev') },
  /Invalid simplev string "not a simplev"$/)
```
