"use client";

import { View, Text, StyleSheet } from "react-native";

export default function NotFound() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>404</Text>
            <Text style={styles.subtitle}>Page Not Found</Text>
            <Text style={styles.description}>
                The page you are looking for does not exist or has been moved.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 72,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "600",
        color: "#666",
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: "#999",
        textAlign: "center",
    },
});
