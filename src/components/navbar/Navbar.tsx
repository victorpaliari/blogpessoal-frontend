import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignOut,
  AppWindow,
  Chats,
  User,
  At,
  NotePencil,
} from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  return (
    <>
      <div
        className="w-full bg-indigo-900 text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            talkier
          </Link>

          <div className="flex gap-4">
            <Link to="./cadastrarTema" title="Cadastrar Tema" className="hover:opacity-70">
              <NotePencil size={27} />
            </Link>
            <Link to="./temas" title="Ver Temas" className="hover:opacity-70">
              <AppWindow size={27} />
            </Link>

            <Link
              to="./Postagens"
              title="Ver Postagens"
              className="hover:opacity-70"
            >
              <Chats size={27} />
            </Link>

            <Link to="./Perfil" title="Perfil" className="hover:opacity-70">
              <User size={27} />
            </Link>
            <Link
              to=""
              onClick={logout}
              title="Sair"
              className="hover:opacity-70"
            >
              <SignOut size={27} />
            </Link>

            <Link to="/sobremim" title="Sobre Mim" className="hover:opacity-70"><At size={27} /></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
