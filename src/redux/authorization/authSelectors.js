export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.user.name;
export const getRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getRefreshing,
};

export default authSelectors;