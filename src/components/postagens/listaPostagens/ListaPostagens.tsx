import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';

import Postagem from '../../../models/Postagem';
import CardPostagens from '../cardPostagens/CardPostagens';
<<<<<<< HEAD
=======
import { toastAlerta } from '../../../utils/toastAlerta';
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58

function ListaPostagens() {

    const navigate = useNavigate();

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagens() {
<<<<<<< HEAD

=======
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
<<<<<<< HEAD
                alert('O token expirou, favor logar novamente')
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
            alert('Você precisa estar logado')
=======
            toastAlerta('Você precisa estar logado', "erro")
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])

    return (
        <>
        {postagens.length === 0 && (
            <Dna
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto"
            />
        )}

        <div className='container mx-auto my-4 
<<<<<<< HEAD
        grid grid-cols-1 gap-4'>
=======
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58

            {postagens.map((postagem) => (
                <CardPostagens key={postagem.id} post={postagem} />
            ))}

        </div>
    </>
)
}

export default ListaPostagens