import React from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import "../assets/css/blog.css";
import ListaCategorias from "./ListaCategorias";
import ListaPost from "./ListaPost";

const Categoria = () => {
  const { id } = useParams();
  const { path } = useRouteMatch();

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Signo Mania</h2>
      </div>
      <ListaCategorias />
      <Route path={`${path}/`}>
        <ListaPost url={`/posts?categoria=${id}`} />
      </Route>
    </>
  );
};

export default Categoria;
