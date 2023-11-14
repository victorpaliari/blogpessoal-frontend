<<<<<<< HEAD
import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignOut,
  User,
  At
} from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
=======
import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'

function Navbar() {
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

<<<<<<< HEAD
  let component: ReactNode

  if (usuario.token !== "") {

    
  component = (
      <div
        className="w-full bg-[#1b0707] text-white flex justify-center py-4">
        <div className="container flex justify-between">
          <Link to="/home">
            <img src="https://i.imgur.com/Nf4llmC.png" alt="talkier" style={{ width: '70px', height: 'auto' }}/>
          </Link>

          <div className="flex justify-end m-4">
          <Link to="/sobremim" title="Sobre Mim" className="hover:opacity-70 ml-3">
              <At size={30} />
            </Link>

            <Link to="./Perfil" title="Perfil" className="hover:opacity-70 ml-3">
              <User size={30} />
            </Link>

            <Link to="" onClick={logout} title="Sair" className="hover:opacity-70 ml-3"><SignOut size={30} /></Link>  
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

export default Navbar
=======
    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', "sucesso")
        navigate('/login')
    }

    let component: ReactNode

    if (usuario.token !== "") {

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
}

export default Navbar
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
