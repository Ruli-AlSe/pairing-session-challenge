const fetchApi = { 
    get: async (apiUrl, setData, controller) => {
       try {
       const response = await fetch(apiUrl, {
           signal: controller.signal,
       });
       const data = await response.json();

       setData(data);
       } catch (error) {
       setData([]);
       console.error(err);
       }
   }
}

export default fetchApi;