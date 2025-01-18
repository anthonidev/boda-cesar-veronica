import * as yup from "yup";

// Definición de las interfaces
export interface GalleryForm {
  author?: string;
  description?: string;
  image: File | null;
  title: string;
}

export interface Gallery extends GalleryForm {
  id: string;
  createdAt: string;
  imageUrl: string;
  points: number;
}

// Constantes para la validación
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 5MB

// Esquema de validación
export const galleryFormSchema = yup.object({
  title: yup
    .string()
    .required("El título es obligatorio")
    .max(100, "El título no puede exceder los 100 caracteres"),

  author: yup
    .string()
    .optional()
    .max(50, "El nombre no puede exceder los 50 caracteres"),

  description: yup
    .string()
    .optional()
    .max(500, "La descripción no puede exceder los 500 caracteres"),

  image: yup
    .mixed<File>()
    .required("La imagen es obligatoria")
    .test("fileSize", "La imagen no debe exceder 5MB", (value) => {
      if (!value) return false;
      return value.size <= MAX_FILE_SIZE;
    })
    .test("isImage", "El archivo debe ser una imagen", (value) => {
      if (!value) return false;
      return value.type.startsWith("image/");
    })
    .nullable(),
});
