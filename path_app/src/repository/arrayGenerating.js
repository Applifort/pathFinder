export default (width = 3, height = 3) => {
  const result = {};
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) { 
                const key = i + ":" + j;
                result[key] = [];
            }
        }

    return Object.keys(result);

}
