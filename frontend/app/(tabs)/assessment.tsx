import { Text, View } from "react-native";
import { ScreenWithBackground } from "./_layout";

export default function Assessment() {
    return (
        <ScreenWithBackground>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>Edit app/assessment.tsx to edit this screen.</Text>
            </View>
        </ScreenWithBackground>
    );
}
