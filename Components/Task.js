import * as React from "react";
import { StyleSheet, Text, View} from 'react-native';
import { useFonts } from "expo-font";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { db } from "../Database/Firebase";
import { doc, deleteDoc} from "firebase/firestore";



/* สีต่างๆ */
const textcolor = '#1B1C1E';
const light_grey = '#f0f1f3';
const dark_grey = '#CDD1D9';
const light_yellow = '#ffe084';
const light_green = '#74e5af';
const light_pink = '#f997ae';
const light_blue = '#8cc2f4';



const Task = (props) => {
    const [isChecked, setChecked] = useState(false);
    const colorSelected = props.color;





    //const db = getFirestore();

    // const docRef = doc(db, "Task", "");
   

    // deleteDoc(docRef)
    //  .then(() => {
    //     console.log("Entire Document has been deleted successfully.")
    // })
    // .catch(error => {
    //     console.log(error);
    // })
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
        setRefreshing(false);
    }, 2000);
    }, []);

    
    return(
        <View style={[styles.box, {backgroundColor: colorSelected, borderRadius: 20}]}>
            <Checkbox style={styles.checkbox} value={isChecked} onTouchEnd = {async()=>{
                console.log(props.id);
                await deleteDoc(doc(db, "Task", props.id));   
                
            }} 
                onValueChange={setChecked} color={isChecked ? /*เปลี่ยนสีตอน check*/textcolor : undefined}
                />
            <Text style={styles.taskText}>{props.text}</Text>
            <Text style={styles.dateText}>{props.date}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    dateText: {
        position: 'absolute',
        marginLeft: '23%',
        bottom: '30%',
        opacity: 0.5,
        fontFamily: 'PoppinsRegular'
    },
    
    checkbox: {
        width: '10%',
        height: '30%',
        borderWidth: 2,
        borderRadius: 15,
        marginTop: '3%',
        borderColor: textcolor,

    },
    
    taskText: {
        color: textcolor,
        fontFamily: 'Poppins',
        fontSize: 25,
        opacity: 0.8,
        marginTop: '1%',
        marginLeft: '3%',
        flexWrap: 'wrap',
    },    
    
    box: {
        /* เลือกสีกล่อง */
        

        width: '80%',
        height: '15%',
        marginTop: 20,
        borderRadius: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingLeft: '7%',
        paddingTop: '5%',
    },


});
  

export default Task;
