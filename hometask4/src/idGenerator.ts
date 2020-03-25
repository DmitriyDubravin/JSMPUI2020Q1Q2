export default (() => {
  let instance;
  let counter = 0;

  if (!instance) {
    instance = {
      generate() {
        counter++;
        return counter;
      }
    };
  }
  return instance;
})();
