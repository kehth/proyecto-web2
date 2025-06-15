import imagen1 from "../assets/cazafantasmas.jpg"
import imagen2 from "../assets/mosnter.jpg"
import imagen3 from "../assets/depredador.jpg"
import Cartilla from "../components/Cartilla";
import { NavBar } from "../components/NavBar";


export function Principal() {
    return (
        <div className="bg-gray-500 flex justify-center items-center h-screen">
            <div className="bg-blue-950 grid grid-cols-2 grid-rows-10 justify-center items-center w-[90%] h-[95vh] rounded-3xl">

                {/* Header */}
                <div className="col-span-2">
                    <header className="flex items-center justify-center w-full h-[72px] border-b-2 border-gray-600">
                        <h1 className="font-bold text-white text-3xl text-center">Cinemateca Boliviana</h1>
                    </header>
                </div>

                {/* NavBar */}
                <div className="col-span-2">
                    <NavBar />
                </div>

                {/* Contenido principal */}
                <div className="col-span-2 row-span-7 flex flex-wrap gap-6 justify-center">
                    <Cartilla imageUrl={imagen1} titulo="Cazafantasmas (Ghostbusters, 1984)" />
                    <Cartilla imageUrl={imagen2} titulo="Monsters, Inc. (2001)" />
                    <Cartilla imageUrl={imagen3} titulo="La Presa (Prey, 2022)" />
                </div>

                {/* Pie de página */}
                <div className="col-span-1 row-span-1 ml-10 text-white">
                    <h1>Jose Luis Quispe Condori</h1>
                </div>
                <div className="col-span-1 row-span-1 ml-20 text-white">
                    Programación Web - INF 122
                </div>

            </div>
        </div>

    );
}