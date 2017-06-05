import React from 'react';
import { View, Text, ScrollView, TextInput, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MatchesItem from './MatchesItem';
import ContactsItem from './ContactsItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f7f7f7',
    },
    scrollContainer: {
        padding: 10
    },
    searchInput: {
        height: 45
    },
    matches: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingTop: 15,
        paddingBottom: 15,
        borderTopColor: '#da533c',
        borderBottomColor: '#da533c'
    },
    messages: {
        paddingTop: 15
    },
    sectionHeader: {
        color:'#da533c',
        fontWeight:'600',
        fontSize:12
    }
});

class Messages extends React.Component {

    render () {
        return <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <TextInput style={styles.searchInput} placeholder="Search..." />
                <View style={styles.matches}>
                    <Text style={styles.sectionHeader}>MATCHES</Text>
                    <ListView 
                        dataSource={this.props.matchesDS}
                        renderRow={(rowData) => <MatchesItem image={rowData.image} name={rowData.name} />}
                        horizontal />
                </View>
                <View style={styles.messages}>
                    <Text style={styles.sectionHeader}>MESSAGES</Text>
                    <ListView 
                        dataSource={this.props.contactsDS}
                        renderRow={(rowData) => <ContactsItem image={rowData.image} name={rowData.name} />}
                    />
                </View>
            </ScrollView>
        </View>;
    }
}

const mapStateToProps = (state) => ({
    matchesDS: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(state.cards),
    contactsDS: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(state.cards)
});

export default connect(mapStateToProps)(Messages);