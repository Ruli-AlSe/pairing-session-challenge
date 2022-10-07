import { useState, useEffect } from "react";
import { fetchApi } from "../fetchApi";

export function useFetch(url) {
  const [data, setData] = useState({
    data: [],
    isLoading: true,
  });
  const handleSetData = ({ data, isLoading }) => {
    setData({ data, isLoading });
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchApi(url, handleSetData, controller);
    return () => {
      controller.abort();
    };
  }, []);

  return data;
}
