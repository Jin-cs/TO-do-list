import React, {useState} from 'react'
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity, Platform, StatusBar} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import Octicon from 'react-native-vector-icons/Octicons';
/*  Add เพิ่ม */
import { useNavigation } from '@react-navigation/native';
import ColorPalette from 'react-native-color-palette'
import DropDownPicker from 'react-native-dropdown-picker';

const YourTaskPage = () => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    /* Set Date */
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: '1', value: '1'},
      {label: '2', value: '2'},
      {label: '3', value: '3'},
      {label: '4', value: '4'},
      {label: '5', value: '5'},
      {label: '6', value: '6'},
      {label: '7', value: '7'},
      {label: '8', value: '8'},
      {label: '9', value: '9'},
      {label: '10', value: '10'},
      {label: '11', value: '11'},
      {label: '12', value: '12'},
      {label: '13', value: '13'},
      {label: '14', value: '14'},
      {label: '15', value: '15'},
      {label: '16', value: '16'},
      {label: '17', value: '17'},
      {label: '18', value: '18'},
      {label: '19', value: '19'},
      {label: '20', value: '20'},
      {label: '21', value: '21'},
      {label: '22', value: '22'},
      {label: '23', value: '23'},
      {label: '24', value: '24'},
      {label: '25', value: '25'},
      {label: '26', value: '26'},
      {label: '27', value: '27'},
      {label: '28', value: '28'},
      {label: '29', value: '29'},
      {label: '30', value: '30'},
      {label: '31', value: '31'},
    ]);
    
    /* Set Month */
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
      {label: 'January', value: '1'},
      {label: 'Fabuary', value: '2'},
      {label: 'March', value: '3'},
      {label: 'April', value: '4'},
      {label: 'May', value: '5'},
      {label: 'June', value: '6'},
      {label: 'July', value: '7'},
      {label: 'August', value: '8'},
      {label: 'September', value: '9'},
      {label: 'October', value: '10'},
      {label: 'November', value: '11'},
      {label: 'December', value: '12'},
    ])

    /* Set Year --> ลองทำแค่ 3 ปี + ติดเงื่อนไขจำนวนวัน */
    // var now = new Date()
    // var yearNow = now.getFullYear()

    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const [items3, setItems3] = useState([
      {label: '2023', value: '1'},
      {label: '2024', value: '2'},
      {label: '2025', value: '3'},
      
    ])
    /* Select Color */
    const [selectedColor, setSelectedColor] = useState('#CDD1D9');
    
    const navigation = useNavigation();
    
    return (
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('OpenTodo', {})}>
              <Text style={styles.headerButton}>Cancel</Text>
            </TouchableOpacity>

            <Text style={{fontWeight: 'bold', fontSize: 20}}>Your Task</Text>

            <TouchableOpacity onPress={() => navigation.navigate('OpenTodo', {})}>
              <Text style={styles.headerButton}>Done</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputView}>
            <TextInput
            style={styles.inputText}
            placeholder="Add Title"
            placeholderTextColor={'#C4C4C4'}
            />
          </View>

          <View style={styles.dateView}>
            <View style={{flex: 1,flexDirection: 'row',alignItems: 'center', alignSelf: 'flex-start', justifyContent: 'flex-start'}}>
              <Text style={{flex:1, alignSelf: 'center', color: '#1B1C1E', opacity: 0.8, fontSize: 18}}>Date</Text>

              {/* Switch of Date */}
              <Switch
                trackColor={{false: '#CDD1D9', true: '#1B1C1E'}}
                thumbColor={isEnabled1 ? '#FFF' : '#FF F'}
                onValueChange={toggleSwitch1}
                value={isEnabled1}
                style={{flex:1, alignSelf: 'flex-start', color: '#1B1C1E', opacity: 0.8}}
              /> 
            </View>
        
            <View style={{flex: 1, height: '5%', flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center',}}>
              {/* Dropdown Date --> แก้ logic เปิด-ปิด*/}
              <DropDownPicker
                disabled={isEnabled1 && open}
                disabledStyle={{
                  opacity: 0.5
                }}
                open={isEnabled1 && open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder='Date'
                dropDownDirection="Auto"
                dropDownContainerStyle={{
                  backgroundColor: "#CDD1D9",
                  opacity: 0.99
                }}
                maxHeight={80}
                minHeight={20}
                containerStyle={{width: '30%',marginRight: '1%'}}
                style={{
                  backgroundColor: "#CDD1D9",
                  opacity: 0.7
                }}
              />

              {/* Dropdown Month --> แก้ logic วันที่ + เปิด-ปิด*/}
              <DropDownPicker
                disabled={isEnabled1 && open}
                disabledStyle={{
                  opacity: 0.5
                }}
                open={isEnabled1 && open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                placeholder='Month'
                dropDownDirection="Auto"
                dropDownContainerStyle={{
                  backgroundColor: "#CDD1D9",
                  opacity: 0.99
                }}
                maxHeight={80}
                containerStyle={{width: '50%', marginRight: '1%'}}
                style={{
                  backgroundColor: "#CDD1D9",
                  opacity: 0.7
                }}
              />

              {/* Dropdown Year --> แก้ logic เปิด-ปิด*/}
              <DropDownPicker
                disabled={isEnabled1 && open2}
                disabledStyle={{
                  opacity: 0.5
                }}
                open={isEnabled1 && open3}
                value={value3}
                items={items3}
                setOpen={setOpen3}
                setValue={setValue3}
                setItems={setItems3}
                placeholder='Year'
                dropDownDirection="Auto"
                dropDownContainerStyle={{
                  backgroundColor: "#CDD1D9",
                  opacity: 0.99,
                }}
                maxHeight={80}
                containerStyle={{width: '30%'}}
                style={{
                  backgroundColor: "#CDD1D9",
                  opacity: 0.7
                }}
              />
          </View>

          <View style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end', justifyContent: 'flex-end', alignItems: 'center'}}>
          {/* <FontAwesome name="bell" size={18} color="#1B1C1E" style={{marginRight: 5}}/> */}
            <Octicon name="bell-fill"
                        size={18} 
                        color="#1B1C1E"
                        style={{marginRight: 5, opacity: 0.8}}/>
            <Text style={{flex:1, color: '#1B1C1E', opacity: 0.8, fontSize: 16}}>Notification</Text>

            {/* Switch of Notification */}
            <Switch
              trackColor={{false: '#CDD1D9', true: '#1B1C1E'}}
              thumbColor={isEnabled2 ? '#FFF' : '#FF F'}
              disabled={isEnabled1 == false}
              onValueChange={toggleSwitch2}
              value={isEnabled2 && isEnabled1}/> 
          </View>
        </View> 

        
        <View style={styles.colorView}>
          {/* Color palette */}
          <ColorPalette
            onChange={setSelectedColor}
            value={selectedColor}
            colors={['#CDD1D9', '#F7D28C', '#39DB8D', '#F65279', '#5BA9F0']}
            title={'Color'}
            titleStyles={{fontSize:18, color: '#1B1C1E', opacity: 0.8, alignSelf: 'flex-start'}}
            icon={<Octicon name={'check'} size={18} color={'black'} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android"? StatusBar.currentHeight:0,
},

  header:{
    marginTop: 20,
    marginBottom: 20,
    flew: 1,
    width: '100%',
    height: 50,
    justifyContent: 'space-evenly',
    flexDirection: 'row'  
  },

  headerButton:{
    fontSize: 18,
    color: '#1B1C1E',
    opacity: 0.4
  },

  inputView:{
    width:"80%",
    height:"10%",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:"#EEEFF2",
    borderRadius:15,
    marginBottom:15,
    justifyContent:"center",
    padding:20,
    alignSelf: 'center',
  },

  inputText:{
    flex: 1,
    paddingLeft: 5,
    height:50,
    color:"#000",
    fontSize: 18,
  },

  dateView:{
    width:"80%",
    height:"30%",
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:"#EEEFF2",
    borderRadius:15,
    marginBottom:15,
    justifyContent:'space-around',
    padding:20,
    alignSelf: 'center'
  },

  colorView:{
    width:"80%",
    height:"20%",
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:"#EEEFF2",
    borderRadius:15,
    marginBottom:15,
    justifyContent:"center",
    padding:20,
    alignSelf: 'center',
    overflow: 'hidden'
  },
});

  export default YourTaskPage