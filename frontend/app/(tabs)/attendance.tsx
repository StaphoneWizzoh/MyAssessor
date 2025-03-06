import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { ScreenWithBackground } from "./_layout";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Attendance() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Generate dates for the date selector (7 days)
    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - 3 + i);
        return date;
    });

    // Placeholder attendance data
    const classAttendanceData = [
        {
            id: 1,
            name: "Grade 1 Alpha",
            present: 22,
            total: 24,
            percentage: 92,
        },
        { id: 2, name: "Grade 1 Beta", present: 19, total: 22, percentage: 86 },
        {
            id: 3,
            name: "Grade 1 Gamma",
            present: 20,
            total: 23,
            percentage: 87,
        },
    ];

    // Placeholder student attendance data for today
    const studentAttendanceData = [
        {
            id: 1,
            name: "Emma Johnson",
            status: "present",
            arrivalTime: "7:45 AM",
        },
        {
            id: 2,
            name: "Michael Smith",
            status: "present",
            arrivalTime: "7:50 AM",
        },
        { id: 3, name: "Sophia Williams", status: "absent", arrivalTime: "" },
        {
            id: 4,
            name: "James Brown",
            status: "present",
            arrivalTime: "8:05 AM",
        },
        { id: 5, name: "Olivia Davis", status: "late", arrivalTime: "8:30 AM" },
        {
            id: 6,
            name: "William Miller",
            status: "present",
            arrivalTime: "7:55 AM",
        },
        {
            id: 7,
            name: "Ava Wilson",
            status: "present",
            arrivalTime: "7:48 AM",
        },
        { id: 8, name: "Noah Martinez", status: "absent", arrivalTime: "" },
    ];

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "short",
            day: "numeric",
        };
        return date.toLocaleDateString("en-US", options);
    };

    const isToday = (date: Date) => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "present":
                return "#4AD2C9";
            case "late":
                return "#FBBC05";
            case "absent":
                return "#FF6B6B";
            default:
                return "white";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "present":
                return "checkbox-marked-circle";
            case "late":
                return "clock-alert";
            case "absent":
                return "close-circle";
            default:
                return "help-circle";
        }
    };

    return (
        <ScreenWithBackground>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Attendance</Text>
                    <TouchableOpacity style={styles.calendarButton}>
                        <Ionicons name="calendar" size={20} color="white" />
                        <Text style={styles.calendarButtonText}>Calendar</Text>
                    </TouchableOpacity>
                </View>

                {/* Date Selector */}
                <View style={styles.dateSelector}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={dates}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.dateItem,
                                    isToday(item) && styles.dateItemToday,
                                    selectedDate.getDate() === item.getDate() &&
                                        styles.dateItemSelected,
                                ]}
                                onPress={() => setSelectedDate(item)}
                            >
                                <Text
                                    style={[
                                        styles.dateText,
                                        (isToday(item) ||
                                            selectedDate.getDate() ===
                                                item.getDate()) &&
                                            styles.dateTextSelected,
                                    ]}
                                >
                                    {formatDate(item)}
                                </Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(_, index) => index.toString()}
                        contentContainerStyle={styles.dateList}
                    />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* Attendance Summary Card */}
                    <LinearGradient
                        colors={["#27487F", "#52B6DF"]}
                        style={styles.featuredCard}
                    >
                        <View style={styles.summaryHeader}>
                            <Text style={styles.summaryTitle}>
                                Today's Attendance
                            </Text>
                            <Text style={styles.summaryDate}>
                                March 6, 2025
                            </Text>
                        </View>

                        <View style={styles.statsContainer}>
                            <View style={styles.statItem}>
                                <View
                                    style={[
                                        styles.statCircle,
                                        { borderColor: "#4AD2C9" },
                                    ]}
                                >
                                    <Text style={styles.statValue}>85%</Text>
                                </View>
                                <Text style={styles.statLabel}>Present</Text>
                            </View>

                            <View style={styles.statItem}>
                                <View
                                    style={[
                                        styles.statCircle,
                                        { borderColor: "#FBBC05" },
                                    ]}
                                >
                                    <Text style={styles.statValue}>10%</Text>
                                </View>
                                <Text style={styles.statLabel}>Late</Text>
                            </View>

                            <View style={styles.statItem}>
                                <View
                                    style={[
                                        styles.statCircle,
                                        { borderColor: "#FF6B6B" },
                                    ]}
                                >
                                    <Text style={styles.statValue}>5%</Text>
                                </View>
                                <Text style={styles.statLabel}>Absent</Text>
                            </View>
                        </View>
                    </LinearGradient>

                    {/* Class Attendance */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>
                            Class Attendance
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllText}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    {classAttendanceData.map((classItem) => (
                        <TouchableOpacity
                            key={classItem.id}
                            style={styles.classCard}
                        >
                            <View style={styles.classInfo}>
                                <Text style={styles.className}>
                                    {classItem.name}
                                </Text>
                                <Text style={styles.classDetails}>
                                    {classItem.present}/{classItem.total}{" "}
                                    students present
                                </Text>
                            </View>
                            <View style={styles.percentageContainer}>
                                <Text
                                    style={[
                                        styles.percentageText,
                                        {
                                            color:
                                                classItem.percentage > 90
                                                    ? "#4AD2C9"
                                                    : classItem.percentage > 75
                                                    ? "#FBBC05"
                                                    : "#FF6B6B",
                                        },
                                    ]}
                                >
                                    {classItem.percentage}%
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}

                    {/* Student Attendance */}
                    <Text style={styles.sectionTitle}>Student Attendance</Text>

                    {studentAttendanceData.map((student) => (
                        <TouchableOpacity
                            key={student.id}
                            style={styles.studentCard}
                        >
                            <View
                                style={[
                                    styles.statusIndicator,
                                    {
                                        backgroundColor: getStatusColor(
                                            student.status
                                        ),
                                    },
                                ]}
                            />

                            <View style={styles.studentInfo}>
                                <Text style={styles.studentName}>
                                    {student.name}
                                </Text>
                                <View style={styles.statusRow}>
                                    <MaterialCommunityIcons
                                        name={getStatusIcon(student.status)}
                                        size={14}
                                        color={getStatusColor(student.status)}
                                        style={styles.statusIcon}
                                    />
                                    <Text
                                        style={[
                                            styles.statusText,
                                            {
                                                color: getStatusColor(
                                                    student.status
                                                ),
                                            },
                                        ]}
                                    >
                                        {student.status
                                            .charAt(0)
                                            .toUpperCase() +
                                            student.status.slice(1)}
                                    </Text>
                                </View>
                            </View>

                            {student.status !== "absent" && (
                                <Text style={styles.arrivalTime}>
                                    {student.arrivalTime}
                                </Text>
                            )}
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
    calendarButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    calendarButtonText: {
        color: "white",
        marginLeft: 5,
    },
    dateSelector: {
        paddingVertical: 10,
    },
    dateList: {
        paddingHorizontal: 20,
    },
    dateItem: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 20,
        marginRight: 10,
    },
    dateItemToday: {
        backgroundColor: "rgba(251, 188, 5, 0.2)",
    },
    dateItemSelected: {
        backgroundColor: "#FBBC05",
    },
    dateText: {
        color: "white",
        fontSize: 14,
    },
    dateTextSelected: {
        fontWeight: "600",
        color: "white",
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    featuredCard: {
        borderRadius: 16,
        padding: 20,
        marginVertical: 15,
    },
    summaryHeader: {
        marginBottom: 20,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
    },
    summaryDate: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.8)",
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statItem: {
        alignItems: "center",
    },
    statCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 5,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    statValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    statLabel: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.8)",
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        marginVertical: 15,
    },
    seeAllText: {
        fontSize: 14,
        color: "#FBBC05",
    },
    classCard: {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
    percentageContainer: {
        minWidth: 50,
        alignItems: "flex-end",
    },
    percentageText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    studentCard: {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    statusIndicator: {
        width: 4,
        height: 36,
        borderRadius: 2,
        marginRight: 12,
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
    statusRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    statusIcon: {
        marginRight: 6,
    },
    statusText: {
        fontSize: 14,
        fontWeight: "500",
    },
    arrivalTime: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.7)",
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
