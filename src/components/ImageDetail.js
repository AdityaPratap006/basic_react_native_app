import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, imageScore }) => {
    return (
        <View style={styles.imageDetail}>
            <Image source={imageSource} />
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.scoreText}>Score: {imageScore}</Text>
        </View>
    );
};

export default ImageDetail;

const styles = StyleSheet.create({
    imageDetail: {
        width: 250,
        height: 200,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#2196f3',
        elevation: 18,
        overflow: 'hidden',
    },
    titleText: {
        fontSize: 18,
        color: '#fff',
    },
    scoreText: {
        fontSize: 14,
        color: '#fff',
    }
});
