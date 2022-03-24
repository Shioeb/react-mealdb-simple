const getLocalStorageData = () => {
  let storedData = {};
  const isExist = localStorage.getItem("cart");
  if (isExist) {
    storedData = JSON.parse(isExist);
  }
  return storedData;
};
const setLocalStorageData = (id) => {
  let storedData = getLocalStorageData();
  const quantity = storedData[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    storedData[id] = newQuantity;
  } else {
    storedData[id] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(storedData));
};
export { getLocalStorageData, setLocalStorageData };
