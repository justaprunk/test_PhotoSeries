var operations = require('./operations')

it ('should get proper type', function()) {
  var expectedType = "integer"
  for (let i = 0; i < length; i++) {
    var resultType = (typeof 'tag[i]')
    if (resultType !== expectedType) {
      throw new Error(
        "Expected ${expectedType}, but got ${resultType}"
      )
    }
  }

}
