import useGalleryStore from "@/context/gallery-store";
import { GalleryForm, galleryFormSchema } from "@/lib/interface/gallery";
import { yupResolver } from "@hookform/resolvers/yup";
import confetti from "canvas-confetti";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormPhoto = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [includeMessage, setIncludeMessage] = useState(false);
  const { loading, createGalleryItem } = useGalleryStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<GalleryForm>({
    resolver: yupResolver(galleryFormSchema),
    defaultValues: {
      author: "",
      description: "",
    },
  });

  const imageFile = watch("image");

  const onSubmit = async (data: GalleryForm) => {
    const res = await createGalleryItem(data);
    if (res) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });

      reset();
      setPreviewUrl(null);
      setIncludeMessage(false);

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };

  const handleImageChange = (file: File) => {
    setValue("image", file, { shouldValidate: true });
    setValue("title", file.name.replace(/\.[^/.]+$/, ""));
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      handleImageChange(event.target.files[0]);
    }
  };

  return (
    <div className="bg-white/90 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 transition-all duration-200 ${
            isDragging
              ? "border-tertiary bg-tertiary/10"
              : "border-gray-300 hover:border-tertiary"
          } ${errors.image ? "border-red-500" : ""}`}
        >
          {!previewUrl ? (
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center text-gray-500">
                <svg
                  className="w-12 h-12 mb-4 text-tertiary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-lg mb-2">Arrastra y suelta tu foto aquí o</p>
                <label className="cursor-pointer bg-tertiary text-white px-6 py-2 rounded-full hover:bg-tertiary/80 transition-colors duration-200">
                  Selecciona una foto
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileInput}
                  />
                </label>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <img
                src={previewUrl}
                alt="Vista previa"
                className="max-w-full max-h-80 mx-auto rounded-lg object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setValue("image", null);
                  setPreviewUrl(null);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
          {errors.image && (
            <p className="text-red-500 text-sm mt-2">{errors.image.message}</p>
          )}
        </div>
        {}
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <input
            type="checkbox"
            id="includeMessage"
            checked={includeMessage}
            onChange={(e) => setIncludeMessage(e.target.checked)}
            className="w-4 h-4 text-tertiary border-gray-300 rounded focus:ring-tertiary"
          />
          <label htmlFor="includeMessage" className="text-sm">
            Agregar dedicatoria
          </label>
        </div>
        {includeMessage && (
          <div className="space-y-4">
            <div>
              <textarea
                {...register("description")}
                placeholder="Escribe tu dedicatoria..."
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-tertiary focus:border-transparent resize-none ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
                rows={3}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("author")}
                placeholder="Tu nombre"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-tertiary focus:border-transparent ${
                  errors.author ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.author.message}
                </p>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-tertiary text-white px-8 py-3 rounded-full hover:bg-tertiary/80 transition-colors duration-200 flex items-center justify-center mx-auto space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!imageFile}
        >
          {loading ? (
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v.01M12 8v.01M12 12v.01M12 16v.01M16.24 7.76l-1.42 1.42M17.66 12l-1.42 1.42M16.24 16.24l-1.42 1.42M12 17.66l-1.42 1.42M7.76 16.24l-1.42 1.42M6.34 12l-1.42 1.42M7.76 7.76l-1.42 1.42"
              />
            </svg>
          ) : null}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <span>Compartir foto</span>
        </button>
      </form>
    </div>
  );
};

export default FormPhoto;
