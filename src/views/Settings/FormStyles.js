import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(2)
  },
  
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 16px',
    '& > *': {
      width: '100%',
      marginBottom: '1rem'
    }
  },
  submitCard: {
    display: 'flex',
    justifyContent: 'center'
  },
  submitButton: {
    margin: '1rem auto'
  },
  submitInput: {
    border: 'none',
    background: 'none',
    outline: 'none',
    color: 'white',
    fontSize: '1rem',
    width: '100%',
    height: '100%',
    cursor: 'pointer'
  }
}));

export default useStyles;
