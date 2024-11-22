var findMedianSortedArrays = function(nums1, nums2) {
    let arr=[];
    let p1=nums1.length-1;
    let p2=nums2.length-1;

   for(let i=p1+p2+1;i>=0;i--){
         if(p1!=-1&&p2!=-1){
            if(nums1[p1]>nums2[p2]){
                arr[i]=nums1[p1];
                p1--;
                
            }else{
                arr[i]=nums2[p2];
                p2--;
            }
         }else{
            if(p1===-1){
                arr[i]=nums2[p2];
                p2--;
            }else{
                arr[i]=nums1[p1];
                p1--;
            }
         }

    }
    let m1=arr.length;
    if(m1%2===0){
        let mm=m1/2;
        return (arr[mm]+arr[mm-1])/2
    }else {
        return arr[Math.floor(arr.length/2)]
    }
};