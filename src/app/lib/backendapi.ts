import {components} from '@/app/lib/nettlesbackend';
import {paths} from '@/app/lib/nettlesbackend';
import { redirect } from 'react-router-dom';

const baseUrl: string = 'http://localhost:59473';

const getWrap = async (relUrl: string): Promise<any> => {
    return await fetch(baseUrl+relUrl,{cache: "no-store"});
}
const deleteWrap = async (relUrl: string): Promise<any> => {
    return await fetch(baseUrl+relUrl,{cache: "no-store", method: 'DELETE',});
}
const putWrap = async (relUrl: string, jsonBody: string): Promise<any> => {
    return await fetch(baseUrl+relUrl,{
        method: 'PUT',
        body: jsonBody,
        headers: {
            'Content-Type': 'application/json'
        }});
}
export const fetchProjectEstimates = async (): Promise<Array<any>> => {

    console.warn('FetchProjectEstimate calling...');
    const response = await getWrap('/api/ProjectEstimate');
    if (response.status === 200) {
        const textData = await response.json();
        console.log('Returned data: '+textData);
        return textData;
    }
    else{
        console.log('FETCH RETURN NON 200 '+response.status);
    }
    return [];
}

export const createProjectEstimate = async () => {
    const newProjectEstimate = {
        // Fill in with project estimate data
    };

    const response = await fetch('/api/ProjectEstimate', {
        method: 'POST',
        body: JSON.stringify(newProjectEstimate),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        const data = await response.json();
        console.log(data);
    }
}
export const fetchAllRentals = async () => {
    console.log('fetching rentals');
    const response = await getWrap(`/api/RentalEquipment/`);
    console.log('done fetching rentals');
    if (response.status === 200) {
        const data = await response.json();
        console.log("Fetch rental equipment responded: "+JSON.stringify(data).substring(0,100));
        return data;
    }
    console.error('Fetch rental equipment failed with respcode '+response.status);
    return null;
}
export const fetchAllProducts = async () => {
    console.log('fetching products');
    const response = await getWrap(`/api/Product/`);
    console.log('done fetching products');
    if (response.status === 200) {
        const data = await response.json();
        console.log("Fetch products responded: "+JSON.stringify(data).substring(0,100));
        return data;
    }
    console.warn('Fetch project failed with respcode '+response.status);
    return null;
}


export const fetchProjectEstimateById = async (id: any) => {
    console.log('fetching by id: '+id);
    const response = await getWrap(`/api/ProjectEstimate/${1}/`);
    console.log('done fetching by id'+id);
    if (response.status === 200) {
        const data = await response.json();
        console.log("Fetch by id: "+id+" responded: "+JSON.stringify(data).substring(0,100));
        return data;
    }
    console.warn('Fetch project failed with respcode '+response.status);
    return null;
}

export const loadDefaultConfig = async () => {
    const localConfig = store
}
export const fetchDefaultConfig = async () => {
    console.log('fetching default config');
    const response = await getWrap(`/api/ProjectEstimate/config/`);
    console.log('done fetching config');
    if (response.status === 200) {
        const data = await response.json();
        console.log("Fetch by config responded: "+JSON.stringify(data).substring(0,100));
        return data;
    }
    console.warn('Fetch project failed with respcode '+response.status);
    return null;
}
export const updateProjectEstimate = async (updatedProjectEstimate: components["schemas"]["ProjectEstimate"]) => {
    const response = await putWrap(`/api/ProjectEstimate`, JSON.stringify(updatedProjectEstimate));

    if (response.status === 200) {
        console.log('Returned from updateEstimate...');
        if (window?.location){
            console.log('reloading location!');
            window.location.reload();
        }
    }
}
export const applyConfiguration = async (cfg: components["schemas"]["ProjectConfiguration"]) => {
    const response = await putWrap(`/api/ProjectEstimate/apply`, JSON.stringify(cfg));

    if (response.status === 200) {
        console.log('Returned from apply configuration...');
        if (window?.location){
            console.log('reloading location!');
            window.location.reload();
        }
    }
}

export const removeProjectEstimateById = async (id: any) => {
    console.log('deleting by id: '+id);
    const response = await getWrap(`/api/ProjectEstimate/${1}/`);
    console.log('done fetching by id'+id);
    if (response.status === 200) {
       
        console.log("Delete by id: "+id+" returned 200 OK");
        return;
    }
    console.warn('Delete project failed with respcode '+response.status);
    return;
}

