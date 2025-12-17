import { galleryItems } from "@/config/gallery-data";
import Image from "next/image";

export const metadata = {
  title: "Gallery - Bashfeeq Ventures",
  description:
    "View our professional facility maintenance, cleaning, and fumigation services in action. See our equipment and completed projects.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#BA222A] to-[#DE7B60] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Take a look at our professional equipment, team, and completed
            projects
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block text-xs font-semibold px-2 py-1 bg-[#BA222A] rounded mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Our Professional Services?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your facility maintenance needs
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#BA222A] hover:bg-[#9a1a22] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
