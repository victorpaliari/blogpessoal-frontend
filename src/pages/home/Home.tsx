import React from 'react'

import './Home.css'

function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h2>Seja Bem Vinde!</h2>
                        <p>Projeto Blog Pessoal</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src="https://i.imgur.com/CqvZ0Tb.png" 
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                        <button><a href="https://github.com/victorpaliari">Acesse meu GitHub!</a></button>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Home