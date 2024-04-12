import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from 'react-native';
import { StyleSheet } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import Header from "../components/Header";
import Input from '../components/Input';

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),
        'Philosopher-BoldItalic' : require('../assets/fonts/Philosopher-BoldItalic.ttf'),
        'Philosopher-Italic' : require('../assets/fonts/Philosopher-Italic.ttf'),
        'Philosopher' : require('../assets/fonts/Philosopher-Regular.ttf')
    });


    const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
    }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
    return null;
    }
      
    return(
        <SafeAreaView>
            <View style={styles.container} onLayout={onLayoutRootView}>
                <Header/>
                <Input/>
            </View>
        </SafeAreaView>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        fontFamily: "Philosopher-Bold",
    }
})