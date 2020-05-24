import React, {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import {observer, inject} from "mobx-react";

import MaxImage4 from "../../assets/max-purple.png";
import Carousel from "../../components/Carousel";

const {width, height} = Dimensions.get("window");

function Home({navigation, productStore}) {
  const detailProduct = (index) => {
    navigation.navigate("Detail");
    productStore.productDetail(index);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Explore</Text>
        </View>
        <View style={styles.listMark}>
          <FlatList
            data={productStore.mark}
            horizontal={true}
            keyExtractor={(item, index) => item.key}
            renderItem={({item, index, separators}) => (
              <View style={styles.itemListMask}>
                <TouchableOpacity
                  key={item.key}
                  onPress={() => productStore.handleChangeMark(index)}>
                  <View style={{backgroundColor: "white"}}>
                    <Text
                      style={
                        productStore.mark_selected === index
                          ? styles.markTextSelected
                          : styles.markText
                      }>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.carouselContainer}>
          <FlatList
            data={productStore.mark[productStore.mark_selected].products}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item, index) => item.key}
            renderItem={({item, index}) => {
              return (
                <Carousel
                  item={item}
                  index={index}
                  onPressAdd={() => productStore.addToCart(index)}
                  onPressDetail={() => detailProduct(index)}
                  data={productStore.mark[productStore.mark_selected].products}
                />
              );
            }}
          />
        </View>
        <View>
          <TouchableOpacity>
            <LinearGradient
              colors={["#eb4034", "#e8665d", "#ffbd8a"]}
              style={styles.linearGradient}>
              <View style={{marginTop: 50, marginLeft: 20}}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#fff",
                    marginBottom: 10,
                  }}>
                  Nike Air Psgesuss
                </Text>
                <Text style={{fontSize: 25, fontWeight: "bold", color: "#fff"}}>
                  $370
                </Text>
              </View>
              <View style={{alignItems: "flex-end", bottom: 30}}>
                <Image
                  source={MaxImage4}
                  style={{resizeMode: "cover", width: 200, height: 135}}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  containerText: {
    marginTop: 55,
    marginLeft: 20,
  },
  text: {
    color: "#161924",
    fontSize: 30,
    fontWeight: "bold",
  },
  listMark: {
    marginTop: 30,
  },
  itemListMask: {
    marginLeft: 22,
  },
  markText: {
    fontSize: 20,
    color: "#c4c4c4",
    fontWeight: "bold",
  },
  markTextSelected: {
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
  },
  carouselContainer: {},
  linearGradient: {
    height: height / 6,
    margin: 15,
    justifyContent: "space-around",
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});

export default inject("productStore")(observer(Home));
