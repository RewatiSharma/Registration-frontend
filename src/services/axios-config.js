import axios from "axios";

// let baseURL = "http://localhost:2024";
let baseURL = "https://registration-backend-oxtu.onrender.com";

const publicReq=axios.create({baseURL,});

const privateReq=axios.create({baseURL,});

export {publicReq,privateReq};