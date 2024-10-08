import Button from "@/components/Button";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function InitialScreen() {
    return (
        <View style={[styles.centralized, { gap: 10 }]}>
            <Text>Initial Screen</Text>
            <Button>
                <Link href="/stack/new" style={{ color: "#fff" }}>
                    Go to New Screen
                </Link>
            </Button>
            <Button>
                <Link href="/" style={{ color: "#fff" }}>
                    Home
                </Link>
            </Button>
        </View>
    );
};