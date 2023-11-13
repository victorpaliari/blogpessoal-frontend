import { Link } from "react-router-dom";

import {
  AppWindow,
  Chats,
  User,
  At,
  NotePencil,
  PlusSquare,
} from "@phosphor-icons/react";

function Aside() {

  return (
    <div className="grid-cols-2">
    <div className="w-full bg-indigo-900 text-white flex flex-col p-4">
      <div className="flex flex-col gap-4 mt-4 ml-20">
        <div className="align-center">
        <Link to="./cadastrarTema" title="Cadastrar Tema" className="hover:opacity-70">
          <NotePencil size={40} />
        </Link>
        </div>
        <Link to="./temas" title="Ver Temas" className="hover:opacity-70">
          <AppWindow size={40} />
        </Link>
        <Link to="./Postagens" title="Ver Postagens" className="hover:opacity-70">
          <Chats size={40} />
        </Link>
        <Link to="./cadastroPostagens" title="Nova Postagem" className="hover:opacity-70">
          <PlusSquare size={40} />
        </Link>
        <Link to="./Perfil" title="Perfil" className="hover:opacity-70">
          <User size={40} />
        </Link>
        <Link to="/sobremim" title="About talkier" className="hover:opacity-70">
          <At size={40} />
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Aside;
