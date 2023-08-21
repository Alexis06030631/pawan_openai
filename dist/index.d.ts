import "./checkUpdate";
import * as openAi from "openai";
import { AxiosRequestConfig } from "axios";
import { CreateAnswerRequest, CreateChatCompletionRequest, CreateClassificationRequest, CreateCompletionRequest, CreateEditRequest, CreateEmbeddingRequest, CreateFineTuneRequest, CreateImageRequest, CreateModerationRequest, CreateSearchRequest } from "openai/api";
declare class PawanOpenai extends openAi.OpenAIApi {
    constructor(configuration: openAi.Configuration);
    //@ts-ignore
    cancelFineTune(fineTuneId: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createAnswer(createAnswerRequest: CreateAnswerRequest, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createChatCompletion(createChatCompletionRequest: CreateChatCompletionRequest, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createClassification(createClassificationRequest: CreateClassificationRequest, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createCompletion(createCompletionRequest: CreateCompletionRequest, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createEdit(createEditRequest: CreateEditRequest, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createEmbedding(createEmbeddingRequest: CreateEmbeddingRequest, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createFile(file: File, purpose: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createFineTune(createFineTuneRequest: CreateFineTuneRequest, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createImage(createImageRequest: CreateImageRequest, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createImageEdit(image: File, prompt: string, mask?: File, n?: number, size?: string, responseFormat?: string, user?: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createImageVariation(image: File, n?: number, size?: string, responseFormat?: string, user?: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createModeration(createModerationRequest: CreateModerationRequest, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createSearch(engineId: string, createSearchRequest: CreateSearchRequest, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createTranscription(file: File, model: string, prompt?: string, responseFormat?: string, temperature?: number, language?: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    createTranslation(file: File, model: string, prompt?: string, responseFormat?: string, temperature?: number, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    deleteFile(fileId: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    deleteModel(model: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    downloadFile(fileId: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    listEngines(options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    listFiles(options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    listFineTuneEvents(fineTuneId: string, stream?: boolean, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    listFineTunes(options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    listModels(options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    retrieveEngine(engineId: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    retrieveFile(fileId: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
    retrieveFineTune(fineTuneId: string, options?: AxiosRequestConfig): Promise<unknown>;
    //@ts-ignore
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
