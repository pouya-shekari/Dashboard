import {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {PATHS} from 'configs/routes.config';
import * as Page from 'pages';
import {PrivateRoute, ProtectedRoute, PublicRoute} from './components';

class AppRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={PATHS.HOME} element={<PublicRoute hasLayout={false} component={(props) => <Page.Home {...props} />} />} />
                    <Route path={PATHS.DASHBOARD} element={<PrivateRoute hasLayout={false} component={(props) => <Page.Dashboard {...props} />} />} />
                    <Route path={PATHS.SIGN_IN} element={<ProtectedRoute component={(props) => <Page.Login {...props} />} />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export {AppRoute};
