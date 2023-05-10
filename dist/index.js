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
class PawanOpenai extends openAi.OpenAIApi {
    constructor(configuration) {
        super(configuration);
    }
    // @ts-ignore
    cancelFineTune(fineTuneId, options) {
        // @ts-ignore
        return this.MakeRequest('cancelFineTune', fineTuneId, options);
    }
    // @ts-ignore
    createAnswer(createAnswerRequest, options) {
        // @ts-ignore
        return this.MakeRequest('createAnswer', createAnswerRequest, options);
    }
    // @ts-ignore
    createChatCompletion(createChatCompletionRequest, options) {
        // @ts-ignore
        return this.MakeRequest('createChatCompletion', createChatCompletionRequest, options);
    }
    // @ts-ignore
    createClassification(createClassificationRequest, options) {
        // @ts-ignore
        return this.MakeRequest('createClassification', createClassificationRequest, options);
    }
    // @ts-ignore
    createCompletion(createCompletionRequest, options) {
        // @ts-ignore
        return this.MakeRequest('createCompletion', createCompletionRequest, options);
    }
    // @ts-ignore
    createEdit(createEditRequest, options) {
        // @ts-ignore
        return this.MakeRequest('createEdit', createEditRequest, options);
    }
    // @ts-ignore
    createEmbedding(createEmbeddingRequest, options) {
        // @ts-ignore
        return this.MakeRequest('createEmbedding', createEmbeddingRequest, options);
    }
    // @ts-ignore
    createFile(file, purpose, options) {
        // @ts-ignore
        return this.MakeRequest('createFile', file, purpose, options);
    }
    // @ts-ignore
    createFineTune(createFineTuneRequest, options) {
        // @ts-ignore
        return this.MakeRequest('createFineTune', createFineTuneRequest, options);
    }
    // @ts-ignore
    createImage(createImageRequest, options) {
        // @ts-ignore
        return this.MakeRequest('createImage', createImageRequest, options);
    }
    // @ts-ignore
    createImageEdit(image, prompt, mask, n, size, responseFormat, user, options) {
        // @ts-ignore
        return this.MakeRequest('createImageEdit', image, prompt, mask, n, size, responseFormat, user, options);
    }
    // @ts-ignore
    createImageVariation(image, n, size, responseFormat, user, options) {
        // @ts-ignore
        return this.MakeRequest('createImageVariation', image, n, size, responseFormat, user, options);
    }
    // @ts-ignore
    createModeration(createModerationRequest, options) {
        // @ts-ignore
        return this.MakeRequest('createModeration', createModerationRequest, options);
    }
    // @ts-ignore
    createSearch(engineId, createSearchRequest, options) {
        // @ts-ignore
        return this.MakeRequest('createSearch', engineId, createSearchRequest, options);
    }
    // @ts-ignore
    createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
        // @ts-ignore
        return this.MakeRequest('createTranscription', file, model, prompt, responseFormat, temperature, language, options);
    }
    // @ts-ignore
    createTranslation(file, model, prompt, responseFormat, temperature, options) {
        // @ts-ignore
        return this.MakeRequest('createTranslation', file, model, prompt, responseFormat, temperature, options);
    }
    // @ts-ignore
    deleteFile(fileId, options) {
        // @ts-ignore
        return this.MakeRequest('deleteFile', fileId, options);
    }
    // @ts-ignore
    deleteModel(model, options) {
        // @ts-ignore
        return this.MakeRequest('deleteModel', model, options);
    }
    // @ts-ignore
    downloadFile(fileId, options) {
        // @ts-ignore
        return this.MakeRequest('downloadFile', fileId, options);
    }
    // @ts-ignore
    listEngines(options) {
        // @ts-ignore
        return this.MakeRequest('listEngines', options);
    }
    // @ts-ignore
    listFiles(options) {
        // @ts-ignore
        return this.MakeRequest('listFiles', options);
    }
    // @ts-ignore
    listFineTuneEvents(fineTuneId, stream, options) {
        // @ts-ignore
        return this.MakeRequest('listFineTuneEvents', fineTuneId, stream, options);
    }
    // @ts-ignore
    listFineTunes(options) {
        // @ts-ignore
        return this.MakeRequest('listFineTunes', options);
    }
    // @ts-ignore
    listModels(options) {
        // @ts-ignore
        return this.MakeRequest('listModels', options);
    }
    // @ts-ignore
    retrieveEngine(engineId, options) {
        // @ts-ignore
        return this.MakeRequest('retrieveEngine', engineId, options);
    }
    // @ts-ignore
    retrieveFile(fileId, options) {
        // @ts-ignore
        return this.MakeRequest('retrieveFile', fileId, options);
    }
    // @ts-ignore
    retrieveFineTune(fineTuneId, options) {
        // @ts-ignore
        return this.MakeRequest('retrieveFineTune', fineTuneId, options);
    }
    // @ts-ignore
    retrieveModel(model, options) {
        // @ts-ignore
        return this.MakeRequest('retrieveModel', model, options);
    }
    MakeRequest(method, ...params) {
        const _superIndex = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                // @ts-ignore
                this.CheckError(_superIndex(method).call(this, ...params)).then((response) => {
                    resolve(response);
                }).catch((error) => {
                    if (error.isIpError)
                        resolve(this.MakeRequest(method, ...params));
                    else
                        reject(error);
                });
            });
        });
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
                    error.isIpError = false;
                    if (error.response.data.error.message.includes(codes.invalid_ip)) {
                        this.authNewIp().then(_ => {
                            error.isIpError = true;
                            reject(error);
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
exports.OpenAIApi = PawanOpenai;
var openai_1 = require("openai");
Object.defineProperty(exports, "Configuration", { enumerable: true, get: function () { return openai_1.Configuration; } });
