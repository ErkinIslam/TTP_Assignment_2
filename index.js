function main(){
    let array = [1, 2, 3, 4, 5];

    console.log("Calling myEach with incremenet as a callback. Unmodified Array:")
    myEach(array, increment);
    console.log('\n');

    let mappedArray = myMap(array, increment);
    console.log("Calling myMap with incremenet as a callback. Modified Array:")
    console.log(mappedArray);
    console.log('\n');

    let filtedArray = myFilter(array, even);
    console.log("Calling myFilter with even as a callback. Result:")
    console.log(filtedArray);
    console.log('\n');

    console.log("Calling mySome and checking if the original array has an even number.\nVerdict: " + mySome(array, even));
    console.log('\n');

    console.log("Calling myEvery and checking if all the elements of the original array are even.\nVerdict: " + myEvery(array, even));
    console.log('\n');

    console.log("Calling myReduce on the original array.\nResult: " + myReduce(array, increment));
    console.log('\n');

    console.log("Calling myIncludes on the original array, checking if there is a 2 present.\nResult: " + myIncludes(array, 2));
    console.log('\n');

    console.log("Adding [1, 1, 5, 3, 2, 1] to the original array for the index func using myPush");
    console.log("Adding: 1" + ", new length is: " + myPush(array, 1));
    console.log("Adding: 1" + ", new length is: " + myPush(array, 1));
    console.log("Adding: 5" + ", new length is: " + myPush(array, 5));
    console.log("Adding: 3" + ", new length is: " + myPush(array, 3));
    console.log("Adding: 2" + ", new length is: " + myPush(array, 2));
    console.log("Adding: 1" + ", new length is: " + myPush(array, 1));
    console.log("New array is: ");
    console.log(array);
    console.log('\n');

    console.log("Calling myIndexOf on 3.\nIndex: " + myIndexOf(array, 3));
    console.log('\n');

    console.log("Calling myLastIndexOf on 3.\nIndex: " + myLastIndexOf(array, 3));
    console.log('\n');

    obj = { a: 1, b: 2, c: 3};
    
    console.log("Grabbing keys: ")
    console.log(obj.grabKeys(obj));
    console.log("\nGrabbing vals: ")
    console.log(obj.grabValues(obj));

    a = [1, 2, 3, 4, 5];

    console.log(" ");
    
    console.log("Sum of range 0, 2 is: " + a.sumOfRange(0, 2) + "\n");

    console.log("Reversed array is: " + a.reverseArray() + "\n");

    let list = a.arrayToList();

    console.log("Priting out the array to list: ")
    console.log(list.rest) // On my terminal only prints out up to 3, but below line should print out to element 5.
    // console.log(list.rest.rest);
    console.log('\n')

    obj1 = { a:1, b:2, c:3};
    obj2 = { a:1, b:2, c:3};
    obj3 = { a:"1", b:2, c:3};
    obj4 = { a: {a1: 1}, b:2, c:3};

    console.log("Comparing obj1 with obj2. Verdict: " + obj1.deepCopy(obj2))
    console.log("Comparing obj1 with obj3. Verdict: " + obj1.deepCopy(obj3))
    console.log("Comparing obj1 with obj4. Verdict: " + obj1.deepCopy(obj4) + '\n');

    let testArr = [1, 2, 0, 3, 4, 0, 5, 6, 0, 7];

    console.log(pushZeroesToBack(testArr));
}



// Functions declarations
function myEach(arr, cb){
    for(let i = 0; i < arr.length; i++)
        console.log(cb(arr[i]));
}

function myMap(arr, cb){
    const modArr = [];
    for(let i = 0; i < arr.length; i++)
        modArr.push(cb(arr[i]));
    return modArr;
}

function myFilter(arr, cb){
    const modArr = [];
    for(let i = 0; i < arr.length; i++)
        if(cb(arr[i])) 
            modArr.push(arr[i]);
    return modArr;
}

function mySome(arr, cb){
    const modArr = [];
    for(let i = 0; i < arr.length; i++)
        if(cb(arr[i]))
            return true;
    return false;
}

function myEvery(arr, cb){
    const modArr = [];
    for(let i = 0; i < arr.length; i++)
        if(!cb(arr[i]))
            return false;
    return true;
}

function myReduce(arr, cb){
    let result = 0;
    for(let i = 0; i < arr.length; i++)
        result += cb(arr[i]);
    return result;
}

function myIncludes(arr, target){
    for(let i = 0; i < arr.length; i++)
        if(arr[i] === target)
            return true;
    return false;
}

function myIndexOf(arr, target){
    for(let i = 0; i < arr.length; i++)
        if(arr[i] === target)
            return i;
    return -1;
}

function myPush(arr, elem){
    arr[arr.length] = elem; 
    return arr.length;
}

function myLastIndexOf(arr, target){
    for(let i = arr.length; i > 0; i--)
        if(arr[i] === target)
            return i;
    return -1;
}

Object.prototype.grabKeys = function(){ 
    let properties = [];
    for(const prop in obj)
        properties.push(prop);
    return properties;
}

Object.prototype.grabValues = function(){
    let values = [];
    for(const prop in obj)
        values.push(obj[prop])
    return values;
}

// Callback functions
function increment(elem){ return elem+1; }

function even(elem) {return elem % 2 == 0;}

Array.prototype.sumOfRange = function(start, end){ // Misc problem 1
    let sum = 0;
    for(let i = start; i <= end; i++)
        sum += this[i];
    return sum;
}

Array.prototype.reverseArray = function(){ // Misc problem 2
    let temp = [];
    for(let i = this.length-1; i >= 0; i--)
        temp.push(this[i]);
    return temp;
}

Array.prototype.arrayToList = function(){ // Misc problem 3
    let list = {
        value: this[0],
        rest: {}
    }
    let ptr = list;

    for(let i = 1; i < this.length; i++){
        let next = {
            value: this[i],
            rest: {}
        }
        ptr.rest = next;
        ptr = next;
    }

    return list;
}

Object.prototype.deepCopy = function(obj){ // Misc problem 4
    if(typeof obj === "object" && obj != null){
        keys1 = this.grabKeys();
        keys2 = obj.grabKeys();

        if(keys1.length != keys2.length)
            return false;
        
        for(const prop in this){
            if(obj[prop] === undefined)
                return false;
            else if(this[prop] === obj[prop])
                continue
            else
                return false;
        }
    }
    return true;
}

function pushZeroesToBack(arr){ // Misc function 5.
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            for(let j = i; j < arr.length-1; j++){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }    
    return arr;
}

main()