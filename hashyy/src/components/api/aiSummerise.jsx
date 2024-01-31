import React, { useState, useEffect } from "react";
import axios from "axios";
export default async function AiSummerise(text) {
  const options = {
    method: "POST",
    url: "https://chatgpt-gpt-3-5.p.rapidapi.com/ask",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "699ea8e4admsha947a620bc04ad1p16131ajsncd08755dae31",
      "X-RapidAPI-Host": "chatgpt-gpt-3-5.p.rapidapi.com",
    },
    data: {
      query:
        "Hey can you do this task for me, please. Summerize this blog  in not more 70 words but not more than 80 words. Dont answer anything rather than the beautifuyl summary itself. No links too :" +
        text,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.response;
  } catch (error) {
    console.error(error);
  }
}
