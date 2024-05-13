"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios').default;
const baseurl = "https://hercai.onrender.com/v3/hercai";

class ChatAi {
    constructor(apiKey="") {
        if(apiKey == undefined || apiKey == null || apiKey == "" || typeof apiKey !== "string") this.apiKey = "";
        this.apiKey = apiKey;
    }

    async question({model = "v3", content, personality=""}) {
        if(!["v3","gemini","v3-32k","turbo","turbo-16k"].some(ind => model == ind)) model = "v3";
        if(!content || content == undefined || content == null) throw new Error("Please specify a question!");
        try {
            var api = await axios.get(`https://hercai.onrender.com/${model}/hercai?question=`+encodeURI(content), {
                headers: {
                    "content-type": "application/json",
                    "Authorization": this.apiKey,
                },
                data: {
                    personality: personality
                }
            });
            return api.data;
        } catch(err) {
            throw new Error("Error: "+ err.message);   
        }
    }
}

module.exports = { ChatAi };
