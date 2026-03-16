export function jsonEquals(a: any, b: any): boolean {
    try {
        if (a === b) return true;
        if (
            typeof a !== "object" ||
            typeof b !== "object" ||
            a === null ||
            b === null
        ) {
            return false;
        }

        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) return false;

        for (const key of keysA) {
            if (!keysB.includes(key) || !jsonEquals(a[key], b[key])) {
                return false;
            }
        }

        return true;
    } catch (error) {
        return false;
    }
}