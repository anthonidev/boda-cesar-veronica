"use client";
import { Slide } from "react-awesome-reveal";
import { BentoGrid } from "react-bento";
import { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import CardGaleria from "./common/CardGaleria";

const bentoItems = [
  {
    id: 1,
    src: "/imgs/1.jpg",
    alt: "boda 1",
    title: "Boda 1",
    width: 4,
    height: 3,
  },

  {
    id: 4,
    src: "/imgs/3.jpg",
    alt: "boda 4",
    title: "Boda 4",
    width: 2,
    height: 4,
  },
  {
    id: 5,
    src: "/imgs/2.jpg",
    alt: "boda 5",
    title: "Boda 5",
    width: 2,
    height: 2,
  },
  {
    id: 6,
    src: "/imgs/8.jpg",
    alt: "boda 6",
    title: "Boda 6",
    width: 2,
    height: 2,
  },
  {
    id: 7,
    src: "/imgs/7.jpg",
    alt: "boda 7",
    title: "Boda 7",
    width: 2,
    height: 3,
  },
  {
    id: 8,
    src: "/imgs/5.jpg",
    alt: "boda 8",
    title: "Boda 8",
    width: 2,
    height: 3,
  },
];

const Galeria = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-primary py-16  border-b-8 border-tertiary">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-birds-of-paradise text-[#a24d61] mb-8">
          ¡Galería de Fotos!
        </h2>
        <div className="hidden lg:block">
          <Slide triggerOnce cascade>
            <BentoGrid
              items={bentoItems.map((item) => ({
                ...item,
                element: (
                  <CardGaleria
                    src={item.src}
                    alt={item.alt}
                    onClick={() => openModal(item.src, item.alt)}
                  />
                ),
              }))}
              gridCols={4}
              rowHeight={300}
              classNames={{
                container: "gap-4",
              }}
            />
          </Slide>{" "}
        </div>
        <div className=" lg:hidden">
          <Slide triggerOnce cascade>
            <BentoGrid
              items={bentoItems.map((item) => ({
                ...item,
                element: (
                  <CardGaleria
                    src={item.src}
                    alt={item.alt}
                    onClick={() => openModal(item.src, item.alt)}
                  />
                ),
              }))}
              gridCols={4}
              rowHeight={100}
              classNames={{
                container: "gap-4",
              }}
            />
          </Slide>{" "}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75"
          ariaHideApp={false}
        >
          {selectedImage && (
            <div
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div
                className="relative bg-white rounded-lg shadow-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={800}
                  height={800}
                  className="object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 px-3 hover:bg-red-700 focus:outline-none shadow-md"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Galeria;
