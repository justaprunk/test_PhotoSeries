var operations = require('./operations')

it('should get proper type, length and content', function()) {

  var expectedResustType = "sting"
  var resultType = (typeof 'price')

  if (resultType !== expectedResustType) {
    throw new Error(
      "Expected ${expectedResust}, but got ${resultType}"
    )
  }
