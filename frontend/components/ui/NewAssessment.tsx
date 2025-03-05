import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    StyleSheet,
    ScrollView,
    Modal,
    Pressable,
} from "react-native";

interface NewAssessmentProps {
    isVisible: boolean;
    onClose: () => void;
    onSave?: (assessmentData: any) => void;
}

export default function NewAssessment({
    isVisible,
    onClose,
    onSave,
}: NewAssessmentProps) {
    const [title, setTitle] = useState("");
    const [strand, setStrand] = useState("Letter Naming Uppercase");
    const [subStrand, setSubStrand] = useState("A B C D E");
    const [isAllDay, setIsAllDay] = useState(true);
    const [selectedDate, setSelectedDate] = useState("Monday, 18th Oct");
    const [isAlertEnabled, setIsAlertEnabled] = useState(true);

    const strandOptions = [
        "Letter Naming Uppercase",
        "Letter Naming Lowercase",
        "Phonemic Awareness",
    ];

    const subStrandOptions = ["A B C D E", "F G H I J", "K L M N O"];

    const handleSave = () => {
        if (onSave) {
            onSave({
                title,
                strand,
                subStrand,
                isAllDay,
                selectedDate,
                isAlertEnabled,
            });
        }
        onClose();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.headerText}>New Assessment</Text>
                        <TouchableOpacity
                            onPress={onClose}
                            style={styles.closeButton}
                        >
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        contentContainerStyle={styles.container}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.inputContainer}>
                            <Text style={styles.labelText}>Title</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Eg. Read Book"
                                placeholderTextColor="rgba(0,0,0,0.5)"
                                value={title}
                                onChangeText={setTitle}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.labelText}>Strand</Text>
                            <TouchableOpacity style={styles.dropdownContainer}>
                                <Text style={styles.dropdownText}>
                                    {strand}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.labelText}>Sub Strand</Text>
                            <TouchableOpacity style={styles.dropdownContainer}>
                                <Text style={styles.dropdownText}>
                                    {subStrand}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.toggleContainer}>
                            <Text style={styles.labelText}>All day</Text>
                            <Switch
                                trackColor={{
                                    false: "#767577",
                                    true: "#81b0ff",
                                }}
                                thumbColor={isAllDay ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={setIsAllDay}
                                value={isAllDay}
                            />
                        </View>

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
                                {isAlertEnabled && (
                                    <Text style={styles.alertText}>
                                        1 day before class
                                    </Text>
                                )}
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={handleSave}
                        >
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        width: "90%",
        maxHeight: "80%",
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        padding: 15,
    },
    closeButton: {
        padding: 5,
    },
    closeButtonText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    container: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 20,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    labelText: {
        marginBottom: 8,
        fontWeight: "500",
    },
    input: {
        height: 50,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    dropdownContainer: {
        height: 50,
        justifyContent: "center",
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    dropdownText: {
        color: "#000",
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
        marginLeft: 10,
    },
    saveButton: {
        backgroundColor: "#FFD700",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 20,
    },
    saveButtonText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
    },
});
