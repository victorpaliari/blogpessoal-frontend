<<<<<<< HEAD
import { Link } from "react-router-dom";
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"

import {
  AppWindow,
  Cards,
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
      <div className="grid grid-cols-8 grid-rows-3 bg-[#1b0707]">
        <div className="bg-[#1b0707] text-white flex flex-col p-4  border-white border-solid border-2">
          <div className="flex flex-col gap-4 mt-4 ml-20">
            <div className="align-center">
              <Link to="/cadastrarTema" title="Cadastrar Tema" className="hover:opacity-70">
                <NotePencil size={40} />
              </Link>
            </div>
            <Link to="/temas" title="Ver Temas" className="hover:opacity-70">
              <AppWindow size={40} />
            </Link>
            <Link to="/cadastroTemas" title="Novo Tema" className="hover:opacity-70">
              <PlusSquare size={40} />
            </Link>
            <Link to="/perfil" title="Perfil" className="hover:opacity-70">
              <User size={40} />
            </Link>
            <Link to="/sobremim" title="About talkier" className="hover:opacity-70">
              <At size={40} />
            </Link>
            <Link to='/postagens' className='hover:underline'><Cards size={40} /></Link>
          </div>
        </div>

        <div className="col-span-6 bg-[#1b0707] text-white border-white border-solid border-2">
        <div className="flex justify-around gap-4">
              </div>
          <div className="container text-white">
            <div className="flex flex-col gap-4 items-center justify-center py-4">
            <ModalPostagem />
              <ListaPostagens />
              </div>
            </div>
          </div>
          <div className="bg-[#1b0707] border-white border-solid border-2 py-2 px-4">
              <div className="flex flex-col justify-center gap-6 mt-6">
              <img src="https://i.imgur.com/T43UU5y.jpg" alt="imagem-3-coluna" className="rounded-3xl w-3/3"/>
              <img src="https://i.imgur.com/YlvsJxu.png" alt="2-imagem" className="rounded-3xl w-3/3" />
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
=======
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
