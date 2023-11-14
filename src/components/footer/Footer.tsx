import { ReactNode, useContext } from 'react'
<<<<<<< HEAD
=======
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58

import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()
    
    const { usuario } = useContext(AuthContext)

<<<<<<< HEAD
=======
    const { usuario } = useContext(AuthContext)

>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
    let component: ReactNode

    if (usuario.token !== "") {

        component = (
<<<<<<< HEAD
    
            <div className="flex justify-center bg-[#1b0707] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold opacity-50'>
                            talkier | copyright: {data}
                        </p>
                    </div>
            </div>
=======
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Generation | Copyright: { data }
                    </p>

                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='bold' />
                        <InstagramLogo size={48} weight='bold' />
                        <FacebookLogo size={48} weight='bold' />
                    </div>
                </div>
            </div>)
    }

    return (
        <>
            { component }
        </>
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
    )
}

return (
    <>
        {component}
    </>
)
}

export default Footer