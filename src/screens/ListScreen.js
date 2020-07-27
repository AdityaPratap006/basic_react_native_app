import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend#1' },
        { name: 'Friend#2' },
        { name: 'Friend#3' },
        { name: 'Friend#4' },
        { name: 'Friend#5' },
        { name: 'Friend#6' },
        { name: 'Friend#7' },
        { name: 'Friend#8' },
        { name: 'Friend#9' },
    ];

    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <View style={styles.listItemStyle}>
                        <Text>{item.name}</Text>
                    </View>
                );
            }}
        />
    );
}

export default ListScreen;

const styles = StyleSheet.create({
    listItemStyle: {
        marginVertical: 100,
        marginHorizontal: 50,
    },
});
