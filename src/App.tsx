import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from 'react-toastify';
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import FormularioTema from "./components/temas/formularioTema/FormularioTema";
<<<<<<< HEAD
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import 'react-toastify/dist/ReactToastify.css';
=======
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import ListaPostagens from "./components/postagens/listaPostagens/ListaPostagens";
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cadastro from "./pages/cadastro/Cadastro";
<<<<<<< HEAD
import SobreMim from "./pages/sobremim/SobreMim";
import Perfil from './pages/perfil/Perfil';
import { ToastContainer } from "react-toastify";
=======
import Body from "./components/body/Body";
import Perfil from './pages/perfil/Perfil';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58

function App() {
  return (
    <AuthProvider>
       <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrarTema" element={<FormularioTema />} />
            <Route path="/editarTema/:id" element={<FormularioTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
<<<<<<< HEAD
            <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/sobremim" element={<SobreMim />}/>
            <Route path="/perfil" element={<Perfil />} />
=======
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route
              path="/editarPostagem/:id"
              element={<FormularioPostagem />}
            />
>>>>>>> 617043723cea1edf8882d48fab949b7784592b58
          </Routes>
        </div>
        <Footer />
      <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
