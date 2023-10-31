import { Link } from "react-router-dom";
import { NotePencil } from "@phosphor-icons/react";

function Body() {
  return (
    <><div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <Link to="/cadastrarTema" target="black" className="hover:opacity-70">
          <NotePencil size={70} />
        </Link>
      </div>
    </>
  );
}

export default Body;
