## E-commerce Website End-to-End Testing with Playwright

This GitHub project is an end-to-end testing framework built with [Playwright](https://playwright.dev/) for automating a complete user journey on an e-commerce website. The framework tests the workflow of browsing, filtering, and purchasing a product (a sofa) while validating key steps along the way.

## Features
1. End-to-end automation of the user journey:
    * Navigate to the website.
    * Browse to the "Sofas" section.
    * Apply filters.
    * Select the first product from the filtered results.
    * Add the product to the cart.
    * Proceed to the basket and select assembly service.
    * Safely checkout.
    * Place a guest order and fill in the required details.
    * Validate the address, payment, and confirmation pages.
    * Finalize the purchase and validate the "Thank You" page.
2. Comprehensive validation and assertion coverage.
3. Advanced payment selection and validation.
4. Modular, scalable, and easy-to-maintain test structure.
5. Playwright’s built-in tracing and debugging tools.


## Technologies Used
- Framework: Playwright
- Language: JavaScript/TypeScript
- Test Runner: Playwright Test
- Reporting: Playwright's HTML Report

## Getting Started

### Prerequisites

1. **Install [Node.js](https://nodejs.org/) (16.x or higher recommended).**

2. **Clone this repository:**

   ```bash
   git clone https://github.com/your-username/playwright-web-API-example-project.git
   cd playwright-web-API-example-project

3. **Install dependencies:**

   ```bash
   npm install
4. **Install Playwright browsers:**

   ```bash
   npx playwright install

## Running the Tests

1. **Run all tests:**

   ```bash
   npx playwright test

2. **Run tests with the UI mode:**

   ```bash
   npx playwright test --ui
   
3. **Debug a specific test:**

   ```bash
   npx playwright test tests/guestUserFullJourney.spec.js --debug

4. **Generate and view the HTML report:**

   ```bash
   npx playwright show-report

## Test Workflow

The test script covers the following steps:

1. **Navigation**:
   - Open the e-commerce website.
   - Navigate to the "Sofas" section.

2. **Filtering**:
   - Apply filters to narrow down the selection.

3. **Product Selection**:
   - Choose the first product that matches the filter criteria.

4. **Cart Management**:
   - Add the selected product to the cart.
   - Proceed to the basket.
   - Select assembly service if applicable.

5. **Checkout Process**:
   - Begin checkout as a guest user.
   - Fill in personal details (name, email, address, etc.).
   - Validate address entry.

6. **Payment**:
   - Verify the payment page.
   - Select advanced payment options.
   - Confirm the payment.

7. **Purchase Finalization**:
   - Complete the purchase.
   - Validate the "Thank You" page.

---

### Note
This project uses the Playwright framework to automate end-to-end testing for an e-commerce application. It follows the **Page Object Model (POM)** for maintainable and scalable test automation. Here, you can find the folder and directory based description. 

---

## Folder Descriptions

- **`.github/`**: Contains GitHub-specific files, such as workflows for CI/CD pipelines.

- **`page_objects/`**: Implements the **Page Object Model (POM)** design pattern. Each file corresponds to a page of the application and encapsulates the actions and locators for that page:

- **`tests/`**: Custom-written test cases for this project.
  - **`guestUserFullJourney.spec.js`**: The primary test covering a guest user's full journey from browsing to checkout.

- **`utils/`**: Utility functions for tasks like data generation, API requests, or reusable methods.

- **`package.json`**: Defines the project’s dependencies and npm scripts.

- **`playwright.config.js`**: Configuration file for Playwright, including global settings for browser types, base URL, and test timeout.

## Directory Structure

```plaintext
.
├── .github/                        # GitHub configuration and workflows (e.g., CI/CD)
├── page_objects/                   # Page Object Model (POM) files for different pages
│   ├── AddressConfirmationPage.js  # Actions and locators for the address confirmation page
│   ├── BillingAddressPage.js       # Actions and locators for the billing address page
│   ├── CartPage.js                 # Actions and locators for the cart page
│   ├── HomePage.js                 # Actions and locators for the home page
│   ├── OrderPage.js                # Actions and locators for the order page
│   ├── POManager.js                # Page Object Manager to manage page object instances
│   ├── PaymentPage.js              # Actions and locators for the payment page
│   ├── ProductDetailsPage.js       # Actions and locators for the product details page
│   ├── SofasCouchesPage.js         # Actions and locators for the sofas/couches section
│   ├── SuccessOrderPage.js         # Actions and locators for the order success page
│   └── UserOptionPage.js           # Actions and locators for user options and settings
├── tests-examples/                 # Example test scripts provided by Playwright
│   └── demo-todo-app.spec.js       # Sample test for Playwright demo (optional, for reference)
├── tests/                          # Custom test scripts for the project
│   ├── example.spec.js             # Example test file
│   └── guestUserFullJourney.spec.js # Complete end-to-end test for a guest user journey
├── utils/                          # Utility functions and helpers for the tests
├── .gitignore                      # List of files and folders to ignore in Git
├── package-lock.json               # Auto-generated file for locking dependencies
├── package.json                    # Dependencies and project metadata
└── playwright.config.js            # Playwright configuration file

```

## Contributing

We welcome contributions! Follow these steps:

1. **Fork the repository**.

2. **Create a new branch for your changes**:

   ```bash
   git checkout -b feature/your-feature-name
3. **Commit your changes**:

   ```bash
   git commit -m "Add your commit message"
4. **Push your branch**:

   ```bash
   git push origin feature/your-feature-name
5. **Open a pull request.**