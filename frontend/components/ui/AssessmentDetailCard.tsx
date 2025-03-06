import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AssessmentDetailCard({ assessment }) {
    return (
        <View>
            {/* Main gradient container */}
            <LinearGradient
                colors={["#27487F", "#52B6DF"]}
                style={styles.container}
            >
                {/* Semi-transparent ellipses for background styling */}
                <View style={styles.ellipseRightLarge} />
                <View style={styles.ellipseRightMedium} />
                <View style={styles.ellipseRightSmall} />
                <View style={styles.ellipseLeftLarge} />
                <View style={styles.ellipseLeftMedium} />
                <View style={styles.ellipseLeftSmall} />

                {/* Text info block */}
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                        Name: {assessment.title}
                        {"\n"}
                        Strand: {assessment.strand}
                        {"\n"}
                        Sub Strand: {assessment.subStrand}
                        {"\n"}
                        Completion:
                    </Text>

                    {/* Completion pill */}
                    <View style={styles.completionPill}>
                        <Text style={styles.completionPillText}>
                            {assessment.completion}%
                        </Text>
                    </View>

                    <Text style={styles.infoText}>Date: {assessment.date}</Text>
                </View>

                {/* Performance levels */}
                <View style={styles.performanceContainer}>
                    <View style={styles.performanceBox}>
                        <Text style={styles.performanceNumber}>
                            {assessment.belowExpectations}
                        </Text>
                        <Text style={styles.performanceLabel}>
                            Below{"\n"}Expectations
                        </Text>
                    </View>

                    <View
                        style={[
                            styles.performanceBox,
                            { backgroundColor: "#FBBC05" },
                        ]}
                    >
                        <Text style={styles.performanceNumber}>
                            {assessment.approaching}
                        </Text>
                        <Text style={styles.performanceLabel}>
                            Approaching{"\n"}Expectations
                        </Text>
                    </View>

                    <View
                        style={[
                            styles.performanceBox,
                            { backgroundColor: "#71BD4E" },
                        ]}
                    >
                        <Text style={styles.performanceNumber}>
                            {assessment.meeting}
                        </Text>
                        <Text style={styles.performanceLabel}>
                            Meeting{"\n"}Expectations
                        </Text>
                    </View>

                    <View
                        style={[
                            styles.performanceBox,
                            { backgroundColor: "#0056D2" },
                        ]}
                    >
                        <Text style={styles.performanceNumber}>
                            {assessment.exceeding}
                        </Text>
                        <Text style={styles.performanceLabel}>
                            Exceeding{"\n"}Expectations
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    // Card container with gradient
    container: {
        width: 365,
        height: 282,
        borderRadius: 20,
        overflow: "hidden",
        padding: 20,
        position: "relative",
    },
    // Semi-transparent ellipses (right side)
    ellipseRightLarge: {
        position: "absolute",
        width: 217.66,
        height: 295.1,
        left: 251.94,
        top: 104.47,
        backgroundColor: "#FFFFFF",
        opacity: 0.1,
        borderRadius: 295.1 / 2,
    },
    ellipseRightMedium: {
        position: "absolute",
        width: 135.06,
        height: 183.11,
        left: 293.24,
        top: 160.46,
        backgroundColor: "#FFFFFF",
        opacity: 0.1,
        borderRadius: 183.11 / 2,
    },
    ellipseRightSmall: {
        position: "absolute",
        width: 70.32,
        height: 95.34,
        left: 325.61,
        top: 204.35,
        backgroundColor: "#FFFFFF",
        opacity: 0.1,
        borderRadius: 95.34 / 2,
    },
    // Semi-transparent ellipses (left side)
    ellipseLeftLarge: {
        position: "absolute",
        width: 111.62,
        height: 151.33,
        left: -21.53,
        top: 104.47,
        backgroundColor: "#FFFFFF",
        opacity: 0.1,
        borderRadius: 151.33 / 2,
    },
    ellipseLeftMedium: {
        position: "absolute",
        width: 69.26,
        height: 93.9,
        left: -0.35,
        top: 133.18,
        backgroundColor: "#FFFFFF",
        opacity: 0.1,
        borderRadius: 93.9 / 2,
    },
    ellipseLeftSmall: {
        position: "absolute",
        width: 36.06,
        height: 48.89,
        left: 16.25,
        top: 155.69,
        backgroundColor: "#FFFFFF",
        opacity: 0.1,
        borderRadius: 48.89 / 2,
    },
    // Container for text info
    infoContainer: {
        marginTop: 24,
    },
    infoText: {
        fontFamily: "Poppins",
        fontSize: 13,
        lineHeight: 22,
        letterSpacing: 0.2,
        color: "#FFFFFF",
        fontWeight: "500",
        marginBottom: 2,
    },
    // Completion pill
    completionPill: {
        alignSelf: "flex-start",
        backgroundColor: "#46BD84",
        borderRadius: 30,
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginVertical: 4,
    },
    completionPillText: {
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: 13,
        fontWeight: "500",
    },
    // Performance boxes row
    performanceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 35,
        paddingHorizontal: 4,
    },
    performanceBox: {
        width: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: "#C43D28", // default to red
        justifyContent: "center",
        alignItems: "center",
    },
    performanceNumber: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 2,
    },
    performanceLabel: {
        color: "#FFFFFF",
        fontSize: 10,
        textAlign: "center",
        lineHeight: 14,
    },
});
