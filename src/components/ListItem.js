import React, { Component } from 'react';
import { CardSection } from './common'
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../actions/index';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDetails() {
        if (this.props.library.id === this.props.selectedLibrary) {
            return (
                <Text style={{ flex: 1 }}>{this.props.library.description}</Text>
            )
        }
    }

    render() {

        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {this.props.library.title}
                        </Text>
                    </ CardSection>   
                    <CardSection>
                        {this.renderDetails()}    
                    </ CardSection>
                </ View>
            </ TouchableWithoutFeedback>
        );

    }
}

const styles = {
    titleStyle: {
        paddingLeft: 15,
        fontSize: 15,
        fontWeight: 'bold',
    }
}

const mapStateToProps = state => {
    return {
        selectedLibrary: state.selectedLibrary
    }
}

export default connect(mapStateToProps, actions)(ListItem);