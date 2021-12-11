var operations = require('./operations')

it('should get proper type, length and content', function()) {

  var expectedResustType = "sting"
  var resultType = (typeof 'name')

  if (resultType !== expectedResustType) {
    throw new Error(
      "Expected ${expectedResust}, but got ${resultType}"
    )
  }

  var expectedResustContent = "unit-test"
  var resultContetn = name

  if (resultContetn !== expectedResustContent) {
    throw new Error(
      "Expected ${expectedResustContent}, but got ${resultContetn}"
    )
  }

  var expectedResultLengthMin = 1
  var expectedResultLengthMax = 40
  var resultLength = name.length

  if (resultLength < expectedResultLengthMin) or (resultLength > expectedResultLengthMax) {
    throw new Error(
      "Expected length from ${expectedResultLengthMin} to ${expectedResultLengthMax},
      but got ${resultLength}"
    )
  }
}
