const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){ 
it("It should works for basic tests.", function(){

Test.assertEquals(maximizePoints([3, 2, 4], [1, 2, 3]),3)

Test.assertEquals(maximizePoints([1],[99]),0)

Test.assertEquals(maximizePoints([99],[1]),1)

Test.assertEquals(maximizePoints([25, 7, 26, 48],[1, 36, 5, 33]),3)

Test.assertEquals(maximizePoints([7, 19, 23, 18, 38, 37, 38, 40],[21, 12, 1, 0, 13, 38, 25, 49]),7)

})})s