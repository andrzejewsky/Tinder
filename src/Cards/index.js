import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import SwipeCards from 'react-native-swipe-cards';
import Card from './Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestFetchingCards, like, unLike } from './actionCreators';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f7f7f7',
        marginTop: 65,
    },
    buttonsContainer: {
        flex: 0.35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderColor:'#e7e7e7',
        borderRadius: 40,
        borderWidth: 6,
        margin: 7
    },
    cardsContainer: {
        margin: 10,
        backgroundColor: '#f7f7f7',
        alignItems: 'center'
    }
});

class Cards extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadCards();
    }

    handleLike(user) {
        this.props.like(user);
    }

    handleUnlike(user) {
        this.props.unLike(user);
    }

    like() {
        const { swipeCards } = this.refs;

        this.props.like(swipeCards.getCurrentCard());
        swipeCards._forceRightSwipe();
        swipeCards._goToNextCard();
    }

    unLike() {
        const { swipeCards } = this.refs;

        this.props.unLike(swipeCards.getCurrentCard());
        this.refs.swipeCards._forceLeftSwipe();
        this.refs.swipeCards._goToNextCard();
    }

    render() {
        return <View style={styles.container}>
            <SwipeCards
                ref="swipeCards"
                containerStyle={styles.cardsContainer}
                cards={this.props.cards}
                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <View />}
                handleYup={this.handleLike.bind(this)}
                handleNope={this.handleUnlike.bind(this)}
                loop
            />

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={this.unLike.bind(this)}>
                    <Icon name="thumbs-down" size={36} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.like.bind(this)}>
                    <Icon name="thumbs-up" size={36} color="#888" />
                </TouchableOpacity>
            </View>
        </View>;
    }
}

const mapStateToProps = (state) => ({
    cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
    loadCards: bindActionCreators(requestFetchingCards, dispatch),
    like: bindActionCreators(like, dispatch),
    unLike: bindActionCreators(unLike, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);