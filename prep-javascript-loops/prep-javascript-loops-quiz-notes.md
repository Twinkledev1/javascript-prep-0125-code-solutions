# prep-javascript-loops-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the condition expression in the `for` and `while` loops?

The condition expression determines whether the loop should continue executing. In a `while` loop, the condition must evaluate to `True` for the loop to execute. In a `for` loop, the condition is implicitly handled by the iteration process.

---

-When is the first expression in the parentheses for a `for` loop (known as the initialization) evaluated?

The initialization expression is evaluated once at the start of the `for` loop, before any iteration begins. It sets up the loop control variable or starting point.

---

-When is the second expression in the parentheses for a `for` loop (known as the condition) evaluated?

The condition expression is evaluated at the beginning of each iteration. If it evaluates to `False`, the loop terminates, and execution continues with the statements following the loop.

---

-When is the third expression in the parentheses for a `for` loop (known as the final expression) evaluated?

The final expression is evaluated at the end of each iteration, just before the condition is checked again. It typically updates the loop control variable.

---

- What is the purpose of the final expression in a `for` loop?

The final expression updates the loop control variable or prepares for the next iteration. For example, it may increment or modify the loop variable.

---

-What types of data should the `for...in` loop be used on?

The `for...in` loop is used on iterable data types such as:

- Lists (e.g., `[1, 2, 3]`)
- Strings (e.g., `'hello'`)
- Tuples (e.g., `(1, 2, 3)`)
- Dictionaries (e.g., `{key: value}` for keys or `.items()` for key-value pairs)
- Sets (e.g., `{1, 2, 3}`)
- Ranges (e.g., `range(5)`)
- Any object implementing the iterable protocol (e.g., with an `__iter__()` method).

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
