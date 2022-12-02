export default function authHeader() {
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr) {
    user = JSON.parse(userStr);
  }
  if (user) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return { Authorization: "" };
  }
}
