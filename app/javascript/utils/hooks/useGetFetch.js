import { useState, useEffect } from "react";
import { fetchApi } from "../fetchApi";

export function useGetFetch({ url }) {
  const [data, setData] = useState({
    data: [],
    isLoading: true,
    response: {},
  });
  const handleSetData = ({ data, isLoading, response }) => {
    setData({ data, isLoading, response });
  };
  const controller = new AbortController();
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
    signal: controller.signal,
  };

  useEffect(() => {
    fetchApi(url, handleSetData, controller, params);

    return () => {
      controller.abort();
    };
  }, []);

  return data;
}
