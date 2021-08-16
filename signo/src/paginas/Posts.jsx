import React from "react";
import ListaPost from "../components/ListaPost";

const Posts = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Signos</h2>
      </div>
      <ListaPost url={"/posts"} />
    </main>
  );
};

export default Posts;