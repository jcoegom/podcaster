import React, { useReducer, createContext } from "react";

export const StoreContext = createContext();

const SET_PODCASTS = "setPodcasts";

const defaultStore = {
  podcasts: [],
  podcastsValidTo: 0,
};

//reducer
const reducerStore = (state, { type = "", payload = "" }) => {
  switch (type) {
    case SET_PODCASTS:
      const { podcasts, podcastsValidTo } = payload;
      return { ...state, podcasts, podcastsValidTo };
  }
};

const StoreProvider = (props) => {
  const [store, dispatchStore] = useReducer(reducerStore, defaultStore);

  //action creators
  const setPodcasts = ({ podcasts, podcastsValidTo }) => {
    dispatchStore({
      type: SET_PODCASTS,
      payload: { podcasts, podcastsValidTo },
    });
  };

  return (
    <StoreContext.Provider
      value={[
        store,
        {
          setPodcasts,
        },
      ]}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
