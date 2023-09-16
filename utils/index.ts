
import { CarProps, FilterProps } from "@/types";

const API_KEY = '1e9e26f426mshd4b6b8ee85afb71p1e8327jsn5844bebe0449';
const API_HOST = 'cars-by-api-ninjas.p.rapidapi.com';

export async function fetchCars(filters: FilterProps): Promise<any> {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export const calculateCarRent = (city_mpg: number, year: number): string => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (
  { make, year, model }: CarProps,
  angle?: string
): string => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle || ''}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string): string => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
