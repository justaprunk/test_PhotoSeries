var operations = require('./operations')

it('should get proper type', function()) {
  var expectedResustType = "integer"
  var resultType = (typeof 'id')

  if (resultType !== expectedResustType) {
    throw new Error(
      "Expected ${expectedResust}, but got ${resultType}"
    )
  }
}
