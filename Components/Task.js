import * as React from "react";
import { StyleSheet, Text, View} from 'react-native';
import { useFonts } from "expo-font";
import { useState } from "react";
import Checkbox from "expo-checkbox";

/* สีต่างๆ */
const textcolor = '#1B1C1E';
const light_grey = '#f0f1f3';
const dark_grey = '#CDD1D9';
const light_yellow = '#F7D28C';
const light_green = '#39DB8D';
const light_pink = '#F65279';
const light_blue = '#5BA9F0';

const Task = (props) => {
    const [isChecked, setChecked] = useState(false);
    return(
        <View style={styles.box}>
            <Checkbox style={styles.checkbox} value={isChecked} 
                onValueChange={setChecked} color={isChecked ? /*เปลี่ยนสีตอน check*/dark_grey : undefined}/>
            <Text style={styles.taskText}>{props.text}</Text>
            <Text style={styles.dateText}>31/01/23</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dateText: {
        position: 'absolute',
        marginLeft: '23%',
        bottom: '30%',
        opacity: 0.4,
        fontFamily: 'PoppinsRegular'
    },
    
    checkbox: {
        width: '10%',
        height: '30%',
        borderWidth: 2,
        borderRadius: 15,
        marginTop: '3%',
        borderColor: dark_grey,

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
        backgroundColor: light_grey,

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