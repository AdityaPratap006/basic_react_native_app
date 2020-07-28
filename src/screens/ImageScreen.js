import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import ImageDetail from '../components/ImageDetail';
import { FlatList } from 'react-native-gesture-handler';

const images = [
    {
        title: "Forest",
        src: require("../assets/images/forest.jpg"),
        score: 6,
    },
    {
        title: "Mountains",
        src: require("../assets/images/mountain.jpg"),
        score: 8,
    },
    {
        title: "Beach",
        src: require("../assets/images/beach.jpg"),
        score: 9,
    }
];

const ImageScreen = () => {
    return (
        <View>
            <FlatList
                data={images}
                keyExtractor={(img) => img.title}
                renderItem={({ item }) => (
                    <ImageDetail
                        title={item.title}
                        imageSource={item.src}
                        imageScore={item.score}
                    />
                )}
            />
        </View>
    );
};

export default ImageScreen;

const styles = StyleSheet.create({

});

