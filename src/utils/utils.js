export const signout = () => {
  localStorage.clear();
  window.location.assign("/");
};
