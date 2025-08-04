import { useState, useEffect } from "react";
import proyectosData from "../data/proyectos.json"
import TarjetaProyecto from "./TarjetaProyectos";
function Proyectos(){
    const [proyectos,setProyectos] = useState([])
    useEffect(()=>{
        setProyectos(proyectosData)
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