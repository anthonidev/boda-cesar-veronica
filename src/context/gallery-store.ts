import { Gallery, GalleryForm } from "@/lib/interface/gallery";
import {
  createGalleryService,
  getGalleryService,
} from "@/server/action/gallery";
import { create } from "zustand";

interface GalleryState {
  loading: boolean;
  galleryList: Gallery[] | null;
  setLoading: (loading: boolean) => void;
  createGalleryItem: (gallery: GalleryForm) => Promise<boolean>;
  getAllGalleryItems: () => Promise<void>;
}

const useGalleryStore = create<GalleryState>((set) => ({
  loading: false,
  galleryList: null,

  setLoading: (loading: boolean) => set({ loading }),

  createGalleryItem: async (gallery: GalleryForm) => {
    let res = false;
    set({ loading: true });

    try {
      const formData = new FormData();
      if (gallery.image) formData.append("image", gallery.image);
      formData.append("title", gallery.title);

      if (gallery.description)
        formData.append("description", gallery.description);

      if (gallery.author) formData.append("author", gallery.author);

      await createGalleryService(formData);
      set({ loading: false });
      res = true;
    } catch (error: unknown) {
      set({ loading: false });
      console.error(error);
      res = false;
    }

    return res;
  },

  getAllGalleryItems: async () => {
    set({ loading: true });
    try {
      const res = await getGalleryService();

      if (!Array.isArray(res)) {
        set({ loading: false });
        return;
      }

      set({ galleryList: res });
      set({ loading: false });
    } catch (error: unknown) {
      set({ loading: false });
      console.error(error);
    }
  },
}));

export default useGalleryStore;
