import {ThemeProvider} from '@material-ui/styles';
import Alert from './components/Alert';
import {Provider} from 'react-redux';
import store from './store';
import theme from './theme';
import Routes from './Routes';
// import {Typography} from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './assets/scss/index.scss';

const browserHistory = createBrowserHistory ();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Alert />
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

//bruh
