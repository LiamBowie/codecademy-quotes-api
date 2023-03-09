const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getIndexById = (id, elementList) => {
  return elementList.findIndex((element) => {
    return element.id === id;
  });
}

module.exports = {
  getRandomElement,
  getIndexById
};
