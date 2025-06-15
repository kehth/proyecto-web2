import BotontPeli from "../components/BotonPeli";
import { NavBar } from "../components/NavBar";

export function Peliculas() {
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
                    <div className="flex justify-center items-center gap-5 flex-wrap">
                        <BotontPeli
                            id="my_modal_1"
                            titulo="1. Parásitos (2019)"
                            mensaje="Una familia pobre se infiltra en la vida de una familia rica haciéndose pasar por trabajadores calificados. Lo que comienza como una comedia de engaños se transforma en una crítica social intensa y sorprendente."
                        />

                        <BotontPeli
                            id="my_modal_2"
                            titulo="2. Coco (2017)"
                            mensaje="Miguel, un joven mexicano amante de la música, viaja accidentalmente al mundo de los muertos, donde descubre secretos familiares y la importancia de honrar a los antepasados. Una historia colorida y conmovedora."
                        />

                        <BotontPeli
                            id="my_modal_3"
                            titulo="3. El Secreto de sus Ojos (2009)"
                            mensaje="Un exagente judicial escribe una novela basada en un caso sin resolver: el asesinato de una joven en los años 70. Mientras revive la investigación, también enfrenta sentimientos no resueltos hacia su exjefa."
                        />

                        <BotontPeli
                            id="my_modal_4"
                            titulo="4. Mi Socio (1982)"
                            mensaje="Un camionero rudo y un joven citadino deben compartir un viaje por carretera en Bolivia. A pesar de sus diferencias, ambos aprenden a entenderse en un recorrido lleno de humor, conflictos y paisajes inolvidables."
                        />

                        <BotontPeli
                            id="my_modal_5"
                            titulo="5. Intocable (2011)"
                            mensaje="La amistad improbable entre un aristócrata francés tetrapléjico y su cuidador, un joven de los suburbios. A través del humor y la confianza mutua, ambos descubren una nueva forma de ver la vida."
                        />
                    </div>
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