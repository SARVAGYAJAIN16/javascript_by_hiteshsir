// for loop....
// remember {} inside curly braces it is block scope

for(let i = 0 ; i<= 10; i++ ){
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
}

// output
/*
0
1
2
3
4
5 is best number
5
6
7
8
9
10
*/

for(let i=0 ; i <= 2 ; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j = 0; j<= 3 ;j++)
    {
       console.log(`Inner loop value ${j} and outer loop ${i}`)
    }
}
/*
Outer loop value: 0
Inner loop value 0 and outer loop 0
Inner loop value 1 and outer loop 0
Inner loop value 2 and outer loop 0
Inner loop value 3 and outer loop 0
Outer loop value: 1
Inner loop value 0 and outer loop 1
Inner loop value 1 and outer loop 1
Inner loop value 2 and outer loop 1
Inner loop value 3 and outer loop 1
Outer loop value: 2
Inner loop value 0 and outer loop 2
Inner loop value 1 and outer loop 2
Inner loop value 2 and outer loop 2
Inner loop value 3 and outer loop 2
*/

let myArr = ["flash", "batman", "superman"]
for( let index = 0; index < myArr.length; index++){
    const element = myArr[index];
    console.log(element);
}
// output
/* 
flash
batman
superman
*/

// break and continue keyword

// break keywords
for(let i=1; i<=6; i++)
{
    if(i == 5){
        console.log(`Detected 5 `);
        break;
    }
    console.log(`Value of i is ${i}`);
}
// output:-
/*
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
*/

// continue keyword
// To remember continue (ek baar maaf kar du... maaf is iteration (usha ignore kar du))
for(let i=1; i<=7; i++)
{
    if(i == 5){
        console.log(`Detected 5 `);
        continue;
    }
    console.log(`Value of i is ${i}`);
}
// output
/*
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5       // here 5 is not printed (ek condition ignore kar di)
Value of i is 6
Value of i is 7
*/