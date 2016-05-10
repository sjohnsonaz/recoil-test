import * as React from 'react';
import * as ReactDom from 'react-dom';

//import "react-recoil";
import "../less/main.less";
import Application from './Application.jsx';

window.onload = function () {
    console.log('running');
    ReactDom.render((
        <Application></Application>
    ), document.getElementById('application-root'));
}
