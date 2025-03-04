import { Tabs } from "expo-router";
import { Platform, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
} from "react";

export function ScreenWithBackground(props: {
    children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | null
        | undefined;
}) {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#162947",
            }}
        >
            {props.children}
        </View>
    );
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#FBBC05",
                tabBarInactiveTintColor: "#162947",
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarLabelStyle: {
                    fontSize: 13,
                    fontFamily: "Poppins",
                    fontWeight: 500,
                },
                tabBarStyle: { position: "absolute", height: 64 },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color, size }) => (
                        <IconSymbol size={24} name="house.fill" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="student"
                options={{
                    title: "Student",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name="person" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="assessment"
                options={{
                    title: "Assessment",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Entypo name="graduation-cap" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="class"
                options={{
                    title: "Class",
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome6
                            name="book-open"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="attendance"
                options={{
                    title: "Attendance",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name="checkbox" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
