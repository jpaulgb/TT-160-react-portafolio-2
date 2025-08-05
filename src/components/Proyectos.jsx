import { useState, useEffect } from "react";
import proyectosData from "../data/proyectos.json"
import TarjetaProyecto from "./TarjetaProyectos";
import { getProjects } from "../services/projects";
//import { getProjects } from "../services/projects";


function Proyectos(){
    const [proyectos,setProyectos] = useState([])

    const loadProjects = async ()=>{
        const data = await getProjects()
        console.log(data)
        setProyectos(data)
    }
    useEffect( ()=>{
        loadProjects()
    },[])
    return(
    <>
    <section className="container">
        <h2 className="text-center">Mis Proyectos</h2>
        <div className="row">
            {proyectos.map((proyecto,i)=>(
                <TarjetaProyecto
                key = {i}
                proyecto = {proyecto}/>
            )
            )}
        </div>
    </section>
    </>
    )
}
export default Proyectos