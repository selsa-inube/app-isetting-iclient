const addLeadingZero = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

export { addLeadingZero };
