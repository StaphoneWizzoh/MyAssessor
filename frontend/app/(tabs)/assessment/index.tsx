import React, { useEffect, useCallback } from "react";
import { router, useFocusEffect } from "expo-router";
import {
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { ScreenWithBackground } from "../_layout";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import AssessmentDetailCard from "@/components/ui/AssessmentDetailCard";
import Card from "@/components/ui/Card";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { fetchAssessments } from "@/features/assessment/crud";

export default function Assessment() {
    const dispatch = useAppDispatch();
    const { assessments, status } = useAppSelector((state) => state.assessment);

    useFocusEffect(
        useCallback(() => {
            dispatch(fetchAssessments());
        }, [dispatch])
    );

    useEffect(() => {
        dispatch(fetchAssessments());
    }, []);

    const renderFooter = () => {
        if (status === "loading") {
            return (
                <View style={{ padding: 16, alignItems: "center" }}>
                    <ActivityIndicator size="small" color="#FBBC05" />
                </View>
            );
        }
        return null;
    };

    return (
        <ScreenWithBackground>
            <SafeAreaView
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <FlatList
                    data={assessments}
                    renderItem={({ item }) => (
                        <AssessmentDetailCard assessment={item} />
                    )}
                    keyExtractor={(item) =>
                        item?.id?.toString() || Math.random().toString()
                    }
                    contentContainerStyle={{
                        paddingBottom: 100,
                    }}
                    onEndReachedThreshold={0.3}
                    ListFooterComponent={renderFooter}
                />
            </SafeAreaView>
            <View
                style={{
                    position: "absolute",
                    bottom: 124,
                    right: 28,
                }}
            >
                <TouchableOpacity
                    style={{
                        padding: 10,
                        backgroundColor: "#FBBC05",
                        borderRadius: 5,
                        height: 48,
                        width: 48,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => router.push("/assessment/create")}
                >
                    <Ionicons name="add" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </ScreenWithBackground>
    );
}
