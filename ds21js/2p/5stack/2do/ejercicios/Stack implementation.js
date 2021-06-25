//Cortes Medrano Carlos ALfonso
/*PROBLEMA 1
* Stack implementation
*/
function Stack() {
   this.dataStore = [];
       this.top = 0;
   this.push = push;
   this.pop = pop;
   this.peek = peek;
   this.clear = clear;
   this.length = length;
   }
function push(element) {
   this.dataStore[this.top++] = element;
   }
function peek() {
   return this.dataStore[this.top-1];
   }
function pop() {
   return this.dataStore[--this.top];
   }
function clear() {
   this.top = 0;
   }
function length() {
   return this.top;
   }
let s = new Stack();
    s.push("Juan");
    s.push("Paco");
    s.push("Pedro");
    console.log("length: " + s.length());
    console.log(s.peek());
    s.push("Raul");
    console.log(s.peek());
    console.log("length: " + s.length());
    console.log(s.peek());
    s.push("Ramiro");
    s.push("Aria");
    s.push("Angel");
    s.push("Sebastian"); 
    s.push("Raul");
    s.push("Gio");
    console.log("length: " + s.length());
    console.log(s.peek()); 
    s.push("Betp");
    console.log(s.peek());