import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router';


//import "react-recoil";
import "../less/main.less";
import "./stores/CounterStore";

window.onload = function() {
    console.log('running');
    var test = 1;
    console.log(React);
    ReactDom.render((
        <div>Test</div>
    ), document.getElementById('application-root'));
}
