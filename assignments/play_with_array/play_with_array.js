function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
   res=[] 
   for(i=0;i<arr.length;i++){     //0,1,2,3,4,5  //[1,,4,5,77,8,90]
       if(arr[i]%2===0){          //arr[0]%2 ==1%2==0 F
           res.push(arr[i])       //arr[1]=4%2==0T=>res.push(4)
        }
   }
   return res
}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
   for(i=0;i<arr.length;i++){   //0to3 [1,3,4,55] ,3
        let mul=arr[i]*n         //mul=arr[0]*n = 1*3=3
        arr[i]=mul
   }                             //mul=arr[1]*3=3*3=3
   return arr
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
   //for(i=0;i<arr.length;i++){   //0to4   //n=3
       //if(i==n){               //0==3 F  //1==3==f //2==3f //3==3T
    arr.splice(n,1)     //arr.splice(3,1)
    return arr
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}