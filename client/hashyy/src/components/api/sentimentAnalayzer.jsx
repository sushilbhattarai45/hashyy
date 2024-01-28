import React from "react";
import axios from "axios";

async function SentimentAnalayzer() {
  const options = {
    method: "POST",
    url: "https://sentiment-analysis9.p.rapidapi.com/sentiment",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      "X-RapidAPI-Key": "699ea8e4admsha947a620bc04ad1p16131ajsncd08755dae31",
      "X-RapidAPI-Host": "sentiment-analysis9.p.rapidapi.com",
    },
    data: [
      {
        id: "1",
        language: "en",
        text: "I thing it could be more effective and great but nevertheless it is not good though ",
      },
    ],
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
