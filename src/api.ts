const API_URL = "https://api.openbrewerydb.org/v1/breweries";

export const fetchBreweries = async (
  page: number,
  perPage: number,
  query?: string
) => {
  let url = `${API_URL}`;
  if (query) {
    url += `/search&query=${query}`;
  }
  url += `?page=${page}&per_page=${perPage}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};
