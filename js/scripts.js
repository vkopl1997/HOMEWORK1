//  task 1
const firstArray =[2,8,-6,3,6,-1,9,-3,4,5];
console.log(firstArray);
const filteredArray = firstArray.filter(num => num > 0);

console.log(filteredArray);

const total = filteredArray.reduce(
    (total, current) => total + current,
    0);
console.log(total);  
//   task 2
let arr1= ['b', 'a', 'a', 'a', 'b', 'c', 'a', 'b', 'a', 'a', 'c', 'b', 'a', 'f', 'f'];

newArray= arr1.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  console.log(newArray);

//   task 3
class Car {
    constructor(brand,model,speed =0){
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.motion = 'The car is not moving';
    }
    check_motion(){
        if(this.speed >0){
            return this.motion = 'The car is moving';
        }else{
            return this.motion
        }
    };
    accelerate(plusSpeed){
        return this.speed += plusSpeed;
    };
    brake(minusSpeed){
        return this.speed -= minusSpeed;
    };
    emergency_brake(){
        return this.speed = 0;
    }
    status(){
        return `მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია: ${this.check_motion()}`
    }
};
const carInfo = new Car('Mini','Cooper',80);
console.log(carInfo.speed);
console.log(carInfo.brake(30));
console.log(carInfo.accelerate(20));
// console.log(carInfo.emergency_brake());
console.log(carInfo.status());

// task 4
const value1 = 10;
const value2 =  undefined;
const promise = new Promise((resolve, reject) => {
    if(typeof value1 === 'number' && typeof value2 === 'number'){
        resolve(value1 + value2)
    }else{
        reject('error!!!')
    } 
});

promise.then(values => {
  console.log('result:', values);
}).catch(err=>{
  console.log('oops',err);
   
});