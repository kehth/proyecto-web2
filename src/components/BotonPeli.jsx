const BotonPeli = ({ id, titulo, mensaje }) => {
  return (
    <>
      <button className="btn" onClick={() => document.getElementById(id).showModal()}>
        {titulo}
      </button>

      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{titulo}</h3>
          <p className="py-4">{mensaje}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BotonPeli;
