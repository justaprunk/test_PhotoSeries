var operations = require('./operations')

it('should get proper type, length and content', function()) {

  var expectedResustType = "sting"
  var resultType = (typeof 'description')

  if (resultType !== expectedResustType) {
    throw new Error(
      "Expected ${expectedResust}, but got ${resultType}"
    )
  }

  var expectedResustContent = "testing description 4 test_1"
  var resultContetn = name

  if (resultContetn !== expectedResustContent) {
    throw new Error(
      "Expected ${expectedResustContent}, but got ${resultContetn}"
    )
  }

  var expectedResultLengthMax = 300
  var resultLength = description.length

  if resultLength > expectedResultLengthMax {
    throw new Error(
      "Expected length lesser, than ${expectedResultLengthMax},
      but got ${resultLength}"
    )
  }
}
