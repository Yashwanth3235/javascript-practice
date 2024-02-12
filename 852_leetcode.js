
function arr(arr)
{
    array = arr.indexOf(Math.max(...arr));
    return array;
}

arr1 = [0, 1, 0];
console.log(arr(arr1));

arr2 = [0, 2, 1, 0];
console.log(arr(arr2));

arr3 = [0, 10, 5, 2];
console.log(arr(arr3));

arr3 = [0, 11, 7, 8];
console.log(arr(arr3));