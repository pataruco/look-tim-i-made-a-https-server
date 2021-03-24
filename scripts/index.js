const setCustomPropertyValue = (property, value) =>
  document.documentElement.style.setProperty(property, value);

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomColor = () =>
  `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(
    0,
    255,
  )})`;

const getCustomCoordinate = () => `${getRandomInt(0, 100)}%`;

const newProperties = () => {
  setCustomPropertyValue('--top', getCustomCoordinate());
  setCustomPropertyValue('--left', getCustomCoordinate());
  setCustomPropertyValue('--radial-gradient-origin', getRandomColor());
  setCustomPropertyValue('--radial-gradient-end', getRandomColor());
  setCustomPropertyValue('--text-color', getRandomColor());
};

const randomniseProperties = (_event) => {
  setInterval(newProperties, 2000);
};

window.addEventListener('DOMContentLoaded', randomniseProperties);
