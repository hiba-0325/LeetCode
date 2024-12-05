
// Q)  Given a large array of integers, print 10 elements in this order:
// 	Smallest, largest, 2nd smallest, 2nd largest and so on till 10 elements
// [15, 8, 42, 23, 4, 16, 50, 29, 9, 33, 7, 1, 60, 21, 37, 3]
// [1, 60, 3, 50, 4, 42, 7, 37, 8, 33]

function printElement(arr){

    arr.sort((a,b)=>a-b);

    let left=0;
    let right = arr.length-1;


    let result=[];

    for(let i= 0; i<5 ; i++ ){

        result.push(arr[left]);
        left++;

        result.push(arr[right]);
}


console.log(result);
}

const arr=[15,8,42,23,4,16,50,29,9,33,7,1,60,21,37,3];
printElement(arr);