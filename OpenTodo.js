import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Task from './Components/Task';
import { TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import {useState} from 'react';
import { collection, getDocs} from "firebase/firestore";
import { db } from './Database/Firebase';




export default  function OpenTodo() {

  const [todos, onChangeText] = useState([]);

  const fetchPost = async () => {
     
      await getDocs(collection(db, "Task"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));                
              console.log(todos, newData);
              onChangeText(newData);
          })
     
  }
 
  useEffect(()=>{
      fetchPost();
  }, [])

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
        {/* <ScrollView> 
        <View>*/}
        {/* <View style={styles={marginTop: 50,backgroundColor: 'transparent'}}></View> */}
        {/* <Task text= 'Task 1'/>
        <Task text= 'Task 2'/> */}
        {todos?.map((todo,i)=>(
          console.log(todo),
            <Task id={todo.id} key={i} color={todo.Color} text= {todo.Title} date={todo.Date.label + "/" + todo.Month.label + "/" + todo.Year.label}/>
        ))}
        {/*</View>
         </ScrollView> */}
        <TouchableOpacity onPress={() => navigation.navigate('YourTaskPage', {})} style={styles.touchImage}>
            <Image source={require("./assets/add.png")} style={styles.imgLayout}/>
        </TouchableOpacity>
         
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
    overflow: 'visible',
  },

  touchImage: { 
    width: '17%',
    height: '17%',
    position: 'absolute', 
    bottom: '25%', 
    right: '10%',
  },

  imgLayout: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    position: "absolute", 
    // bottom: '25%', 
    // right: '10%',
  }

});

