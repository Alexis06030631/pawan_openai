import "./checkUpdate";
import * as openAi from "openai";
import { AxiosRequestConfig } from "axios";
import { CreateAnswerRequest, CreateChatCompletionRequest, CreateClassificationRequest, CreateCompletionRequest, CreateEditRequest, CreateEmbeddingRequest, CreateFineTuneRequest, CreateImageRequest, CreateModerationRequest, CreateSearchRequest } from "openai/api";
declare class PawanOpenai extends openAi.OpenAIApi {
    constructor(configuration: openAi.Configuration);
    cancelFineTune(fineTuneId: string, options?: AxiosRequestConfig): Promise<unknown>;
    createAnswer(createAnswerRequest: CreateAnswerRequest, options?: AxiosRequestConfig): Promise<unknown>;
    createChatCompletion(createChatCompletionRequest: CreateChatCompletionRequest, options?: AxiosRequestConfig): Promise<unknown>;
    createClassification(createClassificationRequest: CreateClassificationRequest, options?: AxiosRequestConfig): Promise<unknown>;
    createCompletion(createCompletionRequest: CreateCompletionRequest, options?: AxiosRequestConfig): Promise<unknown>;
    createEdit(createEditRequest: CreateEditRequest, options?: AxiosRequestConfig): Promise<unknown>;
    createEmbedding(createEmbeddingRequest: CreateEmbeddingRequest, options?: AxiosRequestConfig): Promise<unknown>;
    createFile(file: File, purpose: string, options?: AxiosRequestConfig): Promise<unknown>;
    createFineTune(createFineTuneRequest: CreateFineTuneRequest, options?: AxiosRequestConfig): Promise<unknown>;
    createImage(createImageRequest: CreateImageRequest, options?: AxiosRequestConfig): Promise<unknown>;
    createImageEdit(image: File, prompt: string, mask?: File, n?: number, size?: string, responseFormat?: string, user?: string, options?: AxiosRequestConfig): Promise<unknown>;
    createImageVariation(image: File, n?: number, size?: string, responseFormat?: string, user?: string, options?: AxiosRequestConfig): Promise<unknown>;
    createModeration(createModerationRequest: CreateModerationRequest, options?: AxiosRequestConfig): Promise<unknown>;
    createSearch(engineId: string, createSearchRequest: CreateSearchRequest, options?: AxiosRequestConfig): Promise<unknown>;
    createTranscription(file: File, model: string, prompt?: string, responseFormat?: string, temperature?: number, language?: string, options?: AxiosRequestConfig): Promise<unknown>;
    createTranslation(file: File, model: string, prompt?: string, responseFormat?: string, temperature?: number, options?: AxiosRequestConfig): Promise<unknown>;
    deleteFile(fileId: string, options?: AxiosRequestConfig): Promise<unknown>;
    deleteModel(model: string, options?: AxiosRequestConfig): Promise<unknown>;
    downloadFile(fileId: string, options?: AxiosRequestConfig): Promise<unknown>;
    listEngines(options?: AxiosRequestConfig): Promise<unknown>;
    listFiles(options?: AxiosRequestConfig): Promise<unknown>;
    listFineTuneEvents(fineTuneId: string, stream?: boolean, options?: AxiosRequestConfig): Promise<unknown>;
    listFineTunes(options?: AxiosRequestConfig): Promise<unknown>;
    listModels(options?: AxiosRequestConfig): Promise<unknown>;
    retrieveEngine(engineId: string, options?: AxiosRequestConfig): Promise<unknown>;
    retrieveFile(fileId: string, options?: AxiosRequestConfig): Promise<unknown>;
    retrieveFineTune(fineTuneId: string, options?: AxiosRequestConfig): Promise<unknown>;
    retrieveModel(model: string, options?: AxiosRequestConfig): Promise<unknown>;
    MakeRequest(method: string, ...params: any[]): Promise<unknown>;
    /**
     * Checks if the error is an invalid IP error and resets the IP if it is
     * @param promise The promise to check
     * @constructor
     */
    CheckError(promise: Promise<any>): Promise<unknown>;
    /**
     * Resets the IP address for your API key
     * @returns {Promise<boolean>}
     */
    authNewIp(): Promise<unknown>;
}
export { PawanOpenai as OpenAIApi };
export { Configuration } from "openai";
