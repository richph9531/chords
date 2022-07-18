export const isArrayEmpty = array => {
  if (array !== undefined && array !== null && array.length > 0) {
    return false;
  } return true;
};

export const dumpLogs = message => {
  console.log(message);
};
