import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e3e3e3',
        marginBottom: 5,
        marginTop: 5
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 5,
    },
    name: {
        fontWeight:'600',
        color:'#111',
        marginLeft: 10
    }
});

const ContactsItem = ({ image, name }) => <TouchableOpacity style={styles.container}>
    <Image source={{ uri: image }} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
</TouchableOpacity>;

export default ContactsItem;