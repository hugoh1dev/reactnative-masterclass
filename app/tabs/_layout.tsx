import { Ionicons } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";

export default function Layout(props: any) {
    const nav: any = useNavigation();

    function icon(name: string) {
        return (props: any) => 
            <Ionicons 
                name={name}
                size={18}
                color={props.focused? "#3A98FF" : "#000"}
            />
    }

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "Home",
                    tabBarIcon: icon("home-outline"),
                }}
            />
            <Tabs.Screen 
                name="courses" 
                options={{
                    title: "Courses",
                    tabBarIcon: icon("play-outline"),
                }}
            />
            <Tabs.Screen 
                name="config" 
                options={{
                    title: "Configurations",
                    tabBarIcon: icon("settings-outline"),
                }}
            />
            <Tabs.Screen 
                name="options" 
                options={{
                    title: "Options",
                    tabBarIcon: icon("menu"),
                }}
                listeners={{
                    tabPress: (e: any) => {
                        e.preventDefault()
                        nav?.openDrawer()
                    }
                }}
            />
        </Tabs>
    )
}