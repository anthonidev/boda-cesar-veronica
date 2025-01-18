import GalleryList from "@/components/gallery/GalleryList";
import { Gallery } from "@/lib/interface/gallery";
import { getGalleryService } from "@/server/action/gallery";
import Link from "next/link";

export default async function Page() {
  const data = (await getGalleryService()) as Gallery[];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-tertiary text-sm font-semibold hover:underline my-10"
        >
          Volver al Inicio
        </Link>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-birds-of-paradise text-tertiary mb-4">
            Galería de Recuerdos
          </h1>
          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
            Revive los momentos más especiales de nuestra boda a través de las
            hermosas fotografías compartidas por nuestros invitados
          </p>
        </div>

        {data.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              Sé el primero en compartir un momento especial
            </p>
          </div>
        ) : (
          <GalleryList gallery={data} />
        )}
      </div>
    </main>
  );
}
