const createGraph = (width = 3, height = 3) => {
  const result = {};
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) { 
          const key = i + ":" + j;
          result[key] = [];
      }
    }

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          const currentKey = `${i}:${j}`;
          const currentItem = result[currentKey];
          if (j > 0) {
            const upperHeight = j - 1;
            const upperKey = `${i}:${upperHeight}`;
            currentItem.push( { [upperKey]: 1  } );
          }

          if (j < (height - 1)) {
            const lowerHeight = j + 1;
            const lowerKey = `${i}:${lowerHeight}`;
            currentItem.push({ [lowerKey]: 1 });
          }

          if (i > 0) {
            const leftWidth = i - 1;
            const leftKey = `${leftWidth}:${j}`;
            currentItem.push({ [leftKey]: 1});
          }

          if (i < (width - 1)) {
            const rightWidth = i + 1;
            const rightKey = `${rightWidth}:${j}`;
            currentItem.push({ [rightKey]: 1 });
          }
          result[currentKey] = currentItem;
        }
    }
  return result;
}

export default createGraph;
