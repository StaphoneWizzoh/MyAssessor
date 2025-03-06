# MyAssessor

A mobile assessment management application for educators to track and manage student assessments.

## Project Overview

MyAssessor is a comprehensive tool designed for educators to manage student assessments, track attendance, and monitor class performance. The application allows teachers to create assessments, view analytics, and organize their daily teaching activities.

## Tech Stack

-   **Frontend**: React Native with Expo
-   **Backend**: JSON Server (REST API)
-   **State Management**: Redux Toolkit
-   **Styling**: StyleSheet API and Expo Linear Gradient

## Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn
-   Expo CLI (`npm install -g expo-cli`)
-   Expo Go app (for mobile testing)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/MyAssessor.git
    cd MyAssessor
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    npm install -g json-server
    ```

3. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

## Running the Application

### Backend

1. Start the JSON Server:

    ```bash
    cd backend
    json-server --watch db.json --port 3000
    ```

    The API will be available at:

    - http://localhost:3000/assessments

### Frontend

#### For Web Development:

1. Start the Expo development server:

    ```bash
    cd frontend
    npm start
    ```

2. Press `w` to open in web browser.

#### For Mobile Development with Connection to Local Backend:

Since mobile devices cannot directly access your computer's localhost, you need to:

1. Find your computer's local IP address:

    - On Windows: Open Command Prompt and type `ipconfig`
    - On macOS/Linux: Open Terminal and type `ifconfig` or `ip addr`

2. Update the API base URL in `frontend/features/assessment/crud.ts`:

    ```typescript
    // Replace this:
    const BASE_URL = "http://localhost:3000/assessments";

    // With your computer's local IP:
    const BASE_URL = "http://YOUR_LOCAL_IP:3000/assessments";
    ```

3. Start the Expo development server:

    ```bash
    cd frontend
    npm start
    ```

4. Scan the QR code with Expo Go app on your mobile device (ensure your mobile device is on the same WiFi network as your computer).

#### Alternative Solution Using Expo Dev Client:

For a more robust development experience that better handles local APIs:

1. Install the Expo Dev Client:

    ```bash
    npx expo install expo-dev-client
    ```

2. Build a development build:
    ```bash
    npx expo prebuild
    npx expo run:android  # For Android
    npx expo run:ios      # For iOS
    ```

## Design Decisions

### Architecture

-   **Tab-based Navigation**: The app uses a tab-based navigation system for easy access to key features (Home, Students, Assessment, Class, Attendance).
-   **Redux Toolkit**: Used for state management with async thunks to handle API requests.
-   **Reusable Components**: Components like `AssessmentDetailCard` and `ScreenWithBackground` promote code reusability.

### UI/UX Design

-   **Dark Theme**: The app uses a dark blue theme (`#162947`) which is easier on the eyes for teachers who might use the app throughout the day.
-   **Linear Gradient Cards**: Used to create visually appealing cards that highlight important information.
-   **Haptic Feedback**: Added haptic feedback to tabs for better user experience on iOS.

### Data Structure

-   The app organizes assessments with fields for title, strand, subStrand, completion status, and dates.
-   Assessments can be marked as all-day events and can have alerts set.

## Testing

### Manual Testing

1. **Creating Assessments**:

    - Navigate to the Assessment tab
    - Tap the "+" button
    - Fill in the assessment details
    - Save and verify the assessment appears in the list

2. **Viewing Assessments**:

    - Check that all created assessments are visible in the Assessment tab
    - Verify the completion status and other details are displayed correctly

3. **Backend Integration**:
    - Check that API calls are working correctly
    - Verify data persistence by reloading the app

## Troubleshooting

### Mobile-Backend Connection Issues

If you're having trouble connecting to the backend from a mobile device:

1. **Network Configuration**:

    - Ensure your mobile device and computer are on the same network
    - Check if your computer firewall allows connections to port 3000

2. **Using Ngrok for External Access**:

    - Install ngrok: `npm install -g ngrok`
    - Expose your local server: `ngrok http 3000`
    - Use the ngrok URL in your app: `const BASE_URL = "https://your-ngrok-url.ngrok.io/assessments";`

3. **Expo Connection Settings**:
    - In the Expo developer menu, try switching the "Connection" from "LAN" to "Tunnel"

## Assumptions

1. **User Context**: The app assumes the user is a teacher managing multiple classes and students.
2. **Data Persistence**: The current implementation uses JSON Server for demonstration purposes. In a production environment, a more robust database solution would be needed.
3. **Single User**: The current version assumes a single user and doesn't include authentication.

## Future Enhancements

-   User authentication and authorization
-   Integration with school management systems
-   Offline support with data synchronization
-   Student progress tracking over time
-   Export of assessment data to various formats
