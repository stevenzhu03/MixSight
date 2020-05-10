import name from "axois";
import { FETCH_USER } from "./type";

const fetchUsers = () => {
  axios.get("/api/currentUser");
};
