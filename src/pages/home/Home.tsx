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

function Home() {
  const { usuario } = useContext(AuthContext)

  let component: ReactNode

  if (usuario.token !== "") {
    component = (
      <div className="grid grid-cols-3">
        <div className="bg-[#1b0707] text-white flex flex-col p-4  border-white border-solid border-2">
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

        

        <div className="w-3/3 bg-[#1b0707] text-white border-white border-solid border-2">
        <div className="flex justify-around gap-4">
                <div className="rounded text-white border-white border-solid border-2 py-2 px-4 mt-8">
                  Nova Postagem
                </div>
              </div>
          <div className="container text-white">
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className="text-3xl font-bold">postagens aqui</h2>
              <p className="flex justify-center">Expresse aqui seus pensamentos e opiniões</p>
            <div className="flex justify-center relative">
              <img src="https://i.imgur.com/5ySygPJ.png" alt="imagem-2-coluna" className="w-2/3"/>
              </div>

              </div>
            </div>
          </div>
          <div className="bg-[#1b0707] border-white border-solid border-2 py-2 px-4">
              <div className="flex flex-col justify-center gap-6 mt-6">
              <img src="https://i.imgur.com/T43UU5y.jpg" alt="imagem-3-coluna" className="w-3/3"/>
              <img src="https://i.imgur.com/YlvsJxu.png" alt="2-imagem" className="w-3/3" />
              </div>
              </div>
          </div>
    )
  }

  return (
    <>
      {component}
    </>
  )
}

export default Home
