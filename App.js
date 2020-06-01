import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Mainstore from "./Mainstore";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mywallet from "./components/Mywallet";
import Mycart from "./components/Mycart";
import Mywishlist from "./components/Mywishlist";
import Myorder from "./components/Myorder";
import Myaccount from "./components/Myaccount";
import Appliance from "./pages/Appliance";
import Herbal from "./pages/Herbal";
import Combo from "./pages/Combo";
import Kid from "./pages/Kid";
import Women from "./pages/Women";
import HomeScreen from "./pages/HomeScreen";
import SettingsScreen from "./pages/SettingScreen"








function Menwear({ navigation }) {
  return (
    <View style={{ flex: 1}}>
     
      <Text>Men wear</Text>
    
    </View>
  );
}
function Homeandkit({ navigation }) {
  return (
    <View style={{ flex: 1}}>
     
      <Text>Home and kitchen</Text>
    
    </View>
  );
}

function More({ navigation }) {
  return (
    <View style={{ flex: 1}}>
     
      <Text>More</Text>
    
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    
    <View style={{flex:1,flexDirection:"column",justifyContent:"flex-start"}}>
     <Mainstore/>
     <NavigationContainer style={{flex:1}}>
   
     <Drawer.Navigator initialRouteName="Home"
      drawerStyle={{
        backgroundColor: 'white',
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: 'red',
       
      }}
      >
      <Drawer.Screen name="Home" component={Prevnav} 
      options={{ 
      drawerIcon:({color})=><Icon name="tags" size={20} color={color}/> }}/>

      <Drawer.Screen name="Electronics" component={SettingsScreen}
      options={{ 
      drawerIcon:({color})=><Icon name="tv" size={20} color={color}/> }} />

      <Drawer.Screen name="Men wear" component={Menwear}
      options={{ 
      drawerIcon:({color})=><Icon name="user-secret" size={20} color={color}/> }} />

      <Drawer.Screen name="Home and kitchen" component={Homeandkit}
      options={{ 
      drawerIcon:({color})=><Icon name="glass" size={20} color={color}/> }} />

      <Drawer.Screen name="More" component={More}
      options={{ 
      drawerIcon:({color})=><Icon name="th" size={20} color={color}/> }}
       />

      <Drawer.Screen name="Appliance" component={Appliance}
      options={{ 
      drawerIcon:({color})=><Icon name="plug" size={20} color={color}/> }} />
      
      <Drawer.Screen name="Herbal" component={Herbal}
      options={{ 
      drawerIcon:({color})=><Icon name="coffee" size={20} color={color}/> }} />
       
       <Drawer.Screen name="Combo" component={Combo}
      options={{ 
      drawerIcon:({color})=><Icon name="th-large" size={20} color={color}/> }} />

        <Drawer.Screen name="Kid" component={Kid}
      options={{ 
      drawerIcon:({color})=><Icon name="street-view" size={20} color={color}/> }} />
       
       <Drawer.Screen name="Women" component={Women}
      options={{ 
      drawerIcon:({color})=><Icon name="diamond" size={20} color={color}/> }} />

    
      <Drawer.Screen name="My wallet" component={Mywallet}
      options={{ 
      drawerIcon:({color})=><Icon name="dollar" size={20} color={color}/> }} />

      <Drawer.Screen name="My cart" component={Mycart}
      options={{ 
      drawerIcon:({color})=><Icon name="shopping-cart" size={20} color={color}/> }} />

      <Drawer.Screen name="Wishlist" component={Mywishlist}
      options={{ 
      drawerIcon:({color})=><Icon name="list-alt" size={20} color={color}/> }} />

      <Drawer.Screen name="My order" component={Myorder}
      options={{ 
      drawerIcon:({color})=><Icon name="briefcase" size={20} color={color}/> }} />


      <Drawer.Screen name="My account" component={Myaccount}
      options={{ 
      drawerIcon:({color})=><Icon name="user-o" size={20} color={color}/> }} />


      </Drawer.Navigator>
    
  </NavigationContainer >
  </View>
  );
}
    Prevnav=()=> <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor:"white",
      labelStyle: { fontSize: 10 },
      showIcon:true,
     style: { backgroundColor: 'red' },
    }}
>
<Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{ tabBarLabel: 'Home',
tabBarIcon:({color})=><Icon name="tags" size={20} color={color}/> }}
  
  
/> 

<Tab.Screen
  name="Electronics"
  component={SettingsScreen}
  options={{ tabBarLabel: 'Electronics',
  tabBarIcon:({color})=><Icon name="tv" size={20} color={color}/> }}
  
/>

 <Tab.Screen
  name="Men wear"
  component={Menwear}
  options={{ tabBarLabel: 'Mean wear',
  tabBarIcon:({color})=><Icon name="user-secret" size={20} color={color}/> }}
  /> 

<Tab.Screen
  name="Homeandkit"
  component={Homeandkit}
  options={{ tabBarLabel: 'Home & kitchen',
  tabBarIcon:({color})=><Icon name="glass" size={20} color={color}/> }}
  /> 


<Tab.Screen
  name="More"
  component={More}
  options={{ tabBarLabel: 'More',
  tabBarIcon:({color})=><Icon name="th" size={20} color={color}/> }}
  /> 
  
 

</Tab.Navigator>
