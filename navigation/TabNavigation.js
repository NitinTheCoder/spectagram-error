import React from 'react';
import  {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator=()=> {
    return (
        <Tab.Navigator
        screenOptions={({route }) => {
            let iconName;
            if route.name==='feed') {
                iconName=focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreatePost') {
                iconName = focused ? 'create' : 'create-outline';
            }
            retuen <Ionicons name={iconName} size={size} color={color}
        },
    }}}
    tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
    }}

    <Tab.Screen name="Feed" component={Feed}
    <Tab.Screen name ="CreatePost" component ={CreatePost}
    <Tab.Navigator>
    );
}
export default BottomTabNavigator