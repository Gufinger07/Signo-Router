import React from "react"
import imagem from "../assets/img/404imagem.png"
import "../assets/css/404.css"
const Pagina404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={imagem} alt="" />
            <p className="naoencontrado-texto">Ops, Essa página não existe</p>
        </main>
    )
}

export default Pagina404