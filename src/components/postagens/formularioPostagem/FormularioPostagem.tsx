import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
<<<<<<< HEAD

import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from '../../../contexts/AuthContext';

import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
=======
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { toastAlerta } from '../../../utils/toastAlerta';
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58

function FormularioPostagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [temas, setTemas] = useState<Tema[]>([])

    const [tema, setTema] = useState<Tema>({ id: 0, descricao: '', })
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPostagemPorId(id: string) {
        await buscar(`/postagens/${id}`, setPostagem, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarTemaPorId(id: string) {
        await buscar(`/temas/${id}`, setTema, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarTemas() {
        await buscar('/temas', setTemas, {
            headers: {
                Authorization: token,
            },
        })
    }

<<<<<<< HEAD
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
=======
    //verifica se o token está vazio e caso sim, não permite a interação, enviando o usuário para a página de login
    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', "erro")
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
            navigate('/');
        }
    }, [token])

<<<<<<< HEAD
=======
    //caso o id de temas seja indefinido, significa que aquele tema está endo atualizado
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
    useEffect(() => {
        buscarTemas()

        if (id !== undefined) {
            buscarPostagemPorId(id)
        }
    }, [id])

<<<<<<< HEAD
=======
    //se está sendo atualizada, ele pega as informações que são necessárias de preencher e muda seu estado final
    // [...postagem == 
    // id: 1;
    // titulo: 
    //texto: 
    // data: 
    //tema: 
    //usuário: ]

>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        })
    }, [tema])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario,
        });
    }

    function retornar() {
<<<<<<< HEAD
        navigate('/home');
    }

=======
        navigate('/postagens');
    }

    //
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id != undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });

<<<<<<< HEAD
                alert('Postagem atualizada com sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Postagem')
=======
                toastAlerta('Postagem atualizada com sucesso', "sucesso")

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', "erro")
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar Postagem', "erro")
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
                }
            }

        } else {
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                })

<<<<<<< HEAD
                alert('Postagem cadastrada com sucesso');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar a Postagem');
=======
                toastAlerta('Postagem cadastrada com sucesso', "sucesso");

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', "erro")
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar a Postagem', "erro");
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTema = tema.descricao === '';

<<<<<<< HEAD
    return (

        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaPostagem}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Título da Postagem</label>
                    <input
                        value={postagem.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o Título"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Texto da Postagem</label>

                    <input
                        value={postagem.texto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Adicione aqui o Texto da Postagem"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Tema da Postagem</p>
                    <select name="tema" id="tema" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um Tema</option>
                        {temas.map((tema) => (
                            <>
                                <option value={tema.id} >{tema.descricao}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button
                    type='submit'
                    disabled={carregandoTema}
                    className='flex justify-center rounded disabled:bg-slate-200 bg-indigo-400 
                            hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2'
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Confirmar</span>
                    }
                </button>
            </form>
        </div>
)
                }
                export default FormularioPostagem;
=======
    return (<div className="container flex flex-col mx-auto items-center">
    <h1 className="text-4xl text-center my-8">
        {id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}
    </h1>

    <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaPostagem}>
        <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Título da Postagem</label>
            <input
                value={postagem.titulo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                type="text"
                placeholder="Insira aqui o Título"
                name="titulo"
                required
                className="border-2 border-slate-700 rounded p-2"
            />
        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Texto da Postagem</label>

            <input
                value={postagem.texto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                type="text"
                placeholder="Adicione aqui o Texto da Postagem"
                name="texto"
                required
                className="border-2 border-slate-700 rounded p-2"
            />
        </div>

        <div className="flex flex-col gap-2">
            <p>Tema da Postagem</p>
            <select name="tema" id="tema" className='border p-2 border-slate-800 rounded'
                onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
            >
                <option value="" selected disabled>Selecione um Tema</option>
                {temas.map((tema) => (
                    <>
                        <option value={tema.id} >{tema.descricao}</option>
                    </>
                ))}
            </select>
        </div>
        <button
            type='submit'
            disabled={carregandoTema}
            className='flex justify-center rounded disabled:bg-slate-200 bg-indigo-400 
                    hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2'
        >
            {isLoading ?
                <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                /> :
                <span>Confirmar</span>
            }
        </button>
    </form>
</div>
);
        }
        export default FormularioPostagem;
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
