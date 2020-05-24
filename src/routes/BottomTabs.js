import * as React from "react";
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "../views/Home/ListProducts";
import Favorite from "../views/Favorite/ListFavorite";
import Profile from "../views/Profile/DetailProfile";

function IconWithBadge({name, badgeCount, color, size, focused}) {
  return (
    <View
      style={{width: focused ? 24 : 22, height: focused ? 24 : 20, margin: 5}}>
      <Icon name={name} size={size} color={color} />
      {focused && (
        <View
          style={{
            position: "absolute",
            left: 9,
            bottom: -6,
            backgroundColor: "black",
            borderRadius: 6,
            width: 5,
            height: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
      {badgeCount > 0 && (
        <View
          style={{
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "red",
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{color: "white", fontSize: 10, fontWeight: "bold"}}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  return <IconWithBadge {...props} />;
}

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === "Home") {
            return (
              <HomeIconWithBadge
                badgeCount={0}
                focused={focused}
                name="home-variant-outline"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Favorite") {
            return (
              <HomeIconWithBadge
                badgeCount={0}
                focused={focused}
                name="heart-outline"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <HomeIconWithBadge
                badgeCount={0}
                focused={focused}
                name="account-outline"
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "gray",
        showLabel: false,
        style: {borderColor: "transparent", shadowColor: "transparent"},
      }}
      initialRouteName="Home">
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
