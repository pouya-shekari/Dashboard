import React from 'react';
import ReactDOM from 'react-dom';
import {AppRoute} from 'routes/App.route';
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import 'uikit/dist/css/uikit.min.css';
import 'assets/styles/global.scss';
UIkit.use(Icons);

console.log('ukit', UIkit);

ReactDOM.render(
    <React.StrictMode>
        <AppRoute />
    </React.StrictMode>,
    document.getElementById('root')
);

