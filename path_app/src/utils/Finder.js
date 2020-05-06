import gridGenerator from './gridGenerator';

const findPath = (set, start, finish) => {
  const { height, width } = set;
  const grid = gridGenerator(width, height);

  const bfs = (start, finish) => {
    const queue = [start];
    const visited = [];
    const foundPath = {};
    let result = false;
  
    while (queue.length > 0) {
      const checkingVertex = queue.shift();
      if (checkingVertex === finish) {
        result = true;
        break;
      }
      if (!visited.includes(checkingVertex)) {
        visited.push(checkingVertex);
        grid[checkingVertex].forEach((vertex) => {
          const processVertex = Object.keys(vertex)[0];
          if (visited.includes(processVertex)) return;
          foundPath[processVertex] = checkingVertex;
          queue.push(processVertex);
        });
      };
    }

    return { visited, foundPath, result };
  };

  return bfs(start, finish);
};

export default findPath;