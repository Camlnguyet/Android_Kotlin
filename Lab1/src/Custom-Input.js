import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const CustomHeader = () => {
  return(
    <SafeAreaView>
      <View style={style.overcontainer}>
        <Text>Hello the new day!</Text>
      </View>
    </SafeAreaView>
  )
}

export default CustomHeader;

const style = StyleSheet.create({
  overcontainer: {
    paddingTop: '10px',
    paddingBottom: '10px',
  }
})