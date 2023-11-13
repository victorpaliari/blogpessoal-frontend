import { Link } from "react-router-dom";
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';

import {
  AppWindow,
  Chats,
  User,
  At,
  NotePencil,
  PlusSquare,
} from "@phosphor-icons/react";

function Aside() {

  const { usuario } = useContext(AuthContext)

  let component: ReactNode

  if (usuario.token !== "") {

      component = (
    <div className="grid grid-cols-3">
    <div className="w-full bg-[#1b0707] text-white flex flex-col p-4">
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

              <div className="bg-[#1b0707] text-white">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>

            <div className="flex justify-around gap-4">
              <div className="rounded text-white border-white border-solid border-2 py-2 px-4">
                Nova Postagem
              </div>
            </div>
          </div>

          <div className="flex justify-center relative">
            <img
              src=""
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>)
}

return (
  <>
   {component}
  </>
)
}

export default Aside
