export const randomNumber = (max = 1) => {
  const randNumber = Math.random();
  const arrayRatio = randNumber * max;
  const lowInteger = Math.floor(arrayRatio);
  
  return lowInteger;
}