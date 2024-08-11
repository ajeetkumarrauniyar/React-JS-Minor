import { useState, useEffect } from "react-dom";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  const BASE_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
