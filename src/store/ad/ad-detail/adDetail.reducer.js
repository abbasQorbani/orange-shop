export const AdDetailReducer = (
  adDetailState = {
    loading: false,
    adDetail: {},
    error: "",
  },
  { type, payload }
) => {
  switch (type) {
    case 'ad-detail-loading':
      return payload;
    case 'ad-detail-fetched':
      return payload;
    case 'ad-detail-failed':
      return payload;
    default:
      return adDetailState;
  }
};
