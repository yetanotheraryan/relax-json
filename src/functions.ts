export function relaxjson(str: any): any {
    try{
        if(typeof str !== 'string') {
            console.log("Input is not a string");
            return null;
        }
    
        let json = JSON.parse(str);
        return json;

    }catch(error){
        console.log("Error parsing JSON: ", error);
        return null;
    }
}