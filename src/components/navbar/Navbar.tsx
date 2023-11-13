import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignOut,
  User,
  At
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
        className="w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between ml-20">

          <Link to="/home">
            <img src="https://i.imgur.com/Nf4llmC.png" alt="talkier" style={{ width: '70px', height: 'auto' }}/>
          </Link>

          <div className="flex justify-end m-4">
          <Link to="/sobremim" title="Sobre Mim" className="hover:opacity-70 ml-3">
              <At size={30} />
            </Link>

            <Link to="./Perfil" title="Perfil" className="hover:opacity-70 ml-3">
              <User size={30} />
            </Link>

            <Link to="" onClick={logout} title="Sair" className="hover:opacity-70 ml-3">
              <SignOut size={30} />
            </Link>  
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
