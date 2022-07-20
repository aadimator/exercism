const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
export const decodedValue = (arr) => Number('' + COLORS.indexOf(arr[0]) + COLORS.indexOf(arr[1]));
