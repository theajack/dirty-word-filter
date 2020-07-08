import {MODE} from './constant';

export let config = {
    mode: MODE.TEST,
    replacement: '*',
    words: [], // 自定义脏词
};

export function setConfig (options) {
    for (let k in config) {
        if (typeof options !== 'undefined') {
            config[k] = options[k];
        }
    }
}

export function addWords (arg) {
    if (typeof arg === 'string') {
        config.words.push(arg);
    } else if (arg instanceof Array) {
        config.words.push(...arg);
    }
}