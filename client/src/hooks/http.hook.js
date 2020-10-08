import { useState, useCallback } from "react";

export const useHttp = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method, body, headers) => {
    headers = {
      ...headers,
      Accept: "application/json",
      "content-type": "application/json",
    };
    // setLoading(true)
    try {
      body && (body = JSON.stringify(body));

      const response = await fetch(url, { method, body, headers });
      const data = await response.json();
      // if(!response.ok) return {
      //     message: 'Что то пошло не так'
      // }
      // setLoading(false)
      return data;
    } catch (e) {
      // setLoading(false)
      // setError(e.message)
      console.log("ERRRRRRRRRR");
      throw e;
    }
  }, []);
  return { request, loading, error };
};
