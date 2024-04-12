import { View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

const Input = (props) =>{
    const [isFocus, setIsFocus] = useState(false);

    return(
        <View>
            <TextInput 
                {...props}
                style={[props.style, isFocus && {borderColor: '#0B845C'}]} 
                onBlur={() => setIsFocus(false)}
                onFocus={()=>setIsFocus(true)}
                placeholder={props.content}
                />
        </View>
    )
}

// const InputCustom = () =>{
//     return(
//         <View>
//             <Input style={styles.inputcustom}/>
//         </View>
//     )
// }

export default Input;

