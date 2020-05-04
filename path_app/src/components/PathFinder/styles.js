import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grid: {
    backgroundColor: '#B0E0E6',
    width: 20,
    height: 20,
    border: '1px solid white',
  },

  root: {
    marginTop: theme.spacing(3),
  },

  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    margin: theme.spacing(1),
  },

  paper: {
    marginTop: theme.spacing(3), 
  },
}));

export default useStyles;
