import { useState, useEffect } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    setLoading(true); // Set loading to true before fetching data
    setError(null);
    setData(null);


    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if(response.ok) {
            const jsonData = await response.json()
            setData(jsonData.articles)
        } else {
            throw new Error('Failed to fetch data')
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error, setData, setLoading, setError };
}
