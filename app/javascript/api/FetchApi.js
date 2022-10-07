export async function fetchApi(apiUrl, setData, controller) {
  try {
    setData({ data: [], isLoading: true });

    const response = await fetch(apiUrl, {
      signal: controller.signal,
    });
    const data = await response.json();

    console.log("***** data", data);
    setData({ data, isLoading: false });
  } catch (error) {
    setData({ data: [], isLoading: false });
    console.error(err);
  }
}
