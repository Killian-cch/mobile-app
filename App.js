import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/homescreen/homescreen.js";
import FavScreen from "./components/favscreen/favscreen.js";
import SearchScreen from "./components/searchscreen/searchscreen.js";
import ProfileScreen from "./components/profilescreen/profilescreen.js";


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
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreenRender} />
				<Tab.Screen name="Fav" component={FavScreenRender} />
				<Tab.Screen name="Search" component={SearchScreenRender} />
				<Tab.Screen name="Profile" component={ProfileScreenRender} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
