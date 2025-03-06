# MyAssessor - Project README

## Project Overview

MyAssessor is a mobile application for educators to manage student assessments, track attendance, and monitor class performance. Built with React Native and Expo, it uses JSON Server as a lightweight backend.

## GitHub Repository

```
https://github.com/yourusername/MyAssessor
```

## Setup & Running the Application

### Prerequisites

-   Node.js (v16+)
-   npm or yarn
-   Android Studio with emulator configured
-   Android SDK installed

### Backend Setup

1. Install JSON Server:

    ```bash
    npm install -g json-server
    ```

2. Start the backend:
    ```bash
    cd backend
    json-server --watch db.json --port 3000
    ```

### Frontend Setup

1. Install dependencies:

    ```bash
    cd frontend
    npm install
    ```

2. Install Expo Dev Client (required for local API access):
    ```bash
    npx expo install expo-dev-client
    ```

### Android SDK Configuration

If you encounter the error about Android SDK path:

1. Install Android Studio from [developer.android.com](https://developer.android.com/studio)
2. During installation, ensure "Android SDK" is selected
3. Set the `ANDROID_HOME` environment variable:

    **Windows:**

    ```
    setx ANDROID_HOME "C:\Users\YourUsername\AppData\Local\Android\Sdk"
    ```

    **macOS/Linux:**

    ```
    export ANDROID_HOME=~/Library/Android/sdk
    ```

4. Add platform-tools to your PATH:

    **Windows:**

    ```
    setx PATH "%PATH%;%ANDROID_HOME%\platform-tools"
    ```

    **macOS/Linux:**

    ```
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```

5. Create an Android emulator:
    - Open Android Studio
    - Click "More Actions" > "Virtual Device Manager"
    - Click "Create Device"
    - Select a phone (e.g., Pixel 6) and click "Next"
    - Download a system image (e.g., API 33) and click "Next"
    - Name your emulator and click "Finish"

### Running the Application

1. Start your Android emulator through Android Studio

2. Build and run on the emulator:

    ```bash
    cd frontend
    npx expo prebuild
    npx expo run:android
    ```

3. The app will launch automatically in your emulator with proper connectivity to your local backend

## Troubleshooting

### Android SDK Not Found

If you continue having issues with Android SDK detection:

1. Create a `local.properties` file in the `android` folder:

    ```
    sdk.dir=C:\\Users\\YourUsername\\AppData\\Local\\Android\\Sdk
    ```

    (Use correct path format for your OS)

2. For Genymotion users:
    - Go to Settings → ADB
    - Select "Use custom Android SDK tools"
    - Point to your Android SDK directory

### Axios Connection Issues

If the app can't connect to the backend:

1. Ensure your emulator is running
2. Update the API URL in crud.ts:
    ```typescript
    const BASE_URL = "http://10.0.2.2:3000/assessments"; // Special IP for Android emulator
    ```

## Design Decisions

### Architecture

-   **Tab Navigation**: Provides easy access to main features
-   **Redux Toolkit**: Manages application state and API calls
-   **Reusable Components**: Maximizes code reuse and maintainability

### UI/UX Design

-   **Dark Theme**: Easier on users' eyes for extended use
-   **Linear Gradient Cards**: Visual hierarchy for important information
-   **Haptic Feedback**: Enhanced physical interaction on iOS

### Data Structure

-   Assessment data model includes title, strand, subStrand, completion status
-   JSON Server provides simple REST API for CRUD operations

## Assumptions

1. Single user (teacher) managing multiple classes
2. Simple data model sufficient for demonstration purposes
3. Internet connectivity available for API calls
