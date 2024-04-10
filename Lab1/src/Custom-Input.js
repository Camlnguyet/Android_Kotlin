import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const WrappInput = props => {
    
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello the world!</Text>
      <Text>Ahihi</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
