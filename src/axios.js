import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-new-test-fcc84.cloudfunctions.net",
});
export default instance;
