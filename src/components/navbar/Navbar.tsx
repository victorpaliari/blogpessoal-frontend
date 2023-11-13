<<<<<<< HEAD
import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'
=======
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignOut,
  AppWindow,
  Chats,
  User,
  At,
  NotePencil,
} from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContext";
>>>>>>> c413eb16647c8287f99a1a8e93e7476c953f9ffd

function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

<<<<<<< HEAD
    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', "sucesso")
        navigate('/login')
    }
=======
  return (
    <>
      <div
        className="w-full bg-indigo-900 text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            talkier
          </Link>
>>>>>>> c413eb16647c8287f99a1a8e93e7476c953f9ffd

    let component: ReactNode

    if (usuario.token !== "") {

<<<<<<< HEAD
        component = (
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className=" container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold'>Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastroTema' className='hover:underline'>Cadastrar Tema</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>

                </div>
            </div>
        )

    }

    return (
        <>
            { component }
        </>
    )
=======
            <Link to="./Perfil" title="Perfil" className="hover:opacity-70">
              <User size={27} />
            </Link>
            <Link
              to=""
              onClick={logout}
              title="Sair"
              className="hover:opacity-70"
            >
              <SignOut size={27} />
            </Link>

            <Link to="/sobremim" title="Sobre Mim" className="hover:opacity-70"><At size={27} /></Link>
          </div>
        </div>
      </div>
    </>
  );
>>>>>>> c413eb16647c8287f99a1a8e93e7476c953f9ffd
}

export default Navbar