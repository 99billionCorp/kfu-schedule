import { useState, useCallback } from "react"

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method, body, headers) => {
    headers = {
      ...headers,
      Accept: "application/json",
      "content-type": "application/json",
    }
    try {
      body && (body = JSON.stringify(body))
      const response = await fetch(url, { method, body, headers })
      const data = await response.json()
      return data
    } catch (e) {
      console.log("ERRRRRRRRRR")
      throw e
    }
  }, [])
  return { request, loading, error }
};
