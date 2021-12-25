// lexical scope
function test1(){
  const num1 = 1;
  function test2(){
    const num2 = 2;
    function test3(){
      // I was curious if I could reach all outer variables
      console.log(num1);
      console.log(num2);
    }
    test3();
  }
  test2();
}

test1();