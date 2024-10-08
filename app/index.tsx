import Button from "@/components/Button";
import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useNavigation } from "expo-router"
import { DrawerActions } from "@react-navigation/native";

export default function HomeScreen() {
  const nav = useNavigation();

  return (
    <View style={[styles.centralized, { gap: 10 }]}>
      <Ionicons
        name="logo-react"
        size={100}
      />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 700 }}>MasterClass React Native</Text>
        <Text style={{ fontSize: 16 }}>DEV.Formation</Text>
      </View>
      <Button onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
        <Text style={{ color: '#fff' }}>Exercises</Text>
      </Button>
    </View>
  );
}
