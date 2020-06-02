
import React from 'react'
import { View, Text,StyleSheet,Image, SafeAreaView, ScrollView } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <SafeAreaView><ScrollView>

      <Text style={{fontSize:30,margin:10}}>BEST SELLERS</Text>
    <View style={styles.card}>
      <View style={{flexDirection:"row",flex:1,marginBottom:10,}}>
      <Image
        style={styles.cardImage}
        source={{
          uri: 'https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/15826-19-1.jpg',
        }}
      />
       <Image
        style={styles.cardImage}
        source={{
          uri: 'https://ae01.alicdn.com/kf/H38ee3ed966b04c02a4ccc2c2128dce25A/vivo-Z5-Mobile-Phone-8G-128G-Snapdragon712-4500mAh-Celular-Big-Battery-Super-AMOLED-Screen-48MP-32.jpg_640x640.jpg',
        }}
      />
      </View>
     <Text style={{fontSize:20,margin:10}}> vivo Z5 Mobile Phone 8G 128G Snapdragon712 </Text>
    </View>



    <View style={styles.card}>
      <View style={{flexDirection:"row",flex:1,marginBottom:10,}}>
      <Image
        style={styles.cardImage}
        source={{
          uri: 'https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/15826-19-1.jpg',
        }}
      />
       <Image
        style={styles.cardImage}
        source={{
          uri: 'https://ae01.alicdn.com/kf/H38ee3ed966b04c02a4ccc2c2128dce25A/vivo-Z5-Mobile-Phone-8G-128G-Snapdragon712-4500mAh-Celular-Big-Battery-Super-AMOLED-Screen-48MP-32.jpg_640x640.jpg',
        }}
      />
      </View>
     <Text style={{fontSize:20,margin:10}}> vivo Z5 Mobile Phone 8G 128G Snapdragon712 </Text>
    </View>
    </ScrollView></SafeAreaView>
    </View>
  )
}

export default HomeScreen
const styles =StyleSheet.create({
  container:{
  flex:1,
  alignItems:"center",
  backgroundColor:"#D0D0D0",
  },
 card:{
  margin:10,
  height:350,
  width:"95%",
  borderWidth:3,
  borderColor:"#ffffff",
  backgroundColor:"#ffffff",
  alignContent:"center",
  alignItems:"center",
  
 },
 cardImage:{
   height:"90%",
   width:"50%",
   
   }
});
