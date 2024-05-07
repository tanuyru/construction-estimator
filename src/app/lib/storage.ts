import {components} from "@/app/lib/nettlesbackend"
import { fetchDefaultConfig } from "./backendapi";
export const setCurrentConfig =  async (config: components["schemas"]["ProjectConfiguration"]) => {
    localStorage.setItem('currentConfig', JSON.stringify(config));
}

export const getCurrentConfig = async (): Promise<components["schemas"]["ProjectConfiguration"]> => {
    /*const exist = localStorage.getItem('currentProject')?.toJson();
    if (exist){
        return exist;
    }*/
    return await fetchDefaultConfig();
}