export function relaxjson(str: any, fallback?:any): any {
    try{
        if(typeof str !== 'string') {
            return fallback || null;
        }
    
        let json = JSON.parse(str);
        return json;

    }catch(error){
        return fallback || null;
    }
}

export function isValidJson(str: any): boolean {
    try{
        if(typeof str !== 'string') {
            return false;
        }
        let json = JSON.parse(str);
        return true;
    }catch(error){
        return false;
    }
}

export function tryParse(str: any): [any, unknown | null] {
    try{
        let json = JSON.parse(str);
        return [json, null];
    }catch(error){
        return [null , error];
    }
}