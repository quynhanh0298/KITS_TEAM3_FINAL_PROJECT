export const categories = {
  state: {
    categories: [],
  },
  reducers: {
    SET_CATEGORIES: (state, payload) => {
      return {
        ...state,
        categories: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getCategories() {
      let response = await fetch("https://-/api/v1/categories");
      let { data } = await response.json();
      dispatch.categories.SET_CATEGORIES(data);
    },
  }),
};
