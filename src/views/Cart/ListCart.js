import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {observer, inject} from "mobx-react";

import CardGradientList from "../../components/CardsGradientList";

function Cart({productStore}) {
  const shipping = parseFloat(productStore.cart.length * 19).toFixed(2);
  const tax = parseFloat(
    productStore.calculeteTotalValue() * (15 / 100),
  ).toFixed(2);
  const finalPrice = parseFloat(
    productStore.calculeteTotalValue() + tax + shipping,
  ).toFixed(2);

  return (
    <View style={styles.container}>
      <View style={{marginTop: 25, flex: 0.68}}>
        <CardGradientList
          data={productStore.cart}
          ItemOnRight={() => (
            <Text
              style={{
                color: "#FFF",
                fontSize: 15,
                textShadowColor: "rgba(0, 0, 0, 0.3)",
                textShadowOffset: {width: 0, height: 1},
                textShadowRadius: 10,
              }}>
              1x
            </Text>
          )}
        />
      </View>
      <View style={{flex: 0.32, marginHorizontal: 30}}>
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text style={{fontSize: 20, color: "#828282"}}>Shipping</Text>
          <Text style={{fontSize: 20, color: "#828282"}}>${shipping}</Text>
        </View>
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text style={{fontSize: 20, color: "#828282"}}>Tax (15%)</Text>
          <Text style={{fontSize: 20, color: "#828282"}}>${tax}</Text>
        </View>
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text style={{fontSize: 30, fontWeight: "bold"}}>Total</Text>
          <Text style={{fontSize: 30, fontWeight: "bold"}}>${finalPrice}</Text>
        </View>
        <View style={{flex: 0.4, justifyContent: "flex-end"}}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                width: "100%",
                height: "80%",
                backgroundColor: "black",
                borderRadius: 26,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text style={{color: "white", fontSize: 28, fontWeight: "bold"}}>
                Checkout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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

export default inject("productStore")(observer(Cart));
