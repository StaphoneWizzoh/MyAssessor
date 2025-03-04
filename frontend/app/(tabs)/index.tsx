import { Text, View } from "react-native";
import { ScreenWithBackground } from "./_layout";

export default function Index() {
    return (
        <ScreenWithBackground>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "white" }}>
                    Edit app/index.tsx to edit this screen.
                </Text>
            </View>
        </ScreenWithBackground>
    );
}
