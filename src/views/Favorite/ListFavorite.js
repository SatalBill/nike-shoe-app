import React from "react";
import {View, StyleSheet, TouchableWithoutFeedback, Text} from "react-native";
import {observer, inject} from "mobx-react";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import CardGradientList from "../../components/CardsGradientList";

function Favorite({navigation, productStore}) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: "center", top: 10, height: 0}}>
        <Text style={{fontSize: 30}}>Favorite</Text>
      </View>
      <View style={{marginTop: 25, flex: 1}}>
        <CardGradientList
          onPressDetail={() => navigation.navigate("Detail")}
          data={productStore.favorited}
          outherName="Men's Shoes"
          fractionScreenDimension={3}
          ItemOnRight={() => (
            <TouchableWithoutFeedback onPress={() => {}}>
              <Icon name="heart-outline" size={22} color="white" />
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default inject("productStore")(observer(Favorite));
