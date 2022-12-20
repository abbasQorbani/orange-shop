import axios from "axios";
export const GetAdList = () => async (dispatch, getState) => {
    dispatch({
      type: 'ad-list-loading',
      payload: { loading: true, adList: [], error: "" },
    });
    await axios.get(`http://kzico.runflare.run/product`)
    .then(rexponse => {
        dispatch({
          type: 'ad-list-fetched',
          payload: { loading: false, adList: rexponse.data, error: "" },
        });
    })
    .catch(error => {
        dispatch({
          type: 'ad-list-failed',
          payload: { loading: false, adList: [], error: error.message },
        });
    })
};
