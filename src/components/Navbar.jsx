function Navbar(){
    return(
        <>           
            <nav className ="navbar navbar-expand-lg bg-body-tertiary">
                <div className ="container-fluid">
                    <a className ="navbar-brand" href="#">Javier Sanchez</a>
                        <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className ="navbar-toggler-icon"></span>
                        </button>
                <div className ="collapse navbar-collapse" id="navbarNav">
                    <ul className ="navbar-nav">
                        <li className ="nav-item">
                            <a className ="nav-link active" aria-current="page" href="#">Sobre Mi</a>
                        </li>
                        <li className ="nav-item">
                            <a className ="nav-link" href="#">Proyectos</a>
                        </li>
                        <li className ="nav-item">
                        <a className ="nav-link" href="#">Tecnologias</a>
                        </li>
                        <li className ="nav-item">
                        <a className ="nav-link" href="#">Estudios y reconocimientos</a>
                        </li>
                        <li className ="nav-item">
                        <a className ="nav-link" href="#">Que dicen de mi</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>        
    )
}
export default Navbar