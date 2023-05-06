"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = exports.OpenAIApi = void 0;
require("./checkUpdate");
const openAi = __importStar(require("openai"));
const axios_1 = __importDefault(require("axios"));
const codes = {
    invalid_ip: 'Your API key is not allowed to be used from this IP address'
};
class OpenAiApi extends openAi.OpenAIApi {
    constructor(configuration) {
        super(configuration);
    }
    // @ts-ignore
    cancelFineTune(fineTuneId, options) {
        // @ts-ignore
        return this.CheckError(super.cancelFineTune(fineTuneId, options));
    }
    // @ts-ignore
    createAnswer(createAnswerRequest, options) {
        // @ts-ignore
        return this.CheckError(super.createAnswer(createAnswerRequest, options));
    }
    // @ts-ignore
    createChatCompletion(createChatCompletionRequest, options) {
        // @ts-ignore
        return this.CheckError(super.createChatCompletion(createChatCompletionRequest, options));
    }
    // @ts-ignore
    createClassification(createClassificationRequest, options) {
        // @ts-ignore
        return this.CheckError(super.createClassification(createClassificationRequest, options));
    }
    // @ts-ignore
    createCompletion(createCompletionRequest, options) {
        // @ts-ignore
        return this.CheckError(super.createCompletion(createCompletionRequest, options));
    }
    // @ts-ignore
    createEdit(createEditRequest, options) {
        // @ts-ignore
        return this.CheckError(super.createEdit(createEditRequest, options));
    }
    // @ts-ignore
    createEmbedding(createEmbeddingRequest, options) {
        // @ts-ignore
        return this.CheckError(super.createEmbedding(createEmbeddingRequest, options));
    }
    // @ts-ignore
    createFile(file, purpose, options) {
        // @ts-ignore
        return this.CheckError(super.createFile(file, purpose, options));
    }
    // @ts-ignore
    createFineTune(createFineTuneRequest, options) {
        // @ts-ignore
        return this.CheckError(super.createFineTune(createFineTuneRequest, options));
    }
    // @ts-ignore
    createImage(createImageRequest, options) {
        // @ts-ignore
        return this.CheckError(super.createImage(createImageRequest, options));
    }
    // @ts-ignore
    createImageEdit(image, prompt, mask, n, size, responseFormat, user, options) {
        // @ts-ignore
        return this.CheckError(super.createImageEdit(image, prompt, mask, n, size, responseFormat, user, options));
    }
    // @ts-ignore
    createImageVariation(image, n, size, responseFormat, user, options) {
        // @ts-ignore
        return this.CheckError(super.createImageVariation(image, n, size, responseFormat, user, options));
    }
    // @ts-ignore
    createModeration(createModerationRequest, options) {
        // @ts-ignore
        return this.CheckError(super.createModeration(createModerationRequest, options));
    }
    // @ts-ignore
    createSearch(engineId, createSearchRequest, options) {
        // @ts-ignore
        return this.CheckError(super.createSearch(engineId, createSearchRequest, options));
    }
    // @ts-ignore
    createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
        // @ts-ignore
        return this.CheckError(super.createTranscription(file, model, prompt, responseFormat, temperature, language, options));
    }
    // @ts-ignore
    createTranslation(file, model, prompt, responseFormat, temperature, options) {
        // @ts-ignore
        return this.CheckError(super.createTranslation(file, model, prompt, responseFormat, temperature, options));
    }
    // @ts-ignore
    deleteFile(fileId, options) {
        // @ts-ignore
        return this.CheckError(super.deleteFile(fileId, options));
    }
    // @ts-ignore
    deleteModel(model, options) {
        // @ts-ignore
        return this.CheckError(super.deleteModel(model, options));
    }
    // @ts-ignore
    downloadFile(fileId, options) {
        // @ts-ignore
        return this.CheckError(super.downloadFile(fileId, options));
    }
    // @ts-ignore
    listEngines(options) {
        // @ts-ignore
        return this.CheckError(super.listEngines(options));
    }
    // @ts-ignore
    listFiles(options) {
        // @ts-ignore
        return this.CheckError(super.listFiles(options));
    }
    // @ts-ignore
    listFineTuneEvents(fineTuneId, stream, options) {
        // @ts-ignore
        return this.CheckError(super.listFineTuneEvents(fineTuneId, stream, options));
    }
    // @ts-ignore
    listFineTunes(options) {
        // @ts-ignore
        return this.CheckError(super.listFineTunes(options));
    }
    // @ts-ignore
    listModels(options) {
        // @ts-ignore
        return this.CheckError(super.listModels(options));
    }
    // @ts-ignore
    retrieveEngine(engineId, options) {
        // @ts-ignore
        return this.CheckError(super.retrieveEngine(engineId, options));
    }
    // @ts-ignore
    retrieveFile(fileId, options) {
        // @ts-ignore
        return this.CheckError(super.retrieveFile(fileId, options));
    }
    // @ts-ignore
    retrieveFineTune(fineTuneId, options) {
        // @ts-ignore
        return this.CheckError(super.retrieveFineTune(fineTuneId, options));
    }
    // @ts-ignore
    retrieveModel(model, options) {
        // @ts-ignore
        return this.CheckError(super.retrieveModel(model, options));
    }
    /**
     * Checks if the error is an invalid IP error and resets the IP if it is
     * @param promise The promise to check
     * @constructor
     */
    CheckError(promise) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                promise.then((response) => {
                    resolve(response);
                }).catch((error) => {
                    if (error.response.data.error.message.includes(codes.invalid_ip)) {
                        this.authNewIp().then(_ => {
                            resolve(promise);
                        }).catch((error) => {
                            reject(error);
                        });
                    }
                    else
                        reject(error);
                });
            });
        });
    }
    /**
     * Resets the IP address for your API key
     * @returns {Promise<boolean>}
     */
    authNewIp() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                axios_1.default.post(this.configuration.basePath.replace(/v\d+/, "") + '/resetip', {}, this.configuration.baseOptions).then((response) => {
                    if (response.data.status)
                        resolve(true);
                    else
                        reject(response.data.status);
                });
            });
        });
    }
}
// Export OpenAIApi class
var openai_1 = require("openai");
Object.defineProperty(exports, "OpenAIApi", { enumerable: true, get: function () { return openai_1.OpenAIApi; } });
var openai_2 = require("openai");
Object.defineProperty(exports, "Configuration", { enumerable: true, get: function () { return openai_2.Configuration; } });
