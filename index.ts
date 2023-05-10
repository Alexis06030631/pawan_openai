import "./checkUpdate"
import * as openAi from "openai";
import axios, {AxiosRequestConfig} from "axios";
import {
	CreateAnswerRequest,
	CreateChatCompletionRequest,
	CreateClassificationRequest,
	CreateCompletionRequest,
	CreateEditRequest,
	CreateEmbeddingRequest,
	CreateFineTuneRequest,
	CreateImageRequest,
	CreateModerationRequest, CreateSearchRequest
} from "openai/api";

const codes = {
	invalid_ip: 'Your API key is not allowed to be used from this IP address'
}

class PawanOpenai extends openAi.OpenAIApi {
	constructor(configuration: openAi.Configuration) {
		super(configuration);
	}

	// @ts-ignore
	cancelFineTune(fineTuneId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('cancelFineTune', fineTuneId, options);
	}

	// @ts-ignore
	createAnswer(createAnswerRequest: CreateAnswerRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createAnswer', createAnswerRequest, options);
	}

	// @ts-ignore
	createChatCompletion(createChatCompletionRequest: CreateChatCompletionRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createChatCompletion', createChatCompletionRequest, options);
	}

	// @ts-ignore
	createClassification(createClassificationRequest: CreateClassificationRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createClassification', createClassificationRequest, options);
	}

	// @ts-ignore
	createCompletion(createCompletionRequest: CreateCompletionRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createCompletion', createCompletionRequest, options);
	}

	// @ts-ignore
	createEdit(createEditRequest: CreateEditRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createEdit', createEditRequest, options);
	}

	// @ts-ignore
	createEmbedding(createEmbeddingRequest: CreateEmbeddingRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createEmbedding', createEmbeddingRequest, options);
	}

	// @ts-ignore
	createFile(file: File, purpose: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createFile', file, purpose, options);
	}

	// @ts-ignore
	createFineTune(createFineTuneRequest: CreateFineTuneRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createFineTune', createFineTuneRequest, options);
	}

	// @ts-ignore
	createImage(createImageRequest: CreateImageRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createImage', createImageRequest, options);
	}

	// @ts-ignore
	createImageEdit(image: File, prompt: string, mask?: File, n?: number, size?: string, responseFormat?: string, user?: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createImageEdit', image, prompt, mask, n, size, responseFormat, user, options);
	}

	// @ts-ignore
	createImageVariation(image: File, n?: number, size?: string, responseFormat?: string, user?: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createImageVariation', image, n, size, responseFormat, user, options);
	}

	// @ts-ignore
	createModeration(createModerationRequest: CreateModerationRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createModeration', createModerationRequest, options);
	}

	// @ts-ignore
	createSearch(engineId: string, createSearchRequest: CreateSearchRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createSearch', engineId, createSearchRequest, options);
	}

	// @ts-ignore
	createTranscription(file: File, model: string, prompt?: string, responseFormat?: string, temperature?: number, language?: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createTranscription', file, model, prompt, responseFormat, temperature, language, options);
	}

	// @ts-ignore
	createTranslation(file: File, model: string, prompt?: string, responseFormat?: string, temperature?: number, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('createTranslation', file, model, prompt, responseFormat, temperature, options);
	}

	// @ts-ignore
	deleteFile(fileId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('deleteFile', fileId, options);
	}

	// @ts-ignore
	deleteModel(model: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('deleteModel', model, options);
	}

	// @ts-ignore
	downloadFile(fileId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('downloadFile', fileId, options);
	}

	// @ts-ignore
	listEngines(options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('listEngines', options);
	}

	// @ts-ignore
	listFiles(options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('listFiles', options);
	}

	// @ts-ignore
	listFineTuneEvents(fineTuneId: string, stream?: boolean, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('listFineTuneEvents', fineTuneId, stream, options);
	}

	// @ts-ignore
	listFineTunes(options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('listFineTunes', options);
	}

	// @ts-ignore
	listModels(options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('listModels', options);
	}

	// @ts-ignore
	retrieveEngine(engineId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('retrieveEngine', engineId, options);
	}

	// @ts-ignore
	retrieveFile(fileId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('retrieveFile', fileId, options);
	}

	// @ts-ignore
	retrieveFineTune(fineTuneId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('retrieveFineTune', fineTuneId, options);
	}

	// @ts-ignore
	retrieveModel(model: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.MakeRequest('retrieveModel', model, options);
	}


	async MakeRequest(method:string, ...params: any[]) {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			this.CheckError(super[method](...params)).then((response) => {
				resolve(response);
			}).catch((error) => {
				if(error.isIpError) resolve(this.MakeRequest(method, ...params));
				else reject(error);
			})
		})
	}

	/**
	 * Checks if the error is an invalid IP error and resets the IP if it is
	 * @param promise The promise to check
	 * @constructor
	 */
	async CheckError(promise: Promise<any>) {
		return new Promise((resolve, reject) => {
			promise.then((response) => {
				resolve(response);
			}).catch((error) => {
				error.isIpError = false;
				if(error.response.data.error.message.includes(codes.invalid_ip)) {
					this.authNewIp().then(_=>{
						error.isIpError = true;
						reject(error)
					}).catch((error) => {
						reject(error);
					})
				} else reject(error);
			});
		})
	}

	/**
	 * Resets the IP address for your API key
	 * @returns {Promise<boolean>}
	 */
	async authNewIp() {
		return new Promise((resolve, reject) => {
			axios.post(this.configuration.basePath.replace(/v\d+/, "") + '/resetip', {}, this.configuration.baseOptions).then((response) => {
				if(response.data.status) resolve(true);
				else reject(response.data.status)
			})
		})
	}
}


// Export OpenAIApi class
export {PawanOpenai as OpenAIApi};
export {Configuration} from "openai";