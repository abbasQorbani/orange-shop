export const AdListReducer = (
  adListState = {
    loading: false,
    adList: [],
    error: "",
  },
  { type, payload }
) => {
  switch (type) {
    case 'ad-list-loading':
      return payload;
    case 'ad-list-fetched':
      return payload;
    case 'ad-list-failed':
      return payload;
    default:
      return adListState;
  }
};
