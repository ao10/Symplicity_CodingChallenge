import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
    <MuiThemeProvider>
        <Main />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
