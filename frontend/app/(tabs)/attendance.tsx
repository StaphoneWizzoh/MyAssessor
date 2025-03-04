import { Text, View } from "react-native";
import { ScreenWithBackground } from "./_layout";

export default function Attendance() {
    return (
        <ScreenWithBackground>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>Edit app/attendance.tsx to edit this screen.</Text>
            </View>
        </ScreenWithBackground>
    );
}
