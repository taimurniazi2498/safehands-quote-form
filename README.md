# SafeHands Quote Form

Tasks 3 and 4 of the SafeHands Insurance Quote SPA: an accessible quote request form with live validation, connected to a mock quotes API with loading and error states. Built with React and Vite.

## Features

- Fields: full name, email, phone and insurance type (Health, Auto, Home, Life)
- HTML5 input types (`text`, `email`, `tel`) with `required` attributes
- Live validation: errors update while typing and when a field loses focus
- On submit, the first invalid field receives focus
- Valid data is sent to a mock endpoint (jsonplaceholder) with `fetch`
- A spinner is shown while the request is pending, and the submit button is disabled
- On failure, a friendly error message appears with a "Try again" button
- On success, a quote card shows the estimated premium, coverage amount, deductible and quote ID
- Responsive layout, checked on a mobile viewport (iPhone SE)

## Accessibility

- Every input has a `<label>` linked with `htmlFor`
- Invalid fields use `aria-invalid` and `aria-describedby` pointing to their error message
- Error messages use `role="alert"` so screen readers announce them
- The quote result area uses `aria-live="polite"` so loading, error and success updates are announced
- The whole form can be used with the keyboard only (Tab, Shift+Tab, Enter), with a clear focus outline

## Tech

React, Vite, React Router, validator.js (email check), CSS Modules

## Project structure

- `src/components/QuoteForm.jsx`: the form, validation and submit handling
- `src/components/QuoteResult.jsx`: shows the spinner, error message or quote card
- `src/hooks/useQuoteRequest.js`: request state (idle, pending, success, error), retry and cancel
- `src/api/quotesApi.js`: the `fetch` call to the mock endpoint

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173/quote

## How to test loading and error states

1. Fill in the form and submit. A spinner appears, then the quote card.
2. Open Chrome DevTools, go to the Network tab and set throttling to Offline.
3. Submit again. A friendly error message appears with a "Try again" button.
4. Set throttling back to No throttling and click "Try again". The quote card appears without refilling the form.

## What was done and why

Task 3: I used controlled inputs so the form state is always in React. Each field has its own validation function, so error messages stay specific and easy to change. ARIA attributes and focus management make the form usable for keyboard and screen reader users.

Task 4: The request state lives in a reducer inside the `useQuoteRequest` hook, with four states (idle, pending, success, error). A reducer keeps the UI state in React state, makes every change explicit, and stops impossible combinations such as a spinner and an error at the same time. The hook remembers the last submitted values so retry does not need the form to be filled again, and it cancels an older request when a new one starts.