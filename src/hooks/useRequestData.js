import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (url, headers, initialState) => {
  const [data, setData] = useState(initialState);

  const getData = () => {
    axios
      .get(url, headers)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, getData };
};

export default useRequestData;
