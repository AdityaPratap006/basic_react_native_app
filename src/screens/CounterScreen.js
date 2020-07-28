import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CounterScreen = () => {
    return (
        <View>
            <Text style={styles.displayText}>Current Count</Text>
        </View>
    );
};

export default CounterScreen;

const styles = StyleSheet.create({
    displayText: {
        fontSize: 20,
    }
});
