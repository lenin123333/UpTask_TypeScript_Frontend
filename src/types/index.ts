import {z} from 'zod'

//Projects
export const projectSchema = z.object({
    _id:z.string(),
    projectName:z.string(),
    clientName:z.string(),
    description:z.string()
})

export type Project = z.infer<typeof projectSchema>
//Se utiliza pick para seleccionar que campos debera contener el type
// del 
export type ProjectFormData= Pick<Project, 'clientName' | 'projectName' | 'description'>
