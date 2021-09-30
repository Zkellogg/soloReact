export const fetchBooths = () => {
  return (dispatch) => {
    fetch("https://localhost:8080/allbooths")
      .then((response) => response.json())
      .then((boths) => {
        dispatch({ type: "BOOTHLOADED", payload: booths });
      });
  };
};
