export function Login(){
    return(
        <div className="container">
            <div className="header">
                <div className="tittle">
                    <h1>Login</h1>
                </div>
            </div>
            <div className="body">
                <div className="form">
                    <form>
                        <label htmlFor="Correo">Correo electrónico:</label>
                        <input className="input-correo" type="email" name="email" id="email" placeholder="Ingrese el correo" />
                        
                        <label htmlFor="Contrasenia">Contraseña:</label>
                        <input className="input-contra" type="password" name="contra" id="contra" placeholder="Ingrese la contraseña" />
                        <hr />
                        <button className="btn-submit" type="submit">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}