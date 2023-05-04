const openAi = require("openai");
const axios = require("axios");

const codes = {
	"invalid_ip": 'Your API key is not allowed to be used from this IP address'
}

class OpenAiApi extends openAi.OpenAIApi {
	constructor(configuration) {
		super(configuration);
	}

	async createCompletion(parameters) {
		return new Promise((resolve, reject) => {
			super.createCompletion(parameters).then((response) => {
				resolve(response);
			}).catch((error) => {
				if(error.response.data.error.message.includes(codes.invalid_ip)) {
					this.authNewIp().then(_=>{
						resolve(super.createCompletion(parameters))
					}).catch((error) => {
						reject(error);
					})
				} else reject(error);
			});
		})
	}

	async authNewIp() {
		return new Promise((resolve, reject) => {
			axios.post(this.configuration.basePath.replace(/v\d+/, "") + '/resetip', {}, this.configuration.baseOptions).then((response) => {
				if(response.data.status) resolve();
				else reject(response.data.status)
			})
		})
	}
}

exports.OpenAIApi = OpenAiApi;
exports.Configuration = openAi.Configuration;