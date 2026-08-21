import type { Car } from "./types";

const BASE_URL = "http://127.0.0.1:3000";

export async function getCars(): Promise<Car[]> {
  const response = await fetch(`${BASE_URL}/garage`);
  const cars: Car[] = await response.json();
  return cars;
}
