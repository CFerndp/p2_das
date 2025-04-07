export const isUserAuth = () => {
  const token = localStorage.getItem("token-jwt");
  return token !== null;
};
