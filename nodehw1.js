const perimeter = (large,width) => 2*(large+width);
const area = (large,width) => large*width;

const large = 10;
const width = 5;

const perimeterValue = perimeter(large,width);
const areaValue = area(large,width);

console.log(`Perimeter of rectangle is ${perimeterValue}`);
console.log(`Area of rectangle is ${areaValue}`);