import { useDispatch, useSelector } from "react-redux";

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const IS_LOADING_TRUE = "IS_LOADING_TRUE";
export const IS_LOADING_FALSE = "IS_LOADING_FALSE";
export const HAS_ERROR_TRUE = "HAS_ERROR_TRUE";
export const HAS_ERROR_FALSE = "HAS_ERROR_FALSE";
export const SAVE_INPUT = "SAVE_INPUT";
export const RESET_INPUT = "RESET_INPUT";
export const SAVE_QUERY_DATA = "SAVE_QUERY_DATA";
export const ADD_HOMECARD_DATA_ROCK = "ADD_HOMECARD_DATA_ROCK";
export const ADD_HOMECARD_DATA_POP = "ADD_HOMECARD_DATA_POP";
export const ADD_HOMECARD_DATA_HIPHOP = "ADD_HOMECARD_DATA_HIPHOP";
export const RESET_HOMECARD_DATA = "RESET_HOMECARD_DATA";

export const addToFavoritesAction = companyName => ({
  type: ADD_TO_FAVOURITE,
  payload: companyName,
});

export const removeFromFavoritesAction = companyName => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName,
});

export const isLoadingTrueAction = () => ({
  type: IS_LOADING_TRUE,
  payload: true,
});

export const isLoadingFalseAction = () => ({
  type: IS_LOADING_FALSE,
  payload: false,
});

export const HasErrorTrueAction = () => ({
  type: HAS_ERROR_TRUE,
  payload: true,
});

export const HasErrorFalseAction = () => ({
  type: HAS_ERROR_FALSE,
  payload: false,
});

export const SaveInputAction = e => ({
  type: SAVE_INPUT,
  payload: e.target.value,
});

export const ResetInputAction = () => ({
  type: RESET_INPUT,
  payload: "",
});

export const SaveQueryDataAction = data => ({
  type: SAVE_QUERY_DATA,
  payload: data,
});

export const AddHomecardDataRockAction = data => ({
  type: ADD_HOMECARD_DATA_ROCK,
  payload: data,
});

export const AddHomecardDataPopAction = data => ({
  type: ADD_HOMECARD_DATA_POP,
  payload: data,
});

export const AddHomecardDataHipHopAction = data => ({
  type: ADD_HOMECARD_DATA_HIPHOP,
  payload: data,
});

export const ResetHomecardDataAction = () => ({
  type: RESET_HOMECARD_DATA,
  payload: [],
});

export const FetchQuery = async () => {
  const query = useSelector(state => state.input);

  if (query.length > 2) {
    //if there's a value in the search box => fetch the information from rapidapi & display the result
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query, {
        method: "GET",
      }); // gets the information

      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songs = result.data; // gets the songs info
        SaveQueryDataAction(songs);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export const fetchArtist = async (artistName, selector) => {
  // artistName = "eminem", "metallica", etc...
  // domQuerySelector = "#rockSection" etc...
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
      method: "GET",
    }); // gets the information
    if (response.ok) {
      let result = await response.json(); // transforms the response to json
      let songInfo = result.data;
      if (selector === "rock") addHomecardDataRockAction(songInfo);
      else if (selector === "pop") AddHomecardDataPopAction(songInfo);
      else if (selector === "hiphop") AddHomecardDataHipHopAction(songInfo);
    } else {
      console.log("error");
    }
  } catch (err) {
    console.log(err);
  }
};

/* export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: IS_LOADING_TRUE });
      dispatch({ type: HAS_ERROR_FALSE });
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();

        //   setJobs(data);
        dispatch({ type: GET_JOBS, payload: data });
        console.log("DATA", data);
      } else {
        dispatch({ type: HAS_ERROR_TRUE });
        alert("Error fetching results");
      }
    } catch (error) {
      dispatch({ type: HAS_ERROR_TRUE });
      console.log(error);
    } finally {
      dispatch({ type: IS_LOADING_FALSE });
    }
  };
};*/
