import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from "./common";
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class LoginForm extends Component {
    
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
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

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const MapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(MapStateToProps, actions)(LoginForm);