export const stringWithoutSpace = (str: string = "") => {
  const result = str.split(" ").join("").toLowerCase();
  return result;
};