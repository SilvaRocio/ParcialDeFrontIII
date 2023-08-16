const Tarjeta =({dato})=>{
    return (
            <div className="card container-sm ml-5 mr-5">
                
                <p className="list-group bg-secondary">{`${"El nombre es : "}`+ dato.nombre}</p>
            
                <p className="list-group bg-info">{`${"El animal es : "}` + dato.animal}</p>
            </div>
            
    );
}
export default Tarjeta;