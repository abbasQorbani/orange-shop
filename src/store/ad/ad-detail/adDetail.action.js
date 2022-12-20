import axios from "axios";
export const getAdDetail = (id) => async (dispatch, getState) => {
    dispatch({
      type: 'ad-detail-loading',
      payload: { loading: true, adDetail: [], error: "" },
    });
    await axios.get(`http://kzico.runflare.run/product/` + id)
    .then(rexponse => {
        dispatch({
          type: 'ad-detail-fetched',
          payload: { loading: false, adDetail: rexponse.data, error: "" },
        });
    })
    .catch(error => {
        dispatch({
          type: 'ad-detail-failed',
          payload: { loading: false, adDetail: [], error: error.message },
        });
    })
};
