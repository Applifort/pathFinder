import gridGenerator from './gridGenerator';

const findPath = (set, start, finish) => {
  const { height, width } = set;
  const grid = gridGenerator(width, height);

  const bfs = (start, finish) => {
    const queue = [start];
    const visited = [];
    const foundPath = {};
    let result = false;
    
    const iter = () => {
      if (queue.length === 0) {
        const data = { visited, foundPath, result }
        return data;
      };
  
      const checkingVertex = queue.shift();
      if (checkingVertex === finish) {
        result = true;
        // return
      };
      
      visited.push(checkingVertex);
      grid[checkingVertex].forEach((vertex) => {
        const processVertex = Object.keys(vertex)[0];
        if (visited.includes(processVertex)) return;
        foundPath[processVertex] = checkingVertex;
        queue.push(processVertex);
      });
      return iter();
    };
    return iter();
  };

  return bfs(start, finish);
};

export default findPath;