# Pawan OpenAi

## Requirements

- An API key
To use ChatGPT hosted by Pawan, you can use the following steps:
  1. Join the [Discord](https://discord.pawan.krd) server.
  2. Get your API key from the `#Bot` channel by sending `/key` command.
- You must define the base path to use the API in the configuration. The base path is `https://api.pawan.krd/v1`.
### Installation

```bash
npm install pawan-openai
```

### Usage (See [OpenAI API Docs](https://github.com/openai/openai-node)) for more details.

```js
const {OpenAIApi, Configuration} = require('pawan-openai');

const configuration = new Configuration({
	"apiKey": YOUR_PAWAN_API_KEY,
	"basePath": "https://api.pawan.krd/v1"
});

const openai = new OpenAIApi(configuration);

openai.completions.create({
    engine: 'davinci',
    prompt: 'This is a test'
}).then(console.log).catch(console.error);
```


## License
MIT