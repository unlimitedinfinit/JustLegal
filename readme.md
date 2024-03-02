# Just Legal - A Just Liberty Initiative

## Overview

Just Legal is an open-source initiative under Just Liberty Incorporated founded in 10/2023, a non-profit organization dedicated to democratizing legal and political processes. This project aims to create a comprehensive digital solution that makes legal information and assistance accessible to all, especially underserved communities.

## Mission

Our mission is to empower individuals by providing intuitive and actionable legal resources. Through Just Legal, we aim to bridge the gap between legal complexities and the public's need for clear guidance, facilitating a better-informed and more equitable society.

## Why Open Source?

We believe in the collective power of community-driven development. Open-sourcing Just Legal aligns with our non-profit status and commitment to societal good, allowing us to tap into a global pool of expertise and collaboration. This transparency not only fosters innovation but also ensures that the platform remains a trusted and impartial resource for everyone.

## About the Founder

Joshua Abrams, the President/Founder/CTO of Just Liberty Incorporated, leads this project with a vision to harness technology for social change. With a rich background in full-stack development and a passion for civil rights, Joshua guides Just Liberty towards impactful and lasting contributions to the world.

## Get Involved

We welcome contributions, feedback, and inquiries:

- Feedback: Your feedback is invaluable. Please feel free to send us your thoughts or suggestions. We do not volunteers and any help we get.
- Contact: For more detailed information about Just Liberty, reach out via :
    - abramslive@gmail.com
    - josh@truejust.org

For more information about Just Liberty Incorporated and our broader mission, visit our website at https://truejust.org

## Software Used

This project utilizes a stack that includes:

- React Native: For cross-platform mobile app development.
- Expo: To streamline the React Native development process.
- Node.js and Express.js: For building the backend API.
- PostgreSQL: As the primary database solution.
- Firebase: For authentication, hosting, and real-time database features.

## Local Development Setup

To get started with local development, follow these steps:

### Prerequisites

- Make sure you have Node.js installed on your system.
- Install Expo CLI globally using `npm install -g expo-cli`.
- You'll need Git for version control.

Please Stay Tuned for Future Updates and Instructions hopefully going to the Docs page / 02/25/2024

After editing code, to test emulator go to PowerShell and run `npm start`. If loaded, it will prompt you to emulate. Select 'a' to launch Android. If the device is on, it should load into the emulated phone.

## Installation

Run the following commands to install necessary packages:

```bash
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install axios
npm install redux react-redux
npm install react-native-elements

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
expo install @react-navigation/native
expo install @react-navigation/stack
expo install @react-navigation/bottom-tabs
npm install axios
npm install redux react-redux
expo install react-native-elements

Screens
about-us.js: Provides information about Just Liberty Inc., its mission, and the team behind it.
casetracker.js: Displays a flowchart or timeline of the user's case.
chat.js: Hosts the AI chatbot.
dashboard.js: Provides an overview of the app's features after logging in.
home.js: The first screen users see when they open the app.
info.js: Provides educational content about legal rights.
legal-resources.js: Provides a categorized list or a searchable database of legal resources.
sign-in.js: Handles user login.