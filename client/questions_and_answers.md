<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<p>

#### Answer: B

##### Explanation:

<i>The variable `greeting` is declared here, but not assigned any value. Whereas, `greetign` is never defined since it is a typo, which occurred while trying to assign a value of empty string to the variable 'greeting'. So when we will try to access 'greetign' using console.log, there will be a ReferenceError. Because in JavaScript, ReferenceError represents an error which occurs when we try to access a variable that doesn't exist or is not defined.</i>

</p>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<p>

#### Answer: C

##### Explanation:

<i>The function above takes two arguments a and b and then returns their sum. When we pass 1 and "2" as the two parameters, JavaScript performs string concatenation, converting the parameter 1 to string and then adding it to "2". Hence, we see that the result is "12" which is a string that is the result of this string concatenation.</i>

</p>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<p>

#### Answer: A

##### Explanation:

<i>Here, when we initially assigned `const info = { favoriteFood: food[0] };` it makes a copy of the string value '🍕' from the food array to the info object as a property. There is no reference of the food array here after assigning since the string is a copy. Hence, when we later set `info.favoriteFood = '🍝';` it updates only the key-value of the info.favoriteFood and the food array remains unaffected. </i>

</p>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<p>

#### Answer: B

##### Explanation:

<i>The JS function `sayHi` takes name as a parameter and returns the string `Hi there, ${name}`. So, when we call the function like this `sayHi()` without passing it any parameter, the name argument defaults to `undefined` since it is not passed or defined. So we will get the return string `Hi there, undefined`</i>

</p>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<p>

#### Answer: C

##### Explanation:

<i>Here, the `forEach` method is checking each element of the `nums` array for truthy values, and then incrementing the `count` variable by 1 if the element is truthy. The nums array has 4 elements in total, but the first element (0) is falsy in JavaScript, so the count is not incremented for the first element. But for the other three elements (1,2,3) the count is incremented once for each element, which results in `count=3`.</i>

</p>
