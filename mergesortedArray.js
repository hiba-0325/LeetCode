var merge = function(nums1, m, nums2, n) {
    let merge = [...nums1.slice(0,m),...nums2]
merge.sort((a,b)=>a-b)
for(let i=0;i<merge.length;i++){
 nums1[i]=merge[i]
}
return nums1
};