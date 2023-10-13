import axios from "axios";
const getApi = () => {
  axios.get("http://localhost:5010/producto", {
    header: {
      "Accept-version": "1.0.0",
    },
  });
};

