import Image from "next/image";

export default function BrandsSection() {
  const brands = [
    { name: "Brand 1", logo: "/assets/images/brands/1.png" },
    { name: "Brand 1", logo: "/assets/images/brands/2.png" },
    { name: "Brand 1", logo: "/assets/images/brands/3.png" },
    { name: "Brand 1", logo: "/assets/images/brands/4.png" },
    { name: "Brand 1", logo: "/assets/images/brands/5.png" },
    { name: "Brand 1", logo: "/assets/images/brands/6.webp" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-4 bg-white border border-gray-100 rounded-sm"
        >
          <Image
            src={brand.logo || "/placeholder.svg"}
            alt={brand.name}
            width={120}
            height={60}
          />
        </div>
      ))}
    </div>
  );
}
