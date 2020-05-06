import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';

import { setMode, pathSelector, setVisited, clear, setStartPoint, setFinishPoint, setWallPoint } from '../../store/pathReducer';
import finder from '../../utils/Finder';

import useStyles from './styles'

const PathFinder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { width, height, mode, startPoint, finishPoint, wall, visited } = useSelector(pathSelector);
  
  console.log(visited);

  useEffect(() => {
  }, []);

  const handleClickStart = () => {
    if (mode === 'working') return;
    dispatch(setMode('start'));
  }

  const handleClickFinish = () => {
    if (mode === 'working') return;
    dispatch(setMode('finish'));
  }

  const handleClickRun = () => {
    dispatch(setMode('working'));
    const { visited } = finder({ width, height }, startPoint, finishPoint);
    dispatch(setVisited(visited));
  }

  const handleClickClear = () => {
    dispatch(setMode(null));
    dispatch(clear());
  }

  const handleClickBuildWall = () => {
    dispatch(setMode('building'));
  }

  const handleClickPoint = (e) => {
    const id = e.target.id;
    switch (mode) {
      case 'start':
        dispatch(setStartPoint(id));
        break;
      case 'finish':
        dispatch(setFinishPoint(id));
        break;
      case 'building':
        dispatch(setWallPoint(id));
        return;
      default: break;
    };
    dispatch(setMode(null));
  }

  const getStyleForVisitedPoints = (id) => {
    if (visited.includes(id)) {
      const delayStep = 0.1;
      const delayTime = visited.indexOf(id) * delayStep * 0.2;
      return { animationDelay: `${delayTime}s` }
    }
  };

  const generateColumns = (currentRow, columns) => {
    const columnsGrids = [];
    for (let i = 0; i < columns; i += 1) {
      const id = `${currentRow}:${i}`;
      let currentClass = classes.grid;

      if (visited.includes(id)) {
        currentClass = 'visitedGrid';
      }

      if (id === startPoint) {
        currentClass = classes.startPoint;
      }

      if (id === finishPoint) {
        currentClass = classes.finishPoint;
      }

      if (wall.includes(id)) {
        currentClass = classes.wallPoint;
      }

      columnsGrids.push(<Grid id={id} item className={currentClass} style={getStyleForVisitedPoints(id)}  onClick={handleClickPoint}></Grid> )
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
      rowsGrids.push( 
        <Grid 
          d={i}
          container
          direction='row'
          justify="center"
          alignItems="center">
        {generateColumns(i, columns)}
        </Grid>
      )
    }

   return (
      <Grid className={classes.paper}
      >{rowsGrids}
      </Grid>
    );
  }

  const grids = generateRows(width, height);

  const getInfo = () => {
    switch (mode) {
      case 'start':
        return 'Choose any point on the court and click to set Start point';
      case 'finish':
        return 'Choose any point on the court and click to set Finish point';
      case 'working':
        return 'Click CLEAR SPACE to start new';
      default: 
        return "Click FIND PATH and see what happens! That's magic!";
    };
  }

  const info = getInfo();

  return (
    
    <div className={classes.root}>
      <div className={classes.menu}>
        <Button variant="contained" className={classes.buttons} onClick={handleClickStart}>Set start point</Button>
        <Button variant="contained" className={classes.buttons} onClick={handleClickFinish}>Set finish point</Button>
        <Button variant="contained" className={classes.buttons} onClick={handleClickBuildWall}>Build wall</Button>
        <Button variant="contained" className={classes.buttons} color='primary' onClick={handleClickRun}>Find path</Button>
        <Button variant="contained" className={classes.buttons} color='secondary' onClick={handleClickClear}>Clear space</Button>
      </div>
      <div className={classes.menu}>
        <Alert severity={mode === null ? "success" : "info"} className={classes.info}>
          {info}
        </Alert>
      </div>
      {grids}
    </div>
  )
}

export default PathFinder;