"use client";
import { Gallery } from "@/lib/interface/gallery";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Modal from "react-modal";

interface GalleryListProps {
  gallery: Gallery[];
}

const GalleryList = ({ gallery }: GalleryListProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);

  const openModal = (gallery: Gallery) => {
    setSelectedImage(gallery);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };
  const downloadImage = async () => {
    if (selectedImage) {
      try {
        const response = await fetch(selectedImage.imageUrl); // Obtiene la imagen desde la URL
        const blob = await response.blob(); // Convierte la respuesta a un blob
        const url = window.URL.createObjectURL(blob); // Crea una URL temporal para el blob

        const link = document.createElement("a"); // Crea un elemento <a>
        link.href = url; // Asigna la URL del blob al href
        link.download = selectedImage.title || "image"; // Define el nombre del archivo
        document.body.appendChild(link); // Añade el enlace al DOM
        link.click(); // Simula un clic para iniciar la descarga
        document.body.removeChild(link); // Remueve el enlace del DOM
        window.URL.revokeObjectURL(url); // Limpia la URL temporal
      } catch (error) {
        console.error("Error al descargar la imagen:", error);
      }
    }
  };
  return (
    <>
      <div className="grid  grid-cols-2 lg:grid-cols-3 gap-8">
        <Fade triggerOnce cascade damping={0.2}>
          {gallery.map((item) => (
            <article
              key={item.id}
              onClick={() => openModal(item)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            </article>
          ))}
        </Fade>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        ariaHideApp={false}
      >
        {selectedImage && (
          <div
            className="relative max-w-3xl  w-full h-full flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="relative bg-white  rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                width={800}
                height={800}
                className="object-contain"
              />
              <button
                onClick={downloadImage}
                className=" text-xs absolute top-3 left-3  text-white rounded-full p-1 px-3 bg-secondary focus:outline-none shadow-md "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 focus:outline-none shadow-md transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex items-center space-x-2 bg-primary text-xs absolute bottom-2 right-2 rounded-lg p-1">
                {selectedImage.points && (
                  <>
                    <p className="font-medium flex  justify-center items-center space-x-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="size-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                      <span>{selectedImage.points}</span>
                    </p>
                  </>
                )}
              </div>
              {selectedImage.description && (
                <div className="space-y-4 px-3 py-2">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {selectedImage.description}asdddddddddddddddd Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Incidunt non
                    officia explicabo vero ex laudantium nemo corporis dolore
                    dicta! Aliquam quidem culpa sint sequi tenetur similique
                    veniam. Optio, recusandae ipsa.
                  </p>
                </div>
              )}

              {selectedImage.author && (
                <div className="flex px-3 py-4 items-center space-x-2 text-gray-700 text-sm">
                  <span> de: </span>
                  <p className="font-medium mr-2"> {selectedImage.author}</p>
                </div>
              )}

              {/* Información de los puntos IA */}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default GalleryList;
