# Simple Counter with LocalStorage

A clean and persistent counter web app that remembers your count even after refreshing the page.

## Features

- Increment and Decrement buttons
- Prevents count from going below 0
- **Persistent storage** using LocalStorage (count is saved automatically)
- Reset button to clear the counter
- Simple and responsive design

## How It Works

- The counter value is automatically saved to your browser's local storage.
- Even if you close the browser or refresh the page, your last count will still be there.
- Clicking the **Restart** button resets the counter to 0 and clears the saved value.

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)
- LocalStorage API

## Project Structure
counter-app/
├── index.html
├── style.css
└── script.js
text## Setup & Usage

1. Clone or download the project
2. Open `index.html` in your browser
3. Start counting!

No installation or build tools required.

## Code Explanation

### LocalStorage Logic

```javascript
const STORAGE_KEY = "counterValue";

// Load saved value (or 0 if none exists)
let number = Number(localStorage.getItem(STORAGE_KEY)) || 0;

// Save value whenever it changes
localStorage.setItem(STORAGE_KEY, number);