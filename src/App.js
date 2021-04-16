import {ThemeProvider} from '@material-ui/styles';
// import Alert from './components/Alert';
import {Provider} from 'react-redux';
import store from './store';
import theme from './theme';
// import Routes from './Routes';
import {Typography} from '@material-ui/core'
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>

        {/* <Alert /> */}
        <div>
          <Typography>
            Bruh
          </Typography>
        </div>

      </ThemeProvider>
    </Provider>
  );
};

export default App;
