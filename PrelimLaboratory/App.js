import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import HelloWorld from "./component/HelloWorld";
import Username from "./component/Username";
import Counter from "./component/Counter";

const image = { uri: "https://cdn-ckjba.nitrocdn.com/XvHIXtRQMUYzLjoXbfBpiwAcydcSSOVj/assets/images/optimized/rev-d85625b/www.ciat.edu/wp-content/uploads/2022/10/react-logo.svg"
}
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <HelloWorld />
          <Username/>
          <Counter/>
      
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 2,
    paddingBottom: 100,
    opacity: 0.9,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});