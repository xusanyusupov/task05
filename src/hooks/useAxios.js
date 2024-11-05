import { useState, useEffect } from "react";
import axios from "../api";

export const useAxios = (path, params = {}, dep = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(path, { params })
      .then((res) => setData(res.data))
      .catch((err) => setError(err));
  }, [...dep]);
  return { data, error };
};
