# Event Registration Form

This project is a simple event registration form built with React. The form includes dynamic fields, conditional logic, and basic validation.

## Features

- **Form Fields**:
  - Name (Text)
  - Email (Email)
  - Age (Number)
  - Are you attending with a guest? (Yes/No)
  - Guest Name (Text, visible only if attending with a guest)
  
- **Conditional Logic**:
  - The "Guest Name" field is shown only if the "Are you attending with a guest?" field is answered with "Yes".
  
- **Validation**:
  - Name: Required
  - Email: Required and must be a valid email format
  - Age: Required and must be a number greater than 0
  - Guest Name: Required if attending with a guest

- **Submission**:
  - On form submission, a summary of the entered data is displayed in an alert box.

## Technologies Used

- React (Functional Components and Hooks)
- CSS (Tailwind CSS for styling)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/event-registration-form.git
    cd event-registration-form
    ```

2. **Install the dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

4. **Open the application**:
    Open your browser and navigate to `http://localhost:3000`.

## Usage

Fill out the form fields, ensuring all required fields are completed. If you indicate that you are attending with a guest, an additional field for the guest's name will appear. On submission, a summary of your data will be displayed in an alert box.

## Project Structure

```plaintext
event-registration-form/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── EventRegistrationForm.js
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
└── README.md
