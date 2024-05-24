// In utils/fetchDataWithReactQuery.ts
import { MY_URL } from "../lib/config";

export const fetchDataWithReactQuery = async (path) => {
  const response = await fetch(`${MY_URL}${path}`, {
    headers: {
      'auth': 'BLkPz1SnQsg8GMhqGRsN'
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
