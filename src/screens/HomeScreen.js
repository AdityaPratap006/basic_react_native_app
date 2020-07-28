import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title={`Go to Components Demo`}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text style={styles.buttonText}>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonText: {
    fontSize: 25,
    marginVertical: 20,
  }
});

export default HomeScreen;
