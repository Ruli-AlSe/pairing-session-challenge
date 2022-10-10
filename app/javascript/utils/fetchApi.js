export async function fetchApi(apiUrl, setData, params) {
  try {
    setData({ data: [], isLoading: true, response: {} });

    const response = await fetch(apiUrl, params);
    const data = await response.json();

    console.log("***** response", response);
    console.log("***** data", data);
    setData({ data, isLoading: false, response });
  } catch (error) {
    setData({ data: [], isLoading: false, response: {} });
    console.error(error);
  }
}
