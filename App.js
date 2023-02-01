import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/homescreen/homescreen.js";
import FavScreen from "./components/favscreen/favscreen.js";
import SearchScreen from "./components/searchscreen/searchscreen.js";
import ProfileScreen from "./components/profilescreen/profilescreen.js";
import Ionicons from 'react-native-vector-icons/Ionicons';


function HomeScreenRender() {
	return (
		<HomeScreen />
	);
}

function FavScreenRender() {
	return (
		<FavScreen />
	);
}

function SearchScreenRender() {
	return (
		<SearchScreen />
	);
}

function ProfileScreenRender() {
	return (
		<ProfileScreen />
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
					let iconName;
		
					if (route.name === 'Home') {
						iconName = focused ? 'home' : 'home-outline';
					} else if (route.name === 'Favorites') {
						iconName = focused ? 'star' : 'star-outline';
					} else if (route.name === 'Search') {
						iconName = focused ? 'search' : 'search-outline';
					} else if (route.name === 'Profile') {
						iconName = focused ? 'person' : 'person-outline';
					}
					// You can return any component that you like here!
					return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: '#ff0044',
					tabBarInactiveTintColor: 'gray',
				})}
			>
				<Tab.Screen name="Home" component={HomeScreenRender} />
				<Tab.Screen name="Favorites" component={FavScreenRender} />
				<Tab.Screen name="Search" component={SearchScreenRender} />
				<Tab.Screen name="Profile" component={ProfileScreenRender} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
