import { Link, NavLink } from "react-router-dom";

export function NavBar() {

    const estilosNav = ({ isActive }) => {
       return isActive ? 'border-b-2 border-blue-600' : ""
    };

    return (
        <nav> 
            <section className="flex items-center justify-center gap-7 text-white text-xl ">
                <NavLink to="/" className={estilosNav}>Principal</NavLink>
                <NavLink to="/Peliculas" className={estilosNav}>Peliculas</NavLink>
            </section>
        </nav>
    );
}