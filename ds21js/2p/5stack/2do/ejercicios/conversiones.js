//Cortes Medrano Carlos Alfonso
/*PROBLEM]A 2
* Base Conversions
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
      
 function mulBase(numero, base) {
        let s = new Stack();
        do {
        s.push(numero % base);
        numero = Math.floor(numero /= base);
        } while (numero > 0);
        let converted = "";
         while (s.length() > 0) {
        converted += s.pop();
        }
        return converted;
    }
 
    let numero = 32,base=2, otroNum = mulBase(numero, base);
   
    console.log(numero + "se  convertio a base " + base + " es " + otroNum);
 