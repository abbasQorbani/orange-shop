export const AuthReducer = (
  authState = {
    loading: false,
    userData: userInitState(),
    error: "",
    signedUp: false,
    userAddress: userAddressInitState(),
    profileInfo: {}
  },
  { type, payload }
) => {
  switch (type) {
    case 'update-user-state':
      return payload;
    default:
      return authState;
  }
};

function userInitState() {
  let initState = null
  let storedUser = localStorage.getItem('user')
  if (storedUser) {
    initState = JSON.parse(storedUser)
  }
  return initState
}

function userAddressInitState() {
  let initState = null
  let storedAddress = localStorage.getItem('address')
  if (storedAddress) {
    initState = JSON.parse(storedAddress)
  }
  return initState
}
