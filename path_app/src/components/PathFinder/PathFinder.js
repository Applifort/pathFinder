import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import useStyles from './styles'

const PathFinder = () => {
  const classes = useStyles();
  const spaceWidth = 30;
  const spaceHeight = 30;

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

  const grids = generateRows(spaceWidth, spaceHeight);

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
      <Button variant="contained" className={classes.buttons}>Set start point</Button>
      <Button variant="contained" className={classes.buttons}>Set finish point</Button>
      <Button variant="contained" className={classes.buttons} disabled>Build wall</Button>
      <Button variant="contained" className={classes.buttons} color='primary'>Find path</Button>
      </div>
      {grids}
    </div>
  )
}

export default PathFinder;