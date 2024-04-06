import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [method, setMethod] = useState("GET");
  const [options, setOptions] = useState({});

  const fetchData = useCallback(async (url, options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createOptions = useCallback((method, data) => {
    const headers = {
      "Content-Type": "application/json",
    };

    if (method === "POST") {
      return {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      };
    } else {
      return {
        method: "GET",
        headers: headers,
      };
    }
  }, []);

  const fetchDataWithMethod = useCallback(
    (url, method, data) => {
      const options = createOptions(method, data);
      setOptions(options);
      fetchData(url, options);
    },
    [fetchData, createOptions]
  );

  return { data, loading, error, fetchData: fetchDataWithMethod };
};

export default useFetch;
