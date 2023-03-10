export const useCapital = () => {
  const changeFirstLetterToCapital = (string) => {
    if (string === "n/a" || typeof string !== "string") {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return [changeFirstLetterToCapital];
};
