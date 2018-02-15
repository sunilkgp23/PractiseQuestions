function work(a, b) {
  return ( a + b ); // work is an arbitrary function or method
}


function spy(func){
	wrapper.calls=[];
  let cache=new Map();
  function wrapper(){
  		let result;
  		let key="call:"+arguments[0]+','+arguments[1];
      wrapper.calls.push(key);
      if(cache.has(key)){
      	result=cache.get(key);
        console.log("already here");
        }
      else{
      console.log("need to calculate");
      	result= func.call(this, ...arguments);
      	cache.set(key,result);
      }  
      
  	return result;
  }
  
  return wrapper;
}
work = spy(work);

console.log(work(1, 2));
console.log(work(1, 2)); // 3
console.log(work(4, 5)); // 9

 for (let args of work.calls) {
  console.log(  args ); // "call:1,2", "call:4,5"
 }  