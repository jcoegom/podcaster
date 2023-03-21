import React, { useReducer, createContext } from "react";

export const StoreContext = createContext();

const SET_PODCASTS = "setPodcasts";
const SET_PODCAST_DETAILS = "setPodcastDetails";
const SET_SELECTED_POSDCAST = "setSelectedPodcast";
const RESET_SELECTED_PODCAST = "resetSelectedPodcast";

const defaultStore = {
  podcasts: [],
  selectedPodcast: null,
  podcastsValidTo: 0,
  podcastsDetails: {},
};

//reducer
const reducerStore = (state, { type = "", payload = "" }) => {
  switch (type) {
    case SET_PODCASTS:
      const { podcasts, podcastsValidTo } = payload;
      return { ...state, podcasts, podcastsValidTo };

    case SET_PODCAST_DETAILS:
      const { podcast, podcastValidTo, podcastId } = payload;
      return {
        ...state,
        podcastsDetails: {
          ...state.podcastsDetails,
          [podcastId]: { podcast, podcastValidTo },
        },
      };

    case SET_SELECTED_POSDCAST:
      return { ...state, selectedPodcast: payload };

    case RESET_SELECTED_PODCAST:
      return { ...state, selectedPodcast: null };

    default:
      return state;
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
  const setPodcastDetails = ({ podcast, podcastValidTo, podcastId }) => {
    dispatchStore({
      type: SET_PODCAST_DETAILS,
      payload: { podcast, podcastValidTo, podcastId },
    });
  };

  const setSelectedPodcast = (podcast) => {
    dispatchStore({
      type: SET_SELECTED_POSDCAST,
      payload: podcast,
    });
  };

  const resetSelectedPodcast = () => {
    dispatchStore({
      type: RESET_SELECTED_PODCAST,
    });
  };

  return (
    <StoreContext.Provider
      value={[
        store,
        {
          setPodcasts,
          setPodcastDetails,
          setSelectedPodcast,
          resetSelectedPodcast,
        },
      ]}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
