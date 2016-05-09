import * as React from 'react';
import * as ReactDom from 'react-dom';

interface IHomeProps {
}

export default class Home extends React.Component<IHomeProps, {}> {
    render() {
        return (<h1>Welcome to the Home Page</h1>);
    }
}
