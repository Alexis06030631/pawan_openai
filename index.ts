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

class OpenAiApi extends openAi.OpenAIApi {
	constructor(configuration: openAi.Configuration) {
		super(configuration);
	}

	// @ts-ignore
	cancelFineTune(fineTuneId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.cancelFineTune(fineTuneId, options));
	}

	// @ts-ignore
	createAnswer(createAnswerRequest: CreateAnswerRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createAnswer(createAnswerRequest, options));
	}

	// @ts-ignore
	createChatCompletion(createChatCompletionRequest: CreateChatCompletionRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createChatCompletion(createChatCompletionRequest, options));
	}

	// @ts-ignore
	createClassification(createClassificationRequest: CreateClassificationRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createClassification(createClassificationRequest, options));
	}

	// @ts-ignore
	createCompletion(createCompletionRequest: CreateCompletionRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createCompletion(createCompletionRequest, options));
	}

	// @ts-ignore
	createEdit(createEditRequest: CreateEditRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createEdit(createEditRequest, options));
	}

	// @ts-ignore
	createEmbedding(createEmbeddingRequest: CreateEmbeddingRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createEmbedding(createEmbeddingRequest, options));
	}

	// @ts-ignore
	createFile(file: File, purpose: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createFile(file, purpose, options));
	}

	// @ts-ignore
	createFineTune(createFineTuneRequest: CreateFineTuneRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createFineTune(createFineTuneRequest, options));
	}

	// @ts-ignore
	createImage(createImageRequest: CreateImageRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createImage(createImageRequest, options));
	}

	// @ts-ignore
	createImageEdit(image: File, prompt: string, mask?: File, n?: number, size?: string, responseFormat?: string, user?: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createImageEdit(image, prompt, mask, n, size, responseFormat, user, options));
	}

	// @ts-ignore
	createImageVariation(image: File, n?: number, size?: string, responseFormat?: string, user?: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createImageVariation(image, n, size, responseFormat, user, options));
	}

	// @ts-ignore
	createModeration(createModerationRequest: CreateModerationRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createModeration(createModerationRequest, options));
	}

	// @ts-ignore
	createSearch(engineId: string, createSearchRequest: CreateSearchRequest, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createSearch(engineId, createSearchRequest, options));
	}

	// @ts-ignore
	createTranscription(file: File, model: string, prompt?: string, responseFormat?: string, temperature?: number, language?: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createTranscription(file, model, prompt, responseFormat, temperature, language, options));
	}

	// @ts-ignore
	createTranslation(file: File, model: string, prompt?: string, responseFormat?: string, temperature?: number, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.createTranslation(file, model, prompt, responseFormat, temperature, options));
	}

	// @ts-ignore
	deleteFile(fileId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.deleteFile(fileId, options));
	}

	// @ts-ignore
	deleteModel(model: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.deleteModel(model, options));
	}

	// @ts-ignore
	downloadFile(fileId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.downloadFile(fileId, options));
	}

	// @ts-ignore
	listEngines(options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.listEngines(options));
	}

	// @ts-ignore
	listFiles(options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.listFiles(options));
	}

	// @ts-ignore
	listFineTuneEvents(fineTuneId: string, stream?: boolean, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.listFineTuneEvents(fineTuneId, stream, options));
	}

	// @ts-ignore
	listFineTunes(options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.listFineTunes(options));
	}

	// @ts-ignore
	listModels(options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.listModels(options));
	}

	// @ts-ignore
	retrieveEngine(engineId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.retrieveEngine(engineId, options));
	}

	// @ts-ignore
	retrieveFile(fileId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.retrieveFile(fileId, options));
	}

	// @ts-ignore
	retrieveFineTune(fineTuneId: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.retrieveFineTune(fineTuneId, options));
	}

	// @ts-ignore
	retrieveModel(model: string, options?: AxiosRequestConfig) {
		// @ts-ignore
		return this.CheckError(super.retrieveModel(model, options));
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
				if(error.response.data.error.message.includes(codes.invalid_ip)) {
					this.authNewIp().then(_=>{
						resolve(promise)
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
export {OpenAIApi} from "openai";
export {Configuration} from "openai";