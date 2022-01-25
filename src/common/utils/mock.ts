import MockJs, { Mockjs, S } from "mockjs";
import { getRandomInt } from "./base";

// interface IMockArray {
//   (obj: any, num: number, delay: number): Promise<any[]>;
//   (obj: any, num: number): any[];
// }

// export interface IMock {
//   mock: (obj: any) => any;
//   mockArray: IMockArray;
// }
export function createMockArray(obj: any, count: number): any[] {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(MockJs.mock(obj));
  }
  return arr;
}
export function createRandomMockArray(
  obj: any,
  low: number,
  max: number
): any[] {
  return createMockArray(obj, getRandomInt(low, max));
}
export function createDelayMockValue(time = 3000): Promise<any> {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, time);
  });
}
export class Mock {
  mock(obj: any) {
    return MockJs.mock(obj);
  }
  mockPromise(obj: any, delay?: number) {
    return new Promise((res) => {
      setTimeout(() => {
        res(this.mock(obj));
      }, delay ?? 0);
    });
  }
  mockArray(obj: any, num: number): any[];
  mockArray(obj: any, num: number, delay: number): Promise<any[]>;
  mockArray(obj: any, num: number, delay?: number) {
    const arr = createMockArray(obj, num);
    if (delay) {
      return new Promise<any>((res) => {
        setTimeout(() => {
          res(arr);
        }, delay);
      });
    } else {
      return arr;
    }
  }
}
