# SafeHands Quote Form

Task 3 of the SafeHands Insurance Quote SPA: an accessible quote request form with live validation , built with React and Vite.

## Features

- Fields: full name, email, phone and insurance type (Health, Auto, Home, Life)
- HTML5 input types (`text`, `email`, `tel`) with `required` attributes
- Live validation: errors update while typing and when a field loses focus
- On submit, the first invalid field receives focus
- Valid data is stored in components state and success message is shown
- Responsive layout, checked on a mobile viewport (iPhone SE)

## Accessibility

- Every input has a `<label>` linked with `htmlfor`
- Invalid fields use `aria-invalid` and `aria-describedby` pointing to their error message
- Error messages use `role="alert"` so screen readers announce them
- The success message uses `role="status"`
- The whole form can be used with the key board only (Tab, Shift+Tab, Enter), with a clear focus outline

## Tech

React, Vite, React Router, validator.js (email check), CSS Modules

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173/quote

## What was done and why

I used controlled inputs so the form stae is always in React. Each field has its own validation function, so error messages stay specific and easy to change. ARIA attributes and focus management make the form useable for keyboard and screen reader users. 