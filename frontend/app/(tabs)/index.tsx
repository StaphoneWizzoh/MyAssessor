import React from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { ScreenWithBackground } from "./_layout";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

export default function Index() {
    return (
        <ScreenWithBackground>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Hello, Teacher</Text>
                        <Text style={styles.date}>March 6, 2025</Text>
                    </View>
                    <TouchableOpacity style={styles.profileButton}>
                        <Text style={styles.profileInitials}>TR</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.content}>
                    {/* Dashboard Summary */}
                    <View style={styles.summaryContainer}>
                        <View style={styles.summaryCard}>
                            <View
                                style={[
                                    styles.iconContainer,
                                    {
                                        backgroundColor:
                                            "rgba(251, 188, 5, 0.2)",
                                    },
                                ]}
                            >
                                <Ionicons
                                    name="people"
                                    size={22}
                                    color="#FBBC05"
                                />
                            </View>
                            <Text style={styles.summaryNumber}>24</Text>
                            <Text style={styles.summaryLabel}>Students</Text>
                        </View>

                        <View style={styles.summaryCard}>
                            <View
                                style={[
                                    styles.iconContainer,
                                    {
                                        backgroundColor:
                                            "rgba(74, 210, 201, 0.2)",
                                    },
                                ]}
                            >
                                <Entypo
                                    name="graduation-cap"
                                    size={22}
                                    color="#4AD2C9"
                                />
                            </View>
                            <Text style={styles.summaryNumber}>12</Text>
                            <Text style={styles.summaryLabel}>Assessments</Text>
                        </View>

                        <View style={styles.summaryCard}>
                            <View
                                style={[
                                    styles.iconContainer,
                                    {
                                        backgroundColor:
                                            "rgba(113, 189, 78, 0.2)",
                                    },
                                ]}
                            >
                                <MaterialIcons
                                    name="book"
                                    size={22}
                                    color="#71BD4E"
                                />
                            </View>
                            <Text style={styles.summaryNumber}>3</Text>
                            <Text style={styles.summaryLabel}>Classes</Text>
                        </View>
                    </View>

                    {/* Today's Schedule */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>
                                Today's Schedule
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllText}>See All</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.scheduleCard}>
                            <View style={styles.timeContainer}>
                                <Text style={styles.timeText}>9:00 AM</Text>
                            </View>
                            <View style={styles.eventContainer}>
                                <Text style={styles.eventTitle}>
                                    Letter Naming Assessment
                                </Text>
                                <Text style={styles.eventDetails}>
                                    Grade 1 • 24 students
                                </Text>
                            </View>
                        </View>

                        <View style={styles.scheduleCard}>
                            <View style={styles.timeContainer}>
                                <Text style={styles.timeText}>11:30 AM</Text>
                            </View>
                            <View style={styles.eventContainer}>
                                <Text style={styles.eventTitle}>
                                    Phonemic Awareness
                                </Text>
                                <Text style={styles.eventDetails}>
                                    Grade 1 • 24 students
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Recent Assessments */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>
                                Recent Assessments
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllText}>See All</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.assessmentCard}>
                            <View style={styles.assessmentHeader}>
                                <Text style={styles.assessmentTitle}>
                                    Letter Naming Uppercase
                                </Text>
                                <View style={styles.completionPill}>
                                    <Text style={styles.completionText}>
                                        85%
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.assessmentSubtitle}>
                                A, B, C, D, E
                            </Text>
                            <View style={styles.progressContainer}>
                                <View style={styles.progressBar}>
                                    <View
                                        style={[
                                            styles.progress,
                                            { width: "85%" },
                                        ]}
                                    />
                                </View>
                                <Text style={styles.progressText}>
                                    21/24 students
                                </Text>
                            </View>
                        </View>

                        <View style={styles.assessmentCard}>
                            <View style={styles.assessmentHeader}>
                                <Text style={styles.assessmentTitle}>
                                    Letter Naming Lowercase
                                </Text>
                                <View
                                    style={[
                                        styles.completionPill,
                                        { backgroundColor: "#FBBC05" },
                                    ]}
                                >
                                    <Text style={styles.completionText}>
                                        50%
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.assessmentSubtitle}>
                                f, g, h, i, j
                            </Text>
                            <View style={styles.progressContainer}>
                                <View style={styles.progressBar}>
                                    <View
                                        style={[
                                            styles.progress,
                                            {
                                                width: "50%",
                                                backgroundColor: "#FBBC05",
                                            },
                                        ]}
                                    />
                                </View>
                                <Text style={styles.progressText}>
                                    12/24 students
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ScreenWithBackground>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: "100%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    greeting: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    date: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.7)",
        marginTop: 4,
    },
    profileButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#FBBC05",
        justifyContent: "center",
        alignItems: "center",
    },
    profileInitials: {
        color: "#162947",
        fontSize: 16,
        fontWeight: "bold",
    },
    content: {
        padding: 20,
        paddingBottom: 100,
    },
    summaryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
    },
    summaryCard: {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 16,
        padding: 15,
        width: "31%",
        alignItems: "center",
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    summaryNumber: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 4,
    },
    summaryLabel: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.7)",
    },
    sectionContainer: {
        marginBottom: 25,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
    },
    seeAllText: {
        fontSize: 14,
        color: "#FBBC05",
    },
    scheduleCard: {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 16,
        padding: 15,
        marginBottom: 12,
        flexDirection: "row",
    },
    timeContainer: {
        backgroundColor: "rgba(251, 188, 5, 0.15)",
        borderRadius: 8,
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
        minWidth: 70,
    },
    timeText: {
        color: "#FBBC05",
        fontWeight: "500",
    },
    eventContainer: {
        flex: 1,
        justifyContent: "center",
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
        marginBottom: 4,
    },
    eventDetails: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.6)",
    },
    assessmentCard: {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 16,
        padding: 15,
        marginBottom: 12,
    },
    assessmentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
    },
    assessmentTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
    },
    completionPill: {
        backgroundColor: "#46BD84",
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    completionText: {
        color: "white",
        fontSize: 12,
        fontWeight: "500",
    },
    assessmentSubtitle: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.6)",
        marginBottom: 10,
    },
    progressContainer: {
        marginTop: 8,
    },
    progressBar: {
        height: 6,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 3,
        marginBottom: 8,
    },
    progress: {
        height: 6,
        backgroundColor: "#46BD84",
        borderRadius: 3,
    },
    progressText: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.6)",
    },
});
