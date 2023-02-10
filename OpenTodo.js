import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Task from './Components/Task';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default  function OpenTodo() {

  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    Outfit: require('./assets/fonts/Outfit-Bold.ttf'),
    
  });
  
    if(!loaded) {
      return null;
    }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* ส่วน Lay out ของ Header */}
      <View style={styles.header}>
        <Text style={styles.headText}>TO DO</Text>
      </View>

      {/*ส่วน Container ของ body ที่จะใส่ task */}
      {/* <ScrollView> */}
      <View style={styles.taskContainer}>
        {/* <View style={styles={marginTop: 50,backgroundColor: 'transparent'}}></View> */}
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>

          <TouchableOpacity onPress={() => navigation.navigate('YourTaskPage', {})} style={styles.touchImage}>
            <Image source={require("./assets/add.png")}
              style={styles={
                width: '17%',  
                height: '17%', 
                resizeMode: 'contain', 
                position: "absolute", 
                bottom: '25%', 
                right: '10%',
                }}
              />
          </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
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
    overflow: 'visible',
  },

  touchImage: { 
    width: '100%',
    height: '100%',
    position: "absolute", 
    overflow: 'scroll',
  }

});

