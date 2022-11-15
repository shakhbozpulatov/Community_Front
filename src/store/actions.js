import axios from "axios";
import router from "../router"

export default {
  getAdminData(context) {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/admins/me", {
        headers: {
          Authorization: token,
          "x-auth-token": token,
        },
      })
      .then((res) => {
        context.commit("SET_ADMINDATA", res.data);
        console.log("admin data: ", res);
      })
      .catch((err) => {
        console.log("actions", err);
        router.push("/login")
      });
  },
};
