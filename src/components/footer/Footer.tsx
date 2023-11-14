import { ReactNode, useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()
    
    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
    
            <div className="flex justify-center bg-[#1b0707] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold opacity-50'>
                            talkier | copyright: {data}
                        </p>
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

export default Footer