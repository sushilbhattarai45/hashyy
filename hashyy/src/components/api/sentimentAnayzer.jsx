import React, { useState } from "react";
import axios from "axios";

export default async function Sentiments(data) {
  let [sentiments] = [
    {
      positive: 0,
      negative: 0,
      neutral: 0,
    },
  ];
  let commentsSegregated = [
    {
      positive: [],
      negative: [],
      neutral: [],
    },
  ];
  data.map(async (item) => {
    const options = {
      method: "POST",
      url: "https://sentiment-analysis9.p.rapidapi.com/sentiment",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "X-RapidAPI-Key": "e562bb25b0msh1aefa205d9a60ecp1267d1jsn87a941f095f9",
        "X-RapidAPI-Host": "sentiment-analysis9.p.rapidapi.com",
      },
      data: [
        {
          id: "1",
          language: "en",
          text: item.node.content.markdown,
        },
      ],
    };

    try {
      const response = await axios.request(options);
      if (response.data[0].predictions[0].prediction === "positive") {
        sentiments.positive += 1;
        commentsSegregated[0].positive.push(item.node.content.markdown);
      } else if (response.data[0].predictions[0].prediction === "negative") {
        sentiments.negative += 1;
        commentsSegregated[0].negative.push(item.node.content.markdown);
      } else {
        sentiments.neutral += 1;
        commentsSegregated[0].neutral.push(item.node.content.markdown);
      }
    } catch (error) {
      console.error(error);
    }
  });
  return [sentiments, commentsSegregated];
}
