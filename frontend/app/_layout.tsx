import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="login"/>
      <Stack.Screen name="signup"/>
      <Stack.Screen name="progress" options={{headerTransparent: true}}/>
      <Stack.Screen name="Dashboard" options={{ headerShown: false }}/>
      <Stack.Screen name="Water" options={{headerTransparent: true}}/>
      <Stack.Screen name="Exercise" options={{headerTransparent: true}}/>
      <Stack.Screen name="Diet" options={{headerTransparent: true}}/>
      <Stack.Screen name="Reading" options={{headerTransparent: true}}/>
      <Stack.Screen name="Photo" options={{headerTransparent: true}}/>




    </Stack>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: 'transparent',
    height: '100%',
  },
});

