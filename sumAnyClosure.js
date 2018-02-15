function sum(a) {
	 let currentSum=0;
  for(let i =0;i<arguments.length;i++){
  	currentSum+=arguments[i];
  }

	
  function f(b) {
    for(let i =0;i<arguments.length;i++){
      currentSum+=arguments[i];
    }
   // currentSum += b;
   // console.log(f);
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
console.log(sum(1,2,3)(4,-1,0)(1,2)(5)(8));