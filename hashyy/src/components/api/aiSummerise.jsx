import React, { useState, useEffect } from "react";
import axios from "axios";
export default async function AiSummerise(text) {
  const options = {
    method: "POST",
    url: import.meta.env.VITE_AI_SUMMERIZATION_API_URL,
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_AI_SUMMERIZATION_X_RapidAPI_Key,
      "X-RapidAPI-Host": import.meta.env.VITE_AI_SUMMERIZATION_X_RapidAPI_Host,
    },
    data: {
      query:
        "Hey can you do this task for me, please. Summerize this blog  in not less than 70 words but not more than 90 words. Word limit is strictly 100 words. Dont answer anything rather than the beautifull summary itself. No links too :" +
        text,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response);
    return response.data.response;
  } catch (error) {
    console.error(error);
  }
}
