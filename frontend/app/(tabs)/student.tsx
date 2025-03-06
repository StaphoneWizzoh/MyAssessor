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
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Student() {
    // Placeholder student data
    const studentData = [
        { id: 1, name: "Emma Johnson", grade: "Grade 1", progress: "On Track" },
        {
            id: 2,
            name: "Michael Smith",
            grade: "Grade 1",
            progress: "Needs Support",
        },
        {
            id: 3,
            name: "Sophia Williams",
            grade: "Grade 1",
            progress: "Exceeding",
        },
        { id: 4, name: "James Brown", grade: "Grade 1", progress: "On Track" },
        { id: 5, name: "Olivia Davis", grade: "Grade 1", progress: "On Track" },
    ];

    return (
        <ScreenWithBackground>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Students</Text>
                    <TouchableOpacity style={styles.filterButton}>
                        <Ionicons name="filter" size={20} color="white" />
                        <Text style={styles.filterButtonText}>Filter</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* Featured Student Card */}
                    <LinearGradient
                        colors={["#27487F", "#52B6DF"]}
                        style={styles.featuredCard}
                    >
                        <View style={styles.profileHeader}>
                            <View style={styles.profileCircle}>
                                <Text style={styles.profileInitials}>EJ</Text>
                            </View>
                            <View style={styles.profileDetails}>
                                <Text style={styles.profileName}>
                                    Emma Johnson
                                </Text>
                                <Text style={styles.profileInfo}>
                                    Grade 1 • Age 7
                                </Text>
                            </View>
                        </View>

                        <View style={styles.statsContainer}>
                            <View style={styles.statItem}>
                                <Text style={styles.statValue}>85%</Text>
                                <Text style={styles.statLabel}>Attendance</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={styles.statValue}>12</Text>
                                <Text style={styles.statLabel}>
                                    Assessments
                                </Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={styles.statValue}>8/10</Text>
                                <Text style={styles.statLabel}>Progress</Text>
                            </View>
                        </View>
                    </LinearGradient>

                    <Text style={styles.sectionTitle}>All Students</Text>

                    {/* Student List */}
                    {studentData.map((student) => (
                        <TouchableOpacity
                            key={student.id}
                            style={styles.studentCard}
                        >
                            <View style={styles.studentInfo}>
                                <Text style={styles.studentName}>
                                    {student.name}
                                </Text>
                                <Text style={styles.studentGrade}>
                                    {student.grade}
                                </Text>
                            </View>
                            <View style={styles.studentProgress}>
                                <Text
                                    style={[
                                        styles.progressText,
                                        {
                                            color:
                                                student.progress === "Exceeding"
                                                    ? "#4AD2C9"
                                                    : student.progress ===
                                                      "On Track"
                                                    ? "#FBBC05"
                                                    : "#FF6B6B",
                                        },
                                    ]}
                                >
                                    {student.progress}
                                </Text>
                                <Ionicons
                                    name="chevron-forward"
                                    size={20}
                                    color="#4D6584"
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={styles.addButtonContainer}>
                    <TouchableOpacity style={styles.addButton}>
                        <Ionicons name="add" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScreenWithBackground>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: "100%",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "700",
        color: "white",
    },
    filterButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    filterButtonText: {
        color: "white",
        marginLeft: 5,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    featuredCard: {
        borderRadius: 16,
        padding: 20,
        marginVertical: 10,
        overflow: "hidden",
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    profileCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    profileInitials: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    profileDetails: {
        flex: 1,
    },
    profileName: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
    },
    profileInfo: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.8)",
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    statItem: {
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 12,
        padding: 12,
        width: "30%",
    },
    statValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    statLabel: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.8)",
        marginTop: 4,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        marginVertical: 15,
    },
    studentCard: {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    studentInfo: {
        flex: 1,
    },
    studentName: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
        marginBottom: 4,
    },
    studentGrade: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.6)",
    },
    studentProgress: {
        flexDirection: "row",
        alignItems: "center",
    },
    progressText: {
        fontSize: 14,
        fontWeight: "500",
        marginRight: 5,
    },
    addButtonContainer: {
        position: "absolute",
        bottom: 100,
        right: 28,
    },
    addButton: {
        height: 48,
        width: 48,
        backgroundColor: "#FBBC05",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
});
