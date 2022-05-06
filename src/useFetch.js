import React, { useEffect, useState } from "react";

// Essa função está funcionando. Faz todas as requisições certinho
// Dar uma olha em como utilizar ela

export const useFetch = (url) => {
  const [data, setData] = useState("teste");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return {
    data,
  };
};
