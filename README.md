
---
#### Create a README file to answer the following question-

#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()? 

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

### Answer the quetion no-1
### Var
Function scope (global scope variable).
Redeclare kora jay .
Update kora jay .
Hoisted hoy (initial value: undefined).
Old way - bugs er chance beshi.

### let
Block scope { }.
Redeclare kora jay na .
Update kora jay.
Hoisted but use korle error dei.

### const 
Block scope { }.
Redeclare kora jaina.
Update kora jaina.
Must be initialized immediately.
But array/object value change kora jay (reference same thaka lagbe)


### Answer the question no-2
### forEach()
 A normal loop.
Only executes a function for each element.
Does not return a new array (Undefined dibe).

### map()
Loops through array.
Returns a new array.
Each element can be transformed/modified.

### filter()
Loops through array.
Returns a new array based on condition.
Only elements that pass the test will be included.

### Answer the question no-3
### Arrow Function.
Function likhar shortcut syntax eta.
this keyword lexically bind kore (mane kaj korar style different hoi).
Cleaner and easy lage likhte.

### Answer the question no-4
### Before (Old way)
const arr = [10, 20, 30];
const a = arr[0];
const b = arr[1];
const c = arr[2];
### ES6 Destructuring (Shortcurt way)
const [a, b, c] = [10, 20, 30];
console.log(a, b, c);

### Answer the question no-5
### ES6 Template Literal
const name = "Sabbir";
const age = 20;
const info = `Name: ${name}, Age: ${age}` & backtik cara name & age count hbeNa..output error asbe;
console.log(info);