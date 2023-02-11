import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useFonts } from 'expo-font';
/* บรรทัดที่ 6 เค้า test task เฉยๆ ลบได้เลย */
//import Task from './component/Task';

export default function App() {

  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    Outfit: require('./assets/fonts/Outfit-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      {/* ส่วน Lay out ของ Header */}
      <View style={styles.header}>
        <Text style={styles.headText}>TO DO</Text>
      </View>

      {/*ส่วน Container ของ body ที่จะใส่ task */}
      <View style={styles.taskContainer}>
        <View style={styles={marginTop: 50}}></View>

        <Image source={require('./assets/add.png')} 
            style={styles={
              width: '17%', 
              height: '17%', 
              resizeMode: 'contain', 
              position: "absolute", 
              bottom: '25%', 
              right: '10%'}}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1C1E',
  },

  header: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headText: {
    paddingTop: '20%',
    fontSize: 50,
    color: '#ffffff',
    fontFamily: 'Outfit',
  },

  taskContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    borderRadius: 50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

});
