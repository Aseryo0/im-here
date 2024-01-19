import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        animated
        translucent
      />
      <Home />
    </View>
  );
}
