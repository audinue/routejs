# routejs
Static HTML routing intended for prototyping pages in single file. Works with `file://` protocol.

## Setup
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/audinue/routejs@1.0/route.css">
<script src="https://cdn.jsdelivr.net/gh/audinue/routejs@1.0/route.js"></script>
```

## Usage
```html
<div route="/">
    <h1>Home</h1>
    <p>Home page content here</p>
    <p>Go to <a href="/about">about</a></p>
</div>
<div route="/about">
    <h1>About</h1>
    <p>About page content here</p>
    <p>Go to <a href="/">home</a></p>
</div>
```
