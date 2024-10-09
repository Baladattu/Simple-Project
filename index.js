let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
/* Find Even Numbers in an array */
even = []
for(i=0; i<a.length; i++){
    if(a[i]%2===0){
        even.push(a[i]);
    }
}

console.log(even);
