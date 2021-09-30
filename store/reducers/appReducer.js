import { DUMMYBOOTHS } from "../../data/dummyData";

const initialState = {
  booths: { DUMMYBOOTHS },
  speakers: [],
  schedule: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOTHSLOADED":
      return {
        ...state,
        booths: action.payload,
      };
    case "SPEAKERSLOADED":
      return {
        ...state,
        speakers: action.payload,
      };
    case "SCHEDULELOADED":
      return {
        ...state,
        schedule: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
