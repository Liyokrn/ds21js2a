//Cortes Medrano Carlos alfonso
/* PROBLEM 3
* insertFirst(v)
*
* inserts value v at first position
* @arg {number} v - value
*
* @example
* insertFirst(4)
* may wrap method unshift
* Verify operation result by outputing the array before and after
*/

    let numeros = [2,3,4,5] , primero = 9 , N = numeros.length;
    
        for (let i = N; i >= 0; --i) {
        numeros[i] = numeros[i-1];
   }
    numeros[0] =primero;
    console.log(numeros); 

// Ejemplo 2
   let nums = [1,2,3,4,5,9,7], firts = nums.unshift(8);
   console.log(nums); 