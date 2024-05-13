<p align="center"> <a href="#"> <img width=200 src="https://cdn.discordapp.com/attachments/1199815589787598949/1201622019939250216/IMG_0831.jpg?ex=66431df6&is=6641cc76&hm=de5c6e7e6c351a80fd3c52a987bef6d4dd3d7fbcfd6116af77e43213658f8ff8&"></a></p> 


# Links :
### 📂 [NPM](https://www.npmjs.com/package/chatai))
### 📖 [Document's](https://adem-2.gitbook.io/chatai/)
### 📝 [Github]((https://github.com/ademjs/chatai)

# How to install :
-  Installation For CLI:
```bash
npm i chatai -g
```
- Installation:

```bash
npm i chatai
```

# How to use:
```js
const { ChatAi } = require('chatai');

const chat = new ChatAi(); 


chat.question({
  /* Available Models */
  /* "v3" , "v3-32k" , "turbo" , "turbo-16k" , "gemini" */
     model:"v3",


     content:"Hello , How are you?"

}).then(response => {

console.log(response.reply);


});
```

