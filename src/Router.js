import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" 
                           component={LoginForm} 
                           title="Please log in."
                           initial />
                </Scene>
                <Scene key="main">
                    <Scene key="employeeList" 
                           rightTitle="Add"
                           onRight={() => {Actions.employeeCreate()}}
                           component={EmployeeList} 
                           title="Employee List"
                           initial />
                    <Scene key="employeeCreate" 
                           component={EmployeeCreate} 
                           title="Employee Create" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent