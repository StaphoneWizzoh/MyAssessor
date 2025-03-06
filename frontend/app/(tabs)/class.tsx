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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Class() {
    // Placeholder class data
    const classData = [
        { id: 1, name: "Grade 1 Alpha", students: 24, teacher: "Ms. Johnson" },
        { id: 2, name: "Grade 1 Beta", students: 22, teacher: "Mr. Williams" },
        { id: 3, name: "Grade 1 Gamma", students: 23, teacher: "Ms. Brown" },
    ];

    return (
        <ScreenWithBackground>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Classes</Text>
                    <TouchableOpacity style={styles.sortButton}>
                        <Ionicons
                            name="options-outline"
                            size={20}
                            color="white"
                        />
                        <Text style={styles.sortButtonText}>Sort</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* Featured Class Card */}
                    <LinearGradient
                        colors={["#27487F", "#52B6DF"]}
                        style={styles.featuredCard}
                    >
                        <View style={styles.ellipseRightLarge} />
                        <View style={styles.ellipseRightSmall} />
                        <View style={styles.ellipseLeftLarge} />
                        <View style={styles.ellipseLeftSmall} />

                        <View style={styles.cardContent}>
                            <Text style={styles.featuredTitle}>
                                Grade 1 Alpha
                            </Text>
                            <Text style={styles.featuredSubtitle}>
                                Ms. Johnson • 24 students
                            </Text>

                            <View style={styles.statsRow}>
                                <View style={styles.statItem}>
                                    <Text style={styles.statNumber}>12</Text>
                                    <Text style={styles.statLabel}>
                                        Assessments
                                    </Text>
                                </View>
                                <View style={styles.statDivider} />
                                <View style={styles.statItem}>
                                    <Text style={styles.statNumber}>95%</Text>
                                    <Text style={styles.statLabel}>
                                        Attendance
                                    </Text>
                                </View>
                                <View style={styles.statDivider} />
                                <View style={styles.statItem}>
                                    <Text style={styles.statNumber}>18</Text>
                                    <Text style={styles.statLabel}>IEPs</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.viewButton}>
                                <Text style={styles.viewButtonText}>
                                    View Class
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>

                    <Text style={styles.sectionTitle}>All Classes</Text>

                    {/* Class List */}
                    {classData.map((classItem) => (
                        <TouchableOpacity
                            key={classItem.id}
                            style={styles.classCard}
                        >
                            <View style={styles.classIconContainer}>
                                <MaterialIcons
                                    name="class"
                                    size={24}
                                    color="#FBBC05"
                                />
                            </View>
                            <View style={styles.classInfo}>
                                <Text style={styles.className}>
                                    {classItem.name}
                                </Text>
                                <Text style={styles.classDetails}>
                                    {classItem.teacher} • {classItem.students}{" "}
                                    students
                                </Text>
                            </View>
                            <Ionicons
                                name="chevron-forward"
                                size={20}
                                color="#4D6584"
                            />
                        </TouchableOpacity>
                    ))}

                    <Text style={styles.sectionTitle}>Today's Schedule</Text>

                    <View style={styles.scheduleCard}>
                        <View style={styles.timeslot}>
                            <Text style={styles.timeText}>9:00 AM</Text>
                            <View style={styles.timeConnector} />
                        </View>
                        <View style={styles.scheduleContent}>
                            <Text style={styles.scheduleTitle}>
                                Grade 1 Alpha
                            </Text>
                            <Text style={styles.scheduleDetails}>
                                Letter Naming Assessment
                            </Text>
                            <View style={styles.teacherChip}>
                                <Text style={styles.teacherName}>
                                    Ms. Johnson
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.scheduleCard}>
                        <View style={styles.timeslot}>
                            <Text style={styles.timeText}>11:30 AM</Text>
                            <View style={styles.timeConnector} />
                        </View>
                        <View style={styles.scheduleContent}>
                            <Text style={styles.scheduleTitle}>
                                Grade 1 Beta
                            </Text>
                            <Text style={styles.scheduleDetails}>
                                Phonemic Awareness
                            </Text>
                            <View style={styles.teacherChip}>
                                <Text style={styles.teacherName}>
                                    Mr. Williams
                                </Text>
                            </View>
                        </View>
                    </View>
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
    sortButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    sortButtonText: {
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
        position: "relative",
    },
    ellipseRightLarge: {
        position: "absolute",
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        top: -60,
        right: -60,
    },
    ellipseRightSmall: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        top: 30,
        right: 20,
    },
    ellipseLeftLarge: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        bottom: -40,
        left: -20,
    },
    ellipseLeftSmall: {
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        bottom: 40,
        left: 20,
    },
    cardContent: {
        position: "relative",
        zIndex: 1,
    },
    featuredTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "white",
        marginBottom: 6,
    },
    featuredSubtitle: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: 20,
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    statItem: {
        flex: 1,
        alignItems: "center",
    },
    statNumber: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.8)",
    },
    statDivider: {
        width: 1,
        height: 30,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    viewButton: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    viewButtonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        marginVertical: 15,
    },
    classCard: {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    classIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: "rgba(251, 188, 5, 0.15)",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    classInfo: {
        flex: 1,
    },
    className: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
        marginBottom: 4,
    },
    classDetails: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.6)",
    },
    scheduleCard: {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        flexDirection: "row",
    },
    timeslot: {
        alignItems: "center",
        marginRight: 15,
    },
    timeText: {
        color: "#FBBC05",
        fontWeight: "500",
        fontSize: 14,
        marginBottom: 8,
    },
    timeConnector: {
        width: 2,
        flex: 1,
        backgroundColor: "rgba(251, 188, 5, 0.3)",
    },
    scheduleContent: {
        flex: 1,
    },
    scheduleTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
        marginBottom: 4,
    },
    scheduleDetails: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.6)",
        marginBottom: 10,
    },
    teacherChip: {
        alignSelf: "flex-start",
        backgroundColor: "rgba(74, 210, 201, 0.15)",
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    teacherName: {
        fontSize: 12,
        color: "#4AD2C9",
        fontWeight: "500",
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
