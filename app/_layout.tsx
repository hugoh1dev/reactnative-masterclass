import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title:'Welcome',
              drawerIcon: () => (
                <Ionicons 
                  name="home-outline" 
                  size={18} 
                  color="#3A98FF" 
                />
              ),
            }}
        />
        <Drawer.Screen
            name="first"
            options={{
              drawerLabel: 'First Component',
              title:'First Component',
              drawerIcon: () => (
                <Ionicons 
                  name="heart-circle-outline" 
                  size={18} 
                  color="#3A98FF" 
                />
              ),
            }}
        />
        <Drawer.Screen
            name="counter"
            options={{
              drawerLabel: 'Counter Component',
              title:'Counter Component',
              drawerIcon: () => (
                <Ionicons 
                  name="add" 
                  size={18} 
                  color="#3A98FF" 
                />
              ),
            }}
        />
        <Drawer.Screen
            name="form"
            options={{
              drawerLabel: 'Form',
              title:'Form',
              drawerIcon: () => (
                <Ionicons 
                  name="checkbox-outline"
                  size={18} 
                  color="#3A98FF" 
                />
              ),
            }}
        />
        <Drawer.Screen
            name="tabs"
            options={{
              drawerLabel: 'Tabs',
              title:'Tabs',
              drawerIcon: () => (
                <Ionicons 
                  name="albums-outline" 
                  size={18} 
                  color="#3A98FF" 
                />
              ),
            }}
        />
        <Drawer.Screen
            name="stack"
            options={{
              drawerLabel: 'Stack',
              title:'Stack',
              drawerIcon: () => (
                <Ionicons 
                  name="logo-stackoverflow" 
                  size={18} 
                  color="#3A98FF" 
                />
              ),
            }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}