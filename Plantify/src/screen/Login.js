import { Text, Image, View, StyleSheet, Dimensions, Pressable} from "react-native";
import Input from '../components/Input';
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonLoRe from '../components/ButtonLoRe';
import Link f

const heightsc = Dimensions.get('window').height;
const widthsc = Dimensions.get('window').width;

const Login = () => {

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Welcome you!</Text>
                <Text>Login account</Text>
                <Input style={styles.inputcustom} content="Email"/>
                <Input style={styles.inputcustom} content="Password"/>
                <View style={styles.functionalpass}>
                    <View>
                        <Image/>
                        <Text>Remember me?</Text>
                    </View>
                    <Text>Forgot Password?</Text>
                </View>
                <ButtonLoRe style={styles.btnRe} nameTitle="Login"  styletext={styles.styletext}/>
                <View>
                    {/* Hoawcj */}
                </View>
                <View>
                    <Image/>
                    <Image/>
                    <View>
                        <Text>You don't have account?</Text>
                        <Pressable><Text>Create account</Text></Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        marginTop: 0,
        alignSelf: 'center',
        width: (widthsc*0.8),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputcustom:{
        height: 46,
        width: (widthsc*0.8),
        paddingLeft: 15,
        borderRadius: 14,
        borderWidth: 1.5,
        marginBottom: 10,
        borderColor: '#002140',
    },
    functionalpass:{
        width: (widthsc*0.8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnRe:{
        width: (widthsc*0.8),
        height: 46,
        borderRadius: 14,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#002140',
    },
    styletext:{
        color: 'white',
    },
})