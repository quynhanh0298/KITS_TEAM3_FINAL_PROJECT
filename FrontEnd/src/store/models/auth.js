export const auth = {
  state: {
    isAuthenticated: false,
    roleId: 0,
    jwt: "",
  },
  reducers: {
    SET_AUTH: (state, payload) => {
      return {
        ...state,
        isAuthenticated: payload.auth,
        roleId: payload.roleId,
        jwt: payload.jwt,
      };
    },
  },
  effects: (dispatch) => ({
    async login(username, password) {
      let response = await fetch("https://-/api/v1/login");
      let { data } = await response.json();
      dispatch.auth.SET_AUTH(data);
    },
    async logout() {
      let response = await fetch("https://-/api/v1/logout");
      let { data } = await response.json();
      dispatch.auth.SET_AUTH(data);
    },
    async signup(fullName, email, password) {
      let response = await fetch("https://-/api/v1/signup");
      let { data } = await response.json();
      dispatch.auth.SET_AUTH(data);
    },
  }),
};
