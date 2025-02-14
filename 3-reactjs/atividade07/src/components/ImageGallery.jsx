import { useState } from "react"; // Importa o hook useState para gerenciar o estado

const ImageGallery = () => {
  // Cria o estado "selectedImage" que irá armazenar a imagem selecionada para visualização detalhada
  const [selectedImage, setSelectedImage] = useState(null);

  // Lista de imagens para exibir na galeria
  const images = [
    './images/luffy.jpg',
    './images/zoro.jpg',
    './images/sanji.jpg'
  ];

  return (
    <div>
      <h1>8. Galeria de Imagens com Visualização Detalhada</h1>
      <div className="gallery">
        {/* Mapeia as imagens e exibe cada uma como um item clicável */}
        {images.map((image, index) => (
          <img 
            src={image} // Define a fonte da imagem
            key={index} // Usa o índice como chave única
            alt={`image ${index}`} // Descrição alternativa para a imagem
            onClick={() => setSelectedImage(image)} // Define a imagem selecionada ao clicar
          />
        ))}
      </div>    

      {/* Exibe o modal (imagem detalhada) somente se uma imagem for selecionada */}
      {selectedImage && (
        <div className="modal">
          <img src={selectedImage} alt="Selected" /> {/* Exibe a imagem selecionada */}
          <button onClick={() => setSelectedImage(null)}>X</button> {/* Fecha a visualização detalhada */}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;