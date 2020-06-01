import React, { Component } from 'react'
import {View, Text, StyleSheet,TextInput ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const Mainstore=()=> {
  const [value, onChangeText] = React.useState('Search');
  const [Password, Passwordon] = React.useState('Password');
  
    return (

      <View style={styles.container}>
     <View style={styles.Navbar}>
     <TouchableOpacity>
     <Icon name="align-right" size={25} color="white"/>
     </TouchableOpacity >
      <Text style={styles.Nabartext}> DealMart</Text>
      <TouchableOpacity >
      <Icon name="ticket" size={25} color="white"/>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:10}}>
      <Icon name="shopping-cart" size={25} color="white"/>
      </TouchableOpacity>
     </View>
     <View style={styles.signinarea}>

      

    <TextInput style={styles.Textinput}    onChangeText={text => onChangeText(text)}
      value={value}/>

   

    

    <TouchableOpacity style={styles.button}>
    <Icon name="search-plus" size={22} color="white"/>
      </TouchableOpacity>

     
      
     </View>
     
    </View>
    )
  
}
export default Mainstore
const styles =StyleSheet.create({
  container:{
  
  },
  Navbar:{
   
    height:65,
    backgroundColor:"red",
   
    flexDirection:"row",
    alignItems:"center",
    paddingLeft:10,
    justifyContent:"space-around",
    
    
  },
  Nabartext:{
    color:"#ffffff",
    alignSelf:"auto",
    fontSize:35,
    fontWeight:"900",
    marginRight:40,
   
   
    
  },
  Nabarskip:{
    color:"#ffffff",
    fontSize:20,
    paddingRight:10,
  },
  Textinput:{
    height: 40, 
    borderColor: 'red',
     borderWidth: 5,
    width:"90%",
    padding:1,
    paddingLeft:10,
    
    
   
  },
  signinarea:{
    alignItems:"center",
    flexDirection:"row"
  },
  button:{
    alignItems: "baseline",
    backgroundColor: "red",
   padding:10,
    width:"10%",
    height:40,
  },
  button1:{
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding:10,
   
    width:"70%",
    height:60,
    borderColor: '#DDDDDD',
     borderWidth: 1,
     marginTop:15,
  
  },
  Socialbuttonarea:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
  },
  socialbutton:{
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding:10,
    width:"40%",
    height:40,
    borderColor: '#DDDDDD',
     borderWidth: 1,
  }
  
  
  });