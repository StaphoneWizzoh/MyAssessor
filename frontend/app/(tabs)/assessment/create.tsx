import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    StyleSheet,
    ScrollView,
    Modal,
    FlatList,
} from "react-native";
import { ScreenWithBackground } from "../_layout";
import { useAppDispatch } from "@/features/store";
import { newAssessment } from "@/features/assessment/crud";
import { WAssessment } from "@/constants/Types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default function CreateAssessment() {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState("");
    const [strand, setStrand] = useState("Letter Naming Uppercase");
    const [subStrand, setSubStrand] = useState("A B C D E");
    const [isAllDay, setIsAllDay] = useState(true);
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [formattedDate, setFormattedDate] = useState("");
    const [isAlertEnabled, setIsAlertEnabled] = useState(true);
    const [showStrandDropdown, setShowStrandDropdown] = useState(false);
    const [showSubStrandDropdown, setShowSubStrandDropdown] = useState(false);

    const strandOptions = [
        "Letter Naming Uppercase",
        "Letter Naming Lowercase",
        "Phonemic Awareness",
    ];

    const subStrandOptions = ["A B C D E", "F G H I J", "K L M N O"];

    const onDateChange = (
        event: any,
        selectedDate: React.SetStateAction<Date>
    ) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const handleSave = () => {
        const formData: WAssessment = {
            title: title,
            strand: strand,
            subStrand: subStrand,
            allDay: isAllDay,
            alert: isAlertEnabled,
            completion: "0%",
            date: String(date),
        };
        dispatch(newAssessment(formData));
        console.log("Assessment saved:", formData);
        router.back();
    };

    useEffect(() => {
        const formatDate = (date: Date) => {
            const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];

            const dayName = days[date.getDay()];
            const day = date.getDate();
            const month = months[date.getMonth()];

            const getDaySuffix = (day: number) => {
                if (day > 3 && day < 21) return "th";
                switch (day % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th";
                }
            };

            return `${dayName}, ${day}${getDaySuffix(day)} ${month}`;
        };

        // setFormattedDate(formatDate(date));
        setFormattedDate(date);
    }, [date]);

    return (
        <ScreenWithBackground>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    contentContainerStyle={styles.container}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.formContainer}>
                        <Text style={styles.headerText}>New Assessment</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.labelText}>Title</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Eg. Read Book"
                                placeholderTextColor="rgba(255,255,255,0.5)"
                                value={title}
                                onChangeText={setTitle}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.labelText}>Strand</Text>
                            <TouchableOpacity
                                style={styles.dropdownContainer}
                                onPress={() => setShowStrandDropdown(true)}
                            >
                                <Text style={styles.dropdownText}>
                                    {strand}
                                </Text>
                                <Ionicons
                                    name="chevron-down"
                                    size={20}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.labelText}>Sub Strand</Text>
                            <TouchableOpacity
                                style={styles.dropdownContainer}
                                onPress={() => setShowSubStrandDropdown(true)}
                            >
                                <Text style={styles.dropdownText}>
                                    {subStrand}
                                </Text>
                                <Ionicons
                                    name="chevron-down"
                                    size={20}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                height: 1,
                                width: "100%",
                                backgroundColor: "rgba(255,255,255,0.2)",
                                marginVertical: 20,
                            }}
                        />

                        <View style={styles.switchRow}>
                            <Text style={styles.switchLabel}>All day</Text>
                            <Switch
                                trackColor={{
                                    false: "#767577",
                                    true: "#4AD2C9",
                                }}
                                thumbColor="#FFFFFF"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={setIsAllDay}
                                value={isAllDay}
                            />
                        </View>

                        {isAllDay && (
                            <Text style={styles.dateText}>
                                Monday, 18th Oct
                            </Text>
                        )}

                        <View style={styles.toggleContainer}>
                            <Text style={styles.labelText}>Alert</Text>
                            <View style={styles.alertContainer}>
                                <Switch
                                    trackColor={{
                                        false: "#767577",
                                        true: "#81b0ff",
                                    }}
                                    thumbColor={
                                        isAlertEnabled ? "#f5dd4b" : "#f4f3f4"
                                    }
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={setIsAlertEnabled}
                                    value={isAlertEnabled}
                                />
                            </View>
                        </View>
                        {isAlertEnabled && (
                            <Text style={styles.alertText}>
                                1 day before class
                            </Text>
                        )}
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={handleSave}
                    >
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>

                {/* Modals */}
                <Modal
                    visible={showStrandDropdown}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setShowStrandDropdown(false)}
                >
                    <TouchableOpacity
                        style={styles.modalOverlay}
                        activeOpacity={1}
                        onPress={() => setShowStrandDropdown(false)}
                    >
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Select Strand</Text>
                            <FlatList
                                data={strandOptions}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={[
                                            styles.optionItem,
                                            item === strand
                                                ? styles.selectedOption
                                                : null,
                                        ]}
                                        onPress={() => {
                                            setStrand(item);
                                            setShowStrandDropdown(false);
                                        }}
                                    >
                                        <Text style={styles.optionText}>
                                            {item}
                                        </Text>
                                        {item === strand && (
                                            <Ionicons
                                                name="checkmark"
                                                size={20}
                                                color="white"
                                            />
                                        )}
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>

                {/* Sub Strand Dropdown Modal */}
                <Modal
                    visible={showSubStrandDropdown}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setShowSubStrandDropdown(false)}
                >
                    <TouchableOpacity
                        style={styles.modalOverlay}
                        activeOpacity={1}
                        onPress={() => setShowSubStrandDropdown(false)}
                    >
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Select Sub Strand
                            </Text>
                            <FlatList
                                data={subStrandOptions}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={[
                                            styles.optionItem,
                                            item === subStrand
                                                ? styles.selectedOption
                                                : null,
                                        ]}
                                        onPress={() => {
                                            setSubStrand(item);
                                            setShowSubStrandDropdown(false);
                                        }}
                                    >
                                        <Text style={styles.optionText}>
                                            {item}
                                        </Text>
                                        {item === subStrand && (
                                            <Ionicons
                                                name="checkmark"
                                                size={20}
                                                color="white"
                                            />
                                        )}
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>

                {/* Date Picker */}
                {/* {showDatePicker && (
                    DateTimePickerAndroid.open()
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onDateChange}
                    
                )} */}
            </SafeAreaView>
        </ScreenWithBackground>
    );
}

const styles = StyleSheet.create({
    dateText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#80B3FF",
        marginTop: 4,
        marginBottom: 16,
        // Align it with the rest of the inputs
    },
    safeArea: {
        flex: 1,
        width: "100%",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.1)",
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        marginTop: 16,
        marginBottom: 16,
    },
    container: {
        flexGrow: 1,
        width: "100%",
        paddingBottom: 40,
    },
    formContainer: {
        width: "100%",
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    inputContainer: {
        marginBottom: 20,
        width: "100%",
    },
    labelText: {
        marginBottom: 8,
        fontWeight: "500",
        color: "white",
    },
    input: {
        height: 50,
        borderColor: "rgba(255,255,255,0.3)",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        color: "white",
        backgroundColor: "transparent",
    },
    dropdownContainer: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "rgba(255,255,255,0.3)",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: "rgba(255,255,255,0)",
    },
    switchRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        justifyContent: "space-between",
    },
    switchLabel: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFFFFF",
    },
    dropdownText: {
        color: "white",
    },
    toggleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    alertContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    alertText: {
        // marginLeft: 10,
        // color: "white",
        fontSize: 14,
        fontWeight: "700",
        color: "#80B3FF",
        marginBottom: 16,
    },
    buttonContainer: {
        position: "absolute",
        bottom: "12%", // Position 20% from bottom of screen (above tab bar)
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    saveButton: {
        backgroundColor: "#F3C91C",
        height: 56,
        width: 327,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
    },
    saveButtonText: {
        color: "#090909",
        fontWeight: "bold",
        fontSize: 17,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "#1A2B3C",
        borderRadius: 10,
        padding: 20,
        maxHeight: "60%",
    },
    modalTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },
    optionItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.1)",
    },
    selectedOption: {
        backgroundColor: "rgba(255,255,255,0.1)",
    },
    optionText: {
        color: "white",
        fontSize: 16,
    },
});
