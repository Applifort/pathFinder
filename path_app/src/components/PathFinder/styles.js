import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  info: {
    Width: 1000,
    marginTop: theme.spacing(1),
  },

  grid: {
    backgroundColor: '#B0E0E6',
    width: 20,
    height: 20,
    border: '1px solid white',
  },

  // visitedGrid: {
  //   backgroundColor: '#008B8B',
  //   width: 20,
  //   height: 20,
  //   border: '1px solid white',
  // },

  wallPoint: {
    backgroundColor: '#483D8B',
    width: 20,
    height: 20,
    border: '1px solid white',
  },

  startPoint: {
    backgroundColor: '#F4A460',
    width: 20,
    height: 20,
    border: '1px solid white',
  },

  finishPoint: {
    backgroundColor: '#A52A2A',
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
    marginTop: theme.spacing(2), 
  },
}));

export default useStyles;
