import Button from "@/components/Button";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function New() {
    return (
        <View style={[styles.centralized, { gap: 10 }]}>
            <Text>New Screen</Text>
            <Button>
                <Link href="/stack" style={{ color: "#fff" }}>
                    Return
                </Link>
            </Button>
        </View>
    );
};