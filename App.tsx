import { Dimensions, SafeAreaView, StyleSheet, Text } from "react-native";
import Feed from "./src/Presentation/View/screens/Feed";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import HeaderBar from "./src/Service/components/HeaderBar";
import FooterBar from "./src/Service/components/FooterBar";

const {height, width} = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={style.root}>
      <Feed />   
    </SafeAreaView>
  );
}

const style = StyleSheet.create ({
  root: {
    //flex: 1,
    //backgroundColor: "#ffd4ad",
    //backgroundColor: "red",
  }
});

