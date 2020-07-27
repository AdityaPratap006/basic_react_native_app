import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const greetings = (
        <Text style={styles.subHeaderStyle}>
            Hello John!
        </Text>
    );

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            {greetings}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    subHeaderStyle: {
        fontSize: 20,
    }
});

export default ComponentScreen;
