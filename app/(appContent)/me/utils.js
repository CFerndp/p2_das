export const getUserMe = async () => {
  const token = localStorage.getItem("token-jwt");
  if (!token) {
    return null;
  }

  const response = await fetch(
    "https://das-p2-backend.onrender.com/api/users/profile/",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
  const data = await response.json();
  return data;
};
