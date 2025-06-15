const Cartilla = ({ imageUrl, titulo }) => {
  return (
    <div className="bg-white w-64 rounded-xl shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={titulo}
        className="w-50 h-50 rounded-full mx-auto object-cover mt-4"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold text-gray-800">{titulo}</h2>
      </div>
    </div>
  );
};

export default Cartilla;