"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordCountFormat = void 0;
const recordCountFormat = (exArray) => {
    return {
        recordCount: exArray.length,
        data: exArray
    };
};
exports.recordCountFormat = recordCountFormat;
