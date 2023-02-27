export const useCapital = () => {
  const changeFirstLetterToCapital = (string) => {
    if (string === "n/a") return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return [changeFirstLetterToCapital];
};
