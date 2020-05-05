import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import useStyles from './styles'
import { setMode } from '../../store/pathReducer';
import store from '../../store';
import finder from '../../utils/Finder';

const PathFinder = () => {
  const { path } = store.getState();
  const { width, height, mode, startPoint, finishPoint } = path;

  const { visited, foundPath } = finder({ width, height }, startPoint, finishPoint);
  console.log(foundPath);

  const classes = useStyles();

  const handleClickStart = (e) => {
    store.dispatch(setMode('start'));
  }

  const handleClickFinish = (e) => {
    store.dispatch(setMode('finish'));
  }

  const handleClickRun = (e) => {
    // 
  }

  const generateColumns = (currentRow, columns) => {
    const columnsGrids = [];
    for (let i = 0; i < columns; i += 1) {
      columnsGrids.push(<Grid id={`${currentRow}:${i}`} item className={classes.grid}></Grid> )
    };

    return (
      <React.Fragment>
        {columnsGrids}
      </React.Fragment>
    );
  }
  
  const generateRows = (rows, columns) => {
    const rowsGrids = [];
    for (let i = 0; i < rows; i += 1) {
      rowsGrids.push( <Grid id={i}>{generateColumns(i, columns)}</Grid>)
    }
 
   return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.paper}
      >{rowsGrids}
      </Grid>
    );
  }

  const grids = generateRows(width, height);

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
      <Button variant="contained" className={classes.buttons} onClick={handleClickStart}>Set start point</Button>
      <Button variant="contained" className={classes.buttons} onClick={handleClickFinish}>Set finish point</Button>
      <Button variant="contained" className={classes.buttons} disabled>Build wall</Button>
      <Button variant="contained" className={classes.buttons} color='primary' onClick={handleClickRun}>Find path</Button>
      </div>
      {grids}
    </div>
  )
}

export default PathFinder;