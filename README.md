# Text Stats App

Overview
The Text Stats App is a React-based web application that provides real-time text statistics and dynamic string replacement functionality. As users type into the textarea, they receive live feedback on:

The number of unique words in the text.
The character count, excluding spaces and punctuation.
The app also allows users to search for a specific string and replace it with another. The replaced text is highlighted with a dynamic color gradient effect to clearly indicate changes.


Features
Unique Word Count: Displays the number of unique words, case-insensitive.
Character Count: Excludes spaces and punctuation, counting only letters and numbers.
String Replacement: Search and replace specific words or phrases.
Dynamic Highlighting: Recently replaced strings are highlighted with an animated color gradient (green, blue, purple) that fades out over time.
Dark Mode Toggle: Switch between light and dark themes for better readability.
Technologies Used
React (Functional Components with Hooks)
CSS Animations for dynamic highlighting effects
Responsive Design: Works on different screen sizes

Getting Started
Installation
Clone this repository:


git clone https://github.com/quick-witted-ashok/Real-Time-Text-Analysis


Navigate to the project directory:



cd my-app

Install the required dependencies:



npm install

Running the App
Start the development server:


npm start

Open your browser and go to:


http://localhost:3000

Build for Production
To build the app for production, run:


npm run build

This will create an optimized production build in the /build folder.


Usage
Type any text in the large textarea. Real-time statistics will be shown below:

Unique Words: The number of unique words in the text (case-insensitive).
Character Count: The total number of characters, excluding spaces and punctuation.
To replace a string:

Enter the word or phrase you want to search for in the first input field.
Enter the word or phrase you want to replace it with in the second input field.
Click Replace All to apply the changes. The replaced string will be highlighted with a gradient color and will fade out over time.
Use the Dark Mode Toggle button to switch between light and dark themes.


Output demo:

https://github.com/user-attachments/assets/1e8403ee-9159-476a-adfc-e1abc370105d



