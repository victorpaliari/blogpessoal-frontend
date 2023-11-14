import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RotatingLines } from "react-loader-spinner"

import { buscar, deletar } from '../../../services/Service'
import { AuthContext } from '../../../contexts/AuthContext'

import Postagem from '../../../models/Postagem'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarPostagem() {
    
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
<<<<<<< HEAD
                toastAlerta('Token expirado. Por favor, faça login novamente!', "info")
=======
                toastAlerta('O token expirou, favor logar novamente', "erro")
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
<<<<<<< HEAD
            toastAlerta('Você precisa estar logado para utilizar essa funcionalidade.', "info")
=======
            toastAlerta('Você precisa estar logado', "erro")
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPostagem() {
        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

<<<<<<< HEAD
            toastAlerta('Postagem apagada com sucesso!', "sucesso")

        } catch (error) {
            toastAlerta('Erro ao apagar postagem. Tente novamente!', "erro")
=======
            toastAlerta('Postagem apagada com sucesso', "sucesso")

        } catch (error) {
            toastAlerta('Erro ao apagar a Postagem', "erro")
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/postagens")
    }

    return (<div className='container w-1/3 mx-auto'>
<<<<<<< HEAD
    <h1 className='text-4xl text-center my-4'>Deletar postagem</h1>
=======
    <h1 className='text-4xl text-center my-4'>Deletar Postagem</h1>
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58

    <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar a postagem a seguir?
    </p>

    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
<<<<<<< HEAD
        <header className='py-2 px-6 bg-[#6A5050] text-white font-bold text-2xl'>
            Postagem
        </header>
        
        <div className="p-4 bg-[#F2DFC9]">
=======
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
            Postagem
        </header>
        
        <div className="p-4">
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
            <p className='text-xl h-full'>{postagem.titulo}</p>
            <p>{postagem.texto}</p>
        </div>
        <div className="flex">
            <button
<<<<<<< HEAD
                className='text-slate-100 bg-[#F4BF96] hover:bg-[#EEC5A6] w-full py-2'
=======
                className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
                onClick={retornar}>
                Não
            </button>

            <button
<<<<<<< HEAD
                className='w-full text-slate-100 bg-[#EA7E7C] hover:bg-[#EB9694] flex items-center justify-center'
=======
                className='w-full text-slate-100 bg-indigo-400 
                hover:bg-indigo-600 flex items-center justify-center'
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
                onClick={deletarPostagem}>
                    
                {isLoading ?
                    <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                    <span>Sim</span>
                }
            </button>
        </div>
    </div>
</div>
);
<<<<<<< HEAD
}

export default DeletarPostagem
=======
            }
            export default DeletarPostagem;
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
