const { default: axios } = require("axios");

const { Articles } = require("../models/models");

const API_NEWS = process.env.API_NEWS;

const instance = axios.create({
  baseURL: API_NEWS,
});

const uploadArticlesApi = async () => {
  try {
    const result = await instance.get();

    if (!result.data || result.data === undefined) {
      return;
    }

    console.log("result.data", result.data);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = uploadArticlesApi;
