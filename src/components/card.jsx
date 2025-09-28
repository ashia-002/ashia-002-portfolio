export function Card({ title, description, image, link }) {
  return (
    <div className="relative w-80 h-96 bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden shadow-lg border border-gray-700">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">{description}</p>
        <a
          href={link}
          className="inline-flex items-center bg-white text-black px-5 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
        >
          Read more
        </a>
      </div>
    </div>
  );
}