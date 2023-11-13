import {Link} from "react-router-dom"
import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold opacity-50'>
                            talkier | copyright: {data}
                        </p>
                    </div>
            </div>
        </>
    )
}

export default Footer