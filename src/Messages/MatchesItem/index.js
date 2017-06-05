import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        margin: 10

    },
    avatar: {
        width:70,
        height:70,
        borderRadius: 35,
    },
    name: {
        color:'#444',
        fontWeight: '600',
        marginTop: 10
    }
});

const MatchesItem = ({ image, name }) => <TouchableOpacity style={styles.container}>
    <Image source={{ uri: image }} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
</TouchableOpacity>;

export default MatchesItem;