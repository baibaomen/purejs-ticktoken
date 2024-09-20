// encode.js
import { Tiktoken, encodingForModel, getEncoding, getEncodingNameForModel } from "js-tiktoken";

window.Tiktoken = Tiktoken;
window.encodingForModel = encodingForModel;
window.getEncoding = getEncoding;
window.getEncodingNameForModel = getEncodingNameForModel;
