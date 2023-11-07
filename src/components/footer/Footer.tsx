import {Link} from "react-router-dom"
import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={35} className='hover:opacity-70'/>
                        <InstagramLogo size={35} className='hover:opacity-70' />
                        <FacebookLogo size={35} className='hover:opacity-70'/>
                        <Link to='https://github.com/victorpaliari/blogpessoal' target="black" className='hover:opacity-70'><GithubLogo size={35}/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer