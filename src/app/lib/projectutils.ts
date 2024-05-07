import {components} from '@/app/lib/nettlesbackend';
import {paths} from '@/app/lib/nettlesbackend';
import { updateProjectEstimate } from './backendapi';

const baseUrl: string = 'http://localhost:59473';

export const removeScopeFromProject =  async (project: components["schemas"]["ProjectEstimate"], scopeName: string) => {
    console.log('deleting scopeName: '+scopeName);
const projScope: components["schemas"]["ProjectScope"] | undefined = project.scopes?.find((s) => s.scopeName === scopeName);

if (project.scopes){
    console.log('STARTING REMOVED SCOPE FROM PROJECT HAS '+project.scopes.length+" SCOPES LEFT");

    project.scopes = project.scopes.filter(scope => scope.scopeName !== scopeName);
    console.log('SUCCESSFULLY REMOVED SCOPE FROM PROJECT HAS '+project.scopes.length+" SCOPES LEFT");
    await updateProjectEstimate(project);
    console.log('done updating server reload shoud keep changes?');
} else{
    console.log('FAILED AT REMOVING SCOPE ');
}
}

export const removeAreaFromScope =  async (
    project: components["schemas"]["ProjectEstimate"], 
    scopeName: string,
    areaName: string) => {
    console.log('deleting area: '+areaName);
    const projScope: components["schemas"]["ProjectScope"] | undefined = project.scopes?.find((s) => s.scopeName === scopeName);
    const scopeArea: components["schemas"]["ProjectArea"] | undefined = projScope?.areas?.find((s) => s.name === areaName);

if (scopeArea){
    console.log('STARTING REMOVED AREA FROM PROJECT HAS '+projScope?.length+" AREAS LEFT");

    projScope.areas = projScope.areas.filter(area => area.name !== areaName);
    console.log('SUscopeArea.areasCCESSFULLY REMOVED AREA FROM PROJECT HAS '+projScope.areas?.length+" AREAS LEFT");
    await updateProjectEstimate(project);
    console.log('done updating server reload shoud keep changes?');
} else{
    console.log('FAILED AT REMOVING AREA WITH NAME '+areaName+' from scope '+projScope?.areas?.scopeName);
}
}

export const addNewScopeToProject = async(
    project: components["schemas"]["ProjectEstimate"],
    newScopeName: string
) => {
    var scope:components["schemas"]["ProjectScope"] = {};
    scope.scopeName = newScopeName;
    if (!project.scopes) {
        console.log('creating scopes collection...');
        project.scopes = [];
    }
    project.scopes.push(scope);
    console.log('DONE ADDING HAVE '+project.scopes.length+' scopes');
    await updateProjectEstimate(project);
}

export const addNewAreaToScope = async(
    project: components["schemas"]["ProjectEstimate"],
    scope: components["schemas"]["ProjectScope"],
    newAreaName: string,
    sizeSqFt: number,
) => {
    var area:components["schemas"]["ProjectArea"] = {};
    area.name = newAreaName;
    area.sizeSqFt = sizeSqFt;
    if (!scope.areas) {
        console.log('creating areas collection...');
        scope.areas = [];
    }
    scope.areas.push(area);
    console.log('DONE ADDING HAVE '+scope.areas.length+' scopes');
    await updateProjectEstimate(project);
}

export const addNewProductToArea = async(
    project: components["schemas"]["ProjectEstimate"],
    area: components["schemas"]["ProjectArea"],
    product: components["schemas"]["Product"],
) => {
   
    if (!area.appliedProducts) {
        console.log('creating product collection...');
        area.appliedProducts = [];
    }
    area.appliedProducts.push(product);
    console.log('DONE ADDING HAVE '+area.appliedProducts.length+' scopes');
    await updateProjectEstimate(project);
}



export const removeProductFromArea =  async (
    project: components["schemas"]["ProjectEstimate"], 
    scopeName: string,
    areaName: string,
    productName: string) => {

    console.log('deleting area: '+areaName);
    const projScope: components["schemas"]["ProjectScope"] | undefined = project.scopes?.find((s) => s.scopeName === scopeName);
    const scopeArea: components["schemas"]["ProjectArea"] | undefined = projScope.areas?.find((s) => s.name === areaName);
    const item: components["schemas"]["Product"] | undefined = scopeArea?.appliedProducts.find((s) => s.name === productName);

if (item){
    console.log('STARTING REMOVED ITEM FROM PROJECT HAS '+projScope.length+" AREAS LEFT");
    console.log('SUscopeArea.areasCCESSFULLY REMOVED PRODUCT FROM PROJECT HAS '+scopeArea.appliedProducts.length+" AREAS LEFT");
   
    scopeArea.appliedProducts = scopeArea.appliedProducts.filter(s => s.name !== productName);
    await updateProjectEstimate(project);
    console.log('done updating server reload shoud keep changes?');
} else{
    console.log('FAILED AT REMOVING AREA WITH NAME '+areaName+' from project:'+project+', scope: '+projScope+' '+productName);
}
}