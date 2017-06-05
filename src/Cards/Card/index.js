import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import SwipeCards from 'react-native-swipe-cards';

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        alignItems: 'center',
        alignSelf:'center',
        flexDirection: 'column',
        borderWidth: 2,
        borderColor:'#e3e3e3',
        width: 350,
        height: 420,
    },
    personImage: {
        width: 350,
        height: 350,
    },
    cardFooter: {
        width: 350,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    cardFooterDesc: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15
    },
    cardFooterStats: {
        flexDirection: 'row'
    },
    cardStatColumn: {
        borderLeftWidth: 1,
        borderColor: '#e3e3e3',
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardStatColumnText: {
        fontSize: 16,
        fontWeight:'200',
        color: '#555'
    }
});

const Card = ({ image, name, age, friends, liked }) => <View style={styles.card}>
    <Image 
        source={{ uri: image }}
        resizeMode="contain"
        style={styles.personImage} />
    <View style={styles.cardFooter}>
        <View style={styles.cardFooterDesc} >
            <Text style={{fontSize:20, fontWeight:'300', color:'#444'}}>{name}, </Text>
            <Text style={{fontSize:21, fontWeight:'200', color:'#444'}}>{age}</Text>
        </View>
        <View style={styles.cardFooterStats}>
            <View style={styles.cardStatColumn}>
                <Icon name="users" size={20} color="#777" />
                <Text style={styles.cardStatColumnText}>{friends}</Text>
            </View>
            <View style={styles.cardStatColumn}>
                <Icon name="book" size={20} color="#777" />
                <Text style={styles.cardStatColumnText}>{liked}</Text>
            </View>
        </View>
    </View>
</View>;

export default Card;