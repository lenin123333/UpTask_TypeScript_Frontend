import { Link } from "react-router-dom"
import {useForm} from 'react-hook-form'

function CreateProjectView() {
    const initialValues={
        projectName:"",
        clientName:"",
        description:""
    }
    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:initialValues})

    const handleForm =(data)=>{
            console.log(data)
    }
    return (
        <>
            <h1 className=" text-5xl font-black">Crear Proyecto</h1>
            <p className=" text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para crear un proyecto</p>
            <nav className=" my-5">
                <Link to="/" className=" bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors">
                    Volver a Proyectos
                </Link>
            </nav>

            <form className=" mt-10 bg-white shadow-lg p-10 rounded-lg"
                onSubmit={handleForm(handleForm)}
                noValidate
            >

            </form>

        </>
    )
}

export default CreateProjectView