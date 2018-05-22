import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Text } from 'react-native';

class LoginForm extends Component {
    
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    
    onLoginUser() {
        const { email, password } = this.props.auth;
        console.log(email, password)
        this.props.loginUser({ email, password })
    }

    renderError() {
        if (this.props.auth.error) 
            return (
                <CardSection>
                    <Text style={styles.errorText}>{this.props.auth.error}</Text>
                </CardSection>
            )
    }

    renderSuccessMessage() {
        if (this.props.auth.authenticated) 
            return (
                <CardSection>
                    <Text style={styles.successText}>{this.props.auth.user.email} logged in successfully.</Text>
                </ CardSection>
            )
    }

    renderLoadingWheel() {
        if (this.props.auth.loading)
            return (
                <CardSection>
                    <Spinner size={"small"} />
                </ CardSection>
            )
    }

    render() {
        const { email, password } = this.props;
        console.log(this.props);
        return (
            <Card>
                <CardSection>
                    <Input 
                        onChangeText={this.onEmailChange.bind(this)}
                        label="Email"
                        placeholder="email@gmail.com"
                        value={email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={password}
                        secureTextEntry={true}
                        label="Password"
                        placeholder="password"
                    />
                </ CardSection>
                { this.renderError() }
                { this.renderSuccessMessage() }
                { this.renderLoadingWheel() }
                <CardSection>
                    <Button onPress={this.onLoginUser.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorText: {
        color: 'red',
    },
    successText: {
        color: 'green',
    }
}

const MapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(MapStateToProps, actions)(LoginForm);