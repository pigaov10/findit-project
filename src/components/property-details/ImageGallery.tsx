import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import clsx from "clsx";
import image1 from "@/assets/property1.jpg";
import image2 from "@/assets/property2.jpg";
import image3 from "@/assets/property2.jpg"; // pode ajustar se for imagem 3
import image4 from "@/assets/property3.jpg";

const images = [image1, image2, image3, image4];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Main Image with Arrows */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => openModal(currentIndex)}
        />

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex mt-4 gap-2 justify-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumb ${index + 1}`}
            className={clsx(
              "w-20 h-14 object-cover cursor-pointer border-2 rounded-md",
              index === currentIndex ? "border-blue-500" : "border-transparent"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="relative max-w-5xl w-full px-4">
            {/* Close */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <img
              src={images[currentIndex]}
              alt={`Modal Imagem ${currentIndex + 1}`}
              className="w-full h-[70vh] object-contain mx-auto rounded-lg"
            />

            {/* Arrows */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white"
            >
              <ChevronRight />
            </button>

            {/* Thumbnails in Modal */}
            <div className="flex gap-2 mt-4 justify-center">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumb Modal ${index + 1}`}
                  className={clsx(
                    "w-16 h-12 object-cover border-2 rounded-md cursor-pointer",
                    index === currentIndex ? "border-blue-500" : "border-transparent"
                  )}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ImageGallery;
