# prep-javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

#### 1. What does strictly equal mean?
The strictly equal operator (`===`) checks whether two values are equal in both type and value. This means that the comparison does not perform type coercion. For example:

```javascript
5 === 5    // true
5 === '5'  // false
```

#### 2. What is the logical AND operator?
The logical AND operator (`&&`) returns `true` if both operands are truthy. If the first operand is falsy, it returns that operand; otherwise, it evaluates and returns the second operand. For example:

```javascript
true && true    // true
true && false   // false
false && true   // false
false && false  // false
```

#### 3. Can you name some comparison operators?
Here are some common comparison operators:

- `==` : Equal to (with type coercion)
- `===` : Strictly equal to (without type coercion)
- `!=` : Not equal to (with type coercion)
- `!==` : Strictly not equal to (without type coercion)
- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
