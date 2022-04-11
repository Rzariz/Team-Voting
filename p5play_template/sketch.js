var box;

var arr = [1, "Nimitt" , true , 90, 78, 56, 4 ,8 , 12, 9];
//console.log( arr );

//arr.push("coding");
//console.log(arr);
//console.log( arr.length - 1);

//console.log( arr[arr.length-1])

// arr.pop();
// console.log(arr);

var arr2 = [ [4,8] , [23,90] , [3, 1] , [6 , 2 , 77 , 21 , 88]   ];
console.log( arr2[3][4] );



function setup() {
  createCanvas(600,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background(0);//0-255
  drawSprites();

}




