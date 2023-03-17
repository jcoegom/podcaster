import { useEffect, useState } from "react";
import axios from "axios";
import { handleErrors } from "../utils/errors";

const defaultState = {
  loading: false,
  error: null,
  result: null,
};

const useQueryData = (url, enableQuery = true) => {
  const [state, setState] = useState(defaultState);

  const getData = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    try {
      let result = await axios.get(url);
      setState({ loading: false, result: result.data, error: null });
    } catch (err) {
      handleErrors(err);
      setState({
        loading: false,
        result: null,
        error: "An error has ocurred!!",
      });
    }
  };

  useEffect(() => {
    if (!enableQuery) {
      setState(defaultState);
      return;
    }
    getData();
  }, [url, enableQuery]);

  return [state.loading, state.error, state.result];
};

export default useQueryData;
