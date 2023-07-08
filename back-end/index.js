// import { Configuration, OpenAIApi } from "openai";
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";

// const app = express();
// const port = 8080;
// app.use(bodyParser.json());
// app.use(cors());

// const configuration = new Configuration({
//   organization: "org-0mY33ZWCMblJDQH9rGOmq6yF",
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// app.post("/", async (request, response) => {
//   const { chats } = request.body;

//   const res = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "system",
//         content: "you are EbereGPT.",
//       },
//       ...chats,
//     ],
//   });
//   response.json({
//        output : result.data.choices[0].message,
//     })
// });

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  organization: "",
  apiKey: "",
});
const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) => {
  const { chats } = request.body;

  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a EbereGPT. You can help with graphic design tasks",
      },
      ...chats,
    ],
  });

  response.json({
    output: result.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
