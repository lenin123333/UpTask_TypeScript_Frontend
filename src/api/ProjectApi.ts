
import api from "@/lib/axios";
import { ProjectFormData } from "../types";
import { isAxiosError } from "axios";

export async function createProject(formData:ProjectFormData){
    try {
        
        const{data}= await api.post('/projects',formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            //Si hay un error retorno el error para las mutaciones
            throw new Error(error.response.data.error)
        }
        
    }
}