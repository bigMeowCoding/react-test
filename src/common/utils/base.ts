export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  // console.log("value", max-min,Math.random() * (max - min));
  return Math.round(Math.random() * (max - min) + min); // 不含最大值，含最小值
}
