import { useState } from "react";

import { Text, TextInput, View } from "react-native";
import { ScreenWithBackground } from "./_layout";

export default function Assessment() {
    const [title, setTitle] = useState("");
    const [strand, setStrand] = useState("");

    return (
        <ScreenWithBackground>
            <View
                style={{
                    flex: 1,
                    marginLeft: 16,
                    marginRight: 16,
                }}
            >
                <View>
                    <Text
                        style={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: 20,
                        }}
                    >
                        New Assessment
                    </Text>

                    <View>
                        <Text style={{ color: "white" }}>Title</Text>
                        <TextInput
                            style={{ height: 40, padding: 5, color: "white" }}
                            placeholder="Type here to translate!"
                            onChangeText={(newText) => setTitle(newText)}
                            defaultValue={title}
                        />
                    </View>

                    <View>
                        <Text style={{ color: "white" }}>Strand</Text>
                        <TextInput
                            style={{ height: 40, padding: 5, color: "white" }}
                            placeholder="Type here to translate!"
                            onChangeText={(newText) => setStrand(newText)}
                            defaultValue={strand}
                        />
                    </View>

                    <View>
                        <Text style={{ color: "white" }}>Sub strand</Text>
                        <TextInput
                            style={{ height: 40, padding: 5, color: "white" }}
                            placeholder="Type here to translate!"
                            onChangeText={(newText) => setStrand(newText)}
                            defaultValue={strand}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ color: "white" }}>New Assessment</Text>
                </View>
            </View>
        </ScreenWithBackground>
    );
}
