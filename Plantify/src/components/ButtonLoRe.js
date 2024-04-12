import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

const ButtonLoRe = (props) =>{
    const [isFocus, setIsFocus] = useState(false);

    return(
        <View>
            <Pressable
                {...props}
                style={[props.style, isFocus && {borderColor: '#0B845C'}]} 
                onBlur={() => setIsFocus(false)}
                onFocus={()=>setIsFocus(true)}
            >
                <Text style={props.styletext}>{props.nameTitle}</Text>
            </Pressable>
        </View>
    )
}

export default ButtonLoRe;
