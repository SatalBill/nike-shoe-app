import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import {observer, inject} from "mobx-react";

import {getColorRandomList} from "../../utils";

function Profile({productStore}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require("../../assets/nike-background-store.jpg")}
            style={{width: "100%", height: "85%"}}>
            <LinearGradient
              colors={["#25dbf7", "#cea7f2", "#e893f5"]}
              style={{
                width: "100%",
                height: "85%",
                opacity: 0.6,
              }}
            />
          </ImageBackground>
          <View style={styles.cardInfos}>
            <View style={styles.image}>
              <LinearGradient
                colors={["#25dbf7", "#cea7f2", "#e893f5"]}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 45,
                  opacity: 0.6,
                }}>
                <Image
                  source={require("../../assets/person-icon.png")}
                  style={{width: "100%", height: "100%"}}
                />
              </LinearGradient>
            </View>
            <View
              style={{alignSelf: "center", alignItems: "center", bottom: 50}}>
              <Text style={{fontSize: 30, fontWeight: "bold"}}>
                John Elliot
              </Text>
              <Text style={{fontSize: 15, color: "#78797d"}}>
                Albani, New York
              </Text>
            </View>
            <View style={styles.characteristics}>
              <View>
                <Text style={styles.titleCharacteristics}>Purhcased</Text>
                <Text style={styles.valueCharacteristics}>124</Text>
              </View>
              <View>
                <Text style={styles.titleCharacteristics}>Wished</Text>
                <Text style={styles.valueCharacteristics}>321</Text>
              </View>
              <View>
                <Text style={styles.titleCharacteristics}>Likes</Text>
                <Text style={styles.valueCharacteristics}>12K</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.collection}>
          <Text style={{fontSize: 28, color: "#78797d", marginBottom: 12}}>
            Collection
          </Text>
          <View>
            <FlatList
              data={productStore.mark}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={(item) => String(item.key)}
              renderItem={({item, index, separators}) => {
                const colors = getColorRandomList(0, 1);
                return (
                  <View style={{marginRight: 15}}>
                    <TouchableOpacity key={item.id} onPress={() => {}}>
                      <ImageBackground
                        source={item.collection}
                        style={{width: 150, height: 180, borderRadius: 50}}
                        imageStyle={{borderRadius: 15}}>
                        <LinearGradient
                          colors={colors}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            opacity: 0.5,
                            borderRadius: 15,
                          }}></LinearGradient>
                        <View
                          style={{
                            justifyContent: "flex-end",
                            height: "100%",
                            marginHorizontal: 15,
                            bottom: 20,
                          }}>
                          <Text style={styles.markTitle}>{item.title}</Text>
                          <Text style={styles.markLength}>
                            {item.products.length} Shoes
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 30,
            }}>
            <TouchableOpacity>
              <View style={{flexDirection: "row"}}>
                <Icon
                  name="shopping-basket"
                  size={23}
                  color="#7a78ff"
                  style={{marginRight: 8}}
                />
                <Text style={{fontSize: 20, color: "#616266"}}>My Orders</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{flexDirection: "row"}}>
                <Icon
                  name="settings"
                  size={23}
                  color="#7a78ff"
                  style={{marginRight: 8}}
                />
                <Text style={{fontSize: 20, color: "#616266"}}>Settings</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  cardInfos: {
    backgroundColor: "white",
    height: 200,
    bottom: "45%",
    marginHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
  },
  image: {
    alignSelf: "center",
    width: 90,
    height: 90,
    borderRadius: 45,
    bottom: 60,
    backgroundColor: "white",
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
  },
  characteristics: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    bottom: 20,
  },
  titleCharacteristics: {
    fontSize: 18,
    color: "#616266",
  },
  valueCharacteristics: {
    fontSize: 23,
    alignSelf: "center",
  },
  collection: {
    flex: 1,
    marginHorizontal: 20,
    top: 20,
  },
  markTitle: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },
  markLength: {
    color: "white",
    fontSize: 16,
  },
});

export default inject("productStore")(observer(Profile));
