import axios from "axios";

export const baseURL = "https://gominzipsession.o-r.kr";

export const getPerPage = async (page) => {
  const response = await axios.get(`${baseURL}/lionlist?page=${page}`);
  console.log(response);
  console.log(response.data);
  return response.data;
};

export const getGenderUser = async (gender) => {
  const response = await axios.get(`${baseURL}/lionlist?gender=${gender}`);
  console.log(response);
  console.log(response.data);
  return response.data;
};

export const getPartUser = async (part) => {
  const response = await axios.get(`${baseURL}/lionlist?part=${part}`);
  console.log(response);
  console.log(response.data);
  return response.data;
};
