# prep-html-skeleton-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- 1. What tags are necessary for a complete HTML Skeleton?

  The necessary tags for a complete HTML skeleton are:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

- 2. What type of content belongs within the `<head>` of an HTML document?

The `<head>` of an HTML document contains:

- Metadata (e.g., `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`)
- Document title (`<title>`)
- Links to external stylesheets and resources (`<link>`)
- Scripts that should load before page content (`<script>` with the `defer` attribute)

- 3. What type of content belongs within the `<body>` of an HTML document?

The `<body>` of an HTML document contains all the content visible to the user, including:

- Text content (e.g., paragraphs `<p>`, headings `<h1>` to `<h6>`)
- Images (`<img>`)
- Links (`<a>`)

- 4. Where must the `DOCTYPE` declaration appear in a valid HTML document?

The `DOCTYPE` declaration must appear as the very first line of a valid HTML document, before any other content, including whitespace or comments. For example:

````html
<!DOCTYPE html>

## Notes All student notes should be written here. How to write `Code Examples`
in markdown for JS: ```javascript const data = 'Howdy';
````

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
