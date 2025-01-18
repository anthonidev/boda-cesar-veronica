"use server";
import { Gallery } from "@/lib/interface/gallery";
import axios from "axios";

export const createGalleryService = async (data: FormData) => {
  const apiUrl = process.env.GALLERY_API;
  const url = `${apiUrl}/api/gallery/`;
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return await response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        message: error.response?.data.message,
        status: error.response?.status,
      };
    } else {
      return {
        message: "Error al registrar el invitado",
        status: 500,
      };
    }
  }
};

export const getGalleryService = async () => {
  const apiUrl = process.env.GALLERY_API;
  const url = `${apiUrl}/api/gallery/`;
  try {
    const response = await axios.get<Gallery[]>(url);

    return await response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        message: error.response?.data.message,
        status: error.response?.status,
      };
    } else {
      return {
        message: "Error al obtener la lista de invitados",
        status: 500,
      };
    }
  }
};
