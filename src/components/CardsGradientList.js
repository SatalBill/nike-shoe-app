import React, {useState} from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  Button,
} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

import TouchableScale from "react-native-touchable-scale";

import Icon from "react-native-vector-icons/MaterialIcons";

const {width, height} = Dimensions.get("window");

export default function CardGradientList({
  data,
  onPressAdd = () => {},
  onPressDetail = () => {},
  ItemOnRight,
  outherName,
  fractionScreenDimension = 4,
}) {
  function shadeColor(color, percent) {
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100);
    G = parseInt((G * (100 + percent)) / 100);
    B = parseInt((B * (100 + percent)) / 100);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
    var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
    var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

    return "#" + RR + GG + BB;
  }

  function random(min, max, length) {
    var numbers = [];

    function _random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    Array.apply(null, new Array(length)).reduce(function (previous) {
      var nextRandom;

      if (previous === min) {
        nextRandom = _random(min + 1, max);
      } else if (previous === max) {
        nextRandom = _random(min, max - 1);
      } else {
        if (_random(0, 1)) {
          nextRandom = _random(previous + 1, max);
        } else {
          nextRandom = _random(min, previous - 1);
        }
      }

      numbers.push(nextRandom);
      return nextRandom;
    }, _random(min, max));

    return numbers;
  }

  const radnums = random(0, 5, data.length);

  const generateColor = (index) => {
    const list = [
      ["#f20000", "#ff4a4d", "#ff9393"],
      ["#00899f", shadeColor("#00899f", 40), shadeColor("#00899f", 40)],
      ["#ff3e66", shadeColor("#ff3e66", 80), "#fdeaac"],
      ["#8b16f8", "#649bf2", "#4ac8e5"],
      ["#069444", "#85c232", "#f7ec22"],
      ["#06aac3", "#85d5a0", "#f7fd81"],
      ["#322a6c", "#5b2b7e", "#832d90"],
      ["#ee2324", "#f48323", "#fbe721"],
    ];
    return list[radnums[index]];
  };

  const renderItem = ({item, index}) => {
    const cor = generateColor(index);

    return (
      <View style={[index < 2 ? {marginTop: 10} : {}, {flex: 1}]}>
        <LinearGradient
          colors={cor}
          style={[
            styles.linearGradient,
            {
              height: height / fractionScreenDimension,

              flex: 1,
            },
            fractionScreenDimension > 3.5
              ? {marginHorizontal: 15, width: width / 2.35}
              : {marginLeft: 10, width: width / 2.2},
          ]}>
          <View style={{flex: 1, justifyContent: "space-between", bottom: 15}}>
            <View style={{flex: 1}}>
              <TouchableScale onPress={onPressDetail}>
                <View style={{left: 5, bottom: 10}}>
                  <Image
                    source={item.image}
                    style={{resizeMode: "cover", width: 160, height: 110}}
                  />
                </View>
              </TouchableScale>
            </View>
            <View
              style={{
                marginHorizontal: 12,
                justifyContent: "space-evenly",
                flex: 1,
              }}>
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 4,
                  textShadowColor: "rgba(0, 0, 0, 0.3)",
                  textShadowOffset: {width: 0, height: 1},
                  textShadowRadius: 10,
                }}>
                {item.name}
              </Text>
              {outherName && (
                <Text
                  style={{
                    color: "#e0e0e0",
                    fontSize: 15,
                    marginBottom: 4,
                    textShadowColor: "rgba(0, 0, 0, 0.3)",
                    textShadowOffset: {width: 0, height: 1},
                    textShadowRadius: 10,
                  }}>
                  {outherName}
                </Text>
              )}
              <View
                style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text
                  style={{
                    color: "#FFF",
                    fontSize: 25,
                    fontWeight: "bold",
                    textShadowColor: "rgba(0, 0, 0, 0.3)",
                    textShadowOffset: {width: 0, height: 1},
                    textShadowRadius: 10,
                  }}>
                  $ {item.price}
                </Text>
                {ItemOnRight && (
                  <View
                    style={{
                      justifyContent: "flex-end",
                      marginRight: 10,
                    }}>
                    <ItemOnRight />
                  </View>
                )}
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  const renderSeparator = () => (
    <View
      style={{
        height: 25,
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.key}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginTop: 20,
  },
  linearGradient: {
    marginVertical: 10,
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
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#000",
    backgroundColor: "transparent",
  },
});
