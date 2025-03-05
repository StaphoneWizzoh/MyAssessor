import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AssessmentDetailCard({ assessment }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Name: {assessment.title}</Text>
                <Text style={styles.subHeaderText}>
                    Strand: {assessment.strand}
                </Text>
                <Text style={styles.subHeaderText}>
                    Sub Strand: {assessment.subStrand}
                </Text>
                <View style={styles.completionContainer}>
                    <Text style={styles.completionText}>
                        Completion: {assessment.completion}
                    </Text>
                </View>
                <Text style={styles.dateText}>Date: {assessment.date}</Text>
            </View>

            <View style={styles.performanceLevelsContainer}>
                <Text style={styles.performanceLevelsTitle}>
                    Performance Levels
                </Text>

                <View style={styles.levelRowContainer}>
                    <View
                        style={[
                            styles.levelBox,
                            { backgroundColor: "#FF4136" },
                        ]}
                    >
                        <Text style={styles.levelBoxNumber}>5</Text>
                        <Text style={styles.levelBoxText}>
                            Below Expectations
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.levelBox,
                            { backgroundColor: "#FF851B" },
                        ]}
                    >
                        <Text style={styles.levelBoxNumber}>25</Text>
                        <Text style={styles.levelBoxText}>
                            Approaching Expectations
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.levelBox,
                            { backgroundColor: "#2ECC40" },
                        ]}
                    >
                        <Text style={styles.levelBoxNumber}>20</Text>
                        <Text style={styles.levelBoxText}>
                            Meeting Expectations
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.levelBox,
                            { backgroundColor: "#0074D9" },
                        ]}
                    >
                        <Text style={styles.levelBoxNumber}>50</Text>
                        <Text style={styles.levelBoxText}>
                            Exceeding Expectations
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A2B3C", // Dark background similar to the image
        padding: 20,
    },
    headerContainer: {
        backgroundColor: "rgba(255,255,255,0.1)", // Subtle background for header
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    headerText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    subHeaderText: {
        color: "white",
        fontSize: 16,
        marginBottom: 5,
    },
    completionContainer: {
        backgroundColor: "#2ECC40", // Green color for completion
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginVertical: 10,
    },
    completionText: {
        color: "white",
        fontWeight: "bold",
    },
    dateText: {
        color: "white",
        fontSize: 14,
    },
    performanceLevelsContainer: {
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 10,
        padding: 15,
    },
    performanceLevelsTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    levelRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    levelBox: {
        width: "22%",
        aspectRatio: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    levelBoxNumber: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    levelBoxText: {
        color: "white",
        fontSize: 10,
        textAlign: "center",
    },
});
