import React from 'react';
import User from '../../components/User'

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Page of {props.appName}</h1>
        <User name="Marcus" age="26" />
    </div>
);

authIndexPage.getInitialProps = (context) => {
    let app = {}
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve({appName: "Super App (Auth)"})
     }, 1000)});
}

export default authIndexPage