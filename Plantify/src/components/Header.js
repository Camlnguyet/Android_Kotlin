import React from "react";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

// chuyển đổi header => drawer để có menu lướt từ bên phải sang

SplashScreen.preventAutoHideAsync();

const Header = () =>{
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
        <View style={styles.headerContainer} onLayout={onLayoutRootView}>
            <View style={styles.logoIcon}>
                <Image source={require('../assets/imgs/logoBranch.png')} style={styles.image}/>
                <Text style={styles.logoBranch}>PLANTIFY</Text>
            </View>
            <View style={styles.iconBar}>
                <Image source={require('../assets/imgs/notification.png')} style={styles.noti}/>
                <Image source={require('../assets/imgs/menu.png')} style={styles.menubar}/>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer:{
        paddingTop: 20,
        paddingBottom: 26,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: 'white',
    },
    logoIcon:{
        flexDirection: 'row',
        alignItems:'center',
    },
    image:{
        width: 34,
        height:  28,
        marginRight: 14,
        marginLeft: 19,
    },
    iconBar:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    noti:{
        width: 18,
        height: 20,
    },
    menubar:{
        height: 30,
        width: 31,
        marginRight: 13,
        marginLeft: 17.5,
    }
    ,logoBranch: {
        fontFamily: 'Philosopher-Bold',
        fontSize: 20,
        letterSpacing: 10,
    }
})