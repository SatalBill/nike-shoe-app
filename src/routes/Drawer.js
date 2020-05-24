import * as React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Animated from "react-native-reanimated";
import {View, TouchableOpacity, StyleSheet, Text} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import BottomTabs from "./BottomTabs";
import Detail from "../views/Details/DetailProduct";
import Cart from "../views/Cart/ListCart";

const DrawerNavigator = createDrawerNavigator();
const StackNavigator = createStackNavigator();

const Screens = ({navigation, style}) => {
  return (
    <Animated.View
      style={[
        {flex: 1, overflow: "hidden"},
        style,
        {
          borderRadius: 2,
          borderColor: "#ddd",
          borderBottomWidth: 0,
          shadowColor: "#000",
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 15,
        },
      ]}>
      <StackNavigator.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
        }}>
        <StackNavigator.Screen
          name="Home"
          component={BottomTabs}
          options={{
            headerTitle: () => (
              <TouchableOpacity
                style={{alignItems: "flex-end", margin: 5}}
                onPress={navigation.openDrawer}>
                <Icon name="menu" size={30} />
              </TouchableOpacity>
            ),
          }}
        />
        <StackNavigator.Screen name="Detail" component={Detail} />
        <StackNavigator.Screen
          name="Cart"
          component={Cart}
          options={{
            headerTitle: () => (
              <Text style={{fontSize: 30, left: "220%"}}>Cart</Text>
            ),
          }}
        />
      </StackNavigator.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{marginTop: 50}}>
        <DrawerItem
          label="Home"
          labelStyle={styles.drawer_item}
          onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          label="Cart"
          labelStyle={styles.drawer_item}
          onPress={() => props.navigation.navigate("Cart")}
        />
        <DrawerItem
          label="Contact"
          labelStyle={styles.drawer_item}
          onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          label="Shop"
          labelStyle={styles.drawer_item}
          onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          label="Profile"
          labelStyle={styles.drawer_item}
          onPress={() => props.navigation.navigate("Home")}
        />
      </View>
    </DrawerContentScrollView>
  );
};

function Drawer() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const scrennStyles = {borderRadius, transform: [{scale}]};

  return (
    <View style={{flex: 1}}>
      <DrawerNavigator.Navigator
        drawerType="slide"
        overlayColor="transparent"
        initialRouteName="Home"
        drawerStyle={{width: "50%", backgroundColor: "white"}}
        sceneContainerStyle={{
          backgroundColor: "white",
        }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <DrawerNavigator.Screen name="Screens">
          {(props) => <Screens {...props} style={scrennStyles} />}
        </DrawerNavigator.Screen>
      </DrawerNavigator.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer_item: {
    fontSize: 20,
    color: "#c4c4c4",
    fontWeight: "bold",
    marginLeft: 25,
  },
});

export default Drawer;
