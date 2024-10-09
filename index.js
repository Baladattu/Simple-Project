let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
/* Find Even Numbers in an array */
let even = []
for (i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        even.push(a[i]);
    }
}

console.log(even);

/* Find Odd numbers in an array */
let odd = []
for (i = 0; i < a.length; i++) {
    if (a[i] % 2 === 1) {
        odd.push(a[i]);
    }
}

console.log(odd);

let n = 12;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}
for (let i = n; i >= 1; i--) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat(n-i)+str.repeat(i));
}

