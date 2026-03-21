import { fixMissingCommas, fixQuotes, quoteKeys, removeComments, removeTrailingCommas } from "./operations";

function parse(
    str: any,
    optionsOrFallback?:
        | { fallback?: any; onError?: (err: unknown) => void }
        | any,
): any {
    let fallback: any = null;
    let onError: ((err: unknown) => void) | undefined;

    // Support both:
    // 1) parse(input, { fallback, onError })
    // 2) parse(input, fallbackValue)
    if (
        optionsOrFallback &&
        typeof optionsOrFallback === 'object' &&
        (Object.prototype.hasOwnProperty.call(optionsOrFallback, 'fallback') ||
            Object.prototype.hasOwnProperty.call(optionsOrFallback, 'onError'))
    ) {
        const options = optionsOrFallback as { fallback?: any; onError?: (err: unknown) => void };
        fallback = options.fallback || null;
        onError = options.onError;
    } else {
        fallback = optionsOrFallback || null;
    }

    try {
        if (typeof str !== 'string') {
            return fallback;
        }

        return JSON.parse(str);
    } catch (error) {
        onError?.(error);
        return fallback;
    }
}

function isValidJson(str: any): boolean {
    try {
        if (typeof str !== 'string') {
            return false;
        }
        let json = JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

function tryParse(str: any): [any, unknown | null] {
    try {
        let json = JSON.parse(str);
        return [json, null];
    } catch (error) {
        return [null, error];
    }
}


const repair = (str: any): string | null => {
    try {
        let input = str;

        input = removeComments(input)
        input = fixQuotes(input)
        input = quoteKeys(input)
        input = removeTrailingCommas(input)
        input = fixMissingCommas(input)
        return input;
    } catch (error) {
        return null;
    }
}


// Small public API: only this is exported from the package.
export const json = {
    parse,
    isValid: isValidJson,
    tryParse,
    repair
};

// Backward compatible API: previously you could call `relaxjson(input, fallback?)`.
// It delegates to `json.parse` (which also supports `{ fallback, onError }`).
export function relaxjson(str: any, fallback?: any): any {
    return parse(str, fallback);
}