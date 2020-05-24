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

export default function Carousel({
  data,
  onPressAdd = () => {},
  onPressDetail = () => {},
  item,
  index
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

  const cor = generateColor(index);

  return (
    <View>
    <LinearGradient colors={cor} style={styles.linearGradient}>
      <View style={{marginLeft: 12}}>
        <Text
          style={{
            fontSize: 30,
            color: "#FFF",
            fontWeight: "bold",
            textShadowColor: "rgba(0, 0, 0, 0.3)",
            textShadowOffset: {width: 0, height: 1},
            textShadowRadius: 10,
          }}>
          {index < 10 ? `0${index + 1}` : `${index + 1}`}
        </Text>
      </View>
      <TouchableScale onPress={onPressDetail}>
        <View style={{bottom: 25, right: 5}}>
          <Image
            source={item.image}
            style={{resizeMode: "cover", width: 230, height: 160}}
          />
        </View>
      </TouchableScale>
      <View style={{marginLeft: 12}}>
        <Text
          style={{
            color: "#FFF",
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 4,
            textShadowColor: "rgba(0, 0, 0, 0.3)",
            textShadowOffset: {width: 0, height: 1},
            textShadowRadius: 10,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            color: "#FFF",
            fontSize: 20,
            fontWeight: "bold",
            textShadowColor: "rgba(0, 0, 0, 0.3)",
            textShadowOffset: {width: 0, height: 1},
            textShadowRadius: 10,
          }}>
          $ {item.price}
        </Text>
        <View
          style={{
            right: 6,
            marginTop: 6,
            width: "18%",
            alignItems: "center",
          }}>
          <TouchableOpacity onPress={onPressAdd}>
            <Icon
              name="add-box"
              size={30}
              color="#FFF"
              style={{
                textShadowColor: "rgba(0, 0, 0, 0.3)",
                textShadowOffset: {width: 0, height: 1},
                textShadowRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginTop: 20,
  },
  linearGradient: {
    height: height / 2.3,
    width: width / 1.9,
    marginHorizontal: 15,
    marginVertical: 10,
    justifyContent: "center",
    borderRadius: 25,
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
