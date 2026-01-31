# IT23195202_ITPM_Assignment_1

 # ITPM Assignment 1 – End-to-End Testing using Playwright

## Module
IT3040 – Information Technology Project Management (ITPM)

## Assignment Overview
This project contains automated end-to-end test cases for evaluating a real-world
Singlish to Sinhala transliteration system available at:
https://www.swifttranslator.com/

The main objective of this assignment is to validate:
- Accuracy of Singlish to Sinhala conversion
- Robustness under different input conditions
- User Interface (UI) behavior such as real-time output updating

Backend APIs, performance, and security testing are intentionally excluded as per the assignment scope.

---

## Testing Approach
All test cases are implemented as **end-to-end (E2E) tests** using Playwright.

The tests simulate real user behavior by:
- Entering Singlish text into the input field
- Observing automatic real-time Sinhala output
- Validating correct or expected behavior for both valid and invalid inputs

---

## Project Structure
itpm-assignment-1/
│
├── tests/
│ ├── ui.spec.js # UI-related end-to-end tests
│ ├── positive-functional.spec.js # Positive functional test cases
│ └── negative-functional.spec.js # Negative functional test cases
│
├── playwright.config.js
├── package.json
└── README.md

---

## Technologies Used
- Node.js
- Playwright
- JavaScript
- Chromium Browser

---

## Prerequisites
- Node.js (version v22.14.0 or above)
- npm (comes with Node.js)

---

## Installation Steps
1. Clone the GitHub repository
2. Navigate to the project folder
3. Install dependencies using:

```bash
npm install

## Running the Tests

npm init playwright@latest

->typescript
->...


npx playwright test

npx playwright test --headed 

npx playwright test --project=chromium

npx playwright show-report

npx playwright test --ui

#



