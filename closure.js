// closure
function test1(){
  const num1 = 1;
  return function test2(){
    console.log(num1);
  }
}

const getTest2 = test1();
getTest2();