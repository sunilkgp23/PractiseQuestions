function processData(input) {
    let resultArr=[];
    let maxValue=-Infinity;
    let arr=input.split("\n");
    for(let i=0;i<arr.length;i++){
        let line=arr[i].split(' ');
        if(parseInt(line[0])==1){
            maxValue=Math.max(line[1],maxValue);
            resultArr.push([line[0], maxValue]);
        }
        if(parseInt(line[0])==2){
        		if(resultArr.length>=2)
            	maxValue=resultArr[resultArr.length-2][1];
            else
            	maxValue=-Infinity;
            resultArr.pop();
        }
        if(parseInt(line[0])==3){
            let maxNum=resultArr[resultArr.length-1][1];
            process.stdout.write(maxNum+"\n");
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});