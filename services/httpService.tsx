import axios from "axios";
// import toast from "react-hot-toast";

axios.defaults.baseURL = "/";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

// axios.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = token;
//   } else {
//     delete config.headers.Authorization;
//   }

//   return config;
// });

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    console.log("======>error", error);
    // if (error.response.status == 429) toast.error(error?.response.data);
    // if (error.response.status == 404) toast.error(error?.response.data);
    // else toast.error(error?.response.data?.message);

    // if (error.response.status === 401) {
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("currentUser");
    //   window.location.replace("/auth/login");
    // }
    // return Promise.reject(error.response);
  },
);

export default http;
