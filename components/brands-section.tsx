import Image from "next/image";

export default function BrandsSection() {
  const brands = [
    {
      name: "Brand 1",
      logo: "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/4ac150efc4a_1.png",
    },
    {
      name: "Brand 1",
      logo: "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/50efc4a51b1_2.png",
    },
    {
      name: "Brand 1",
      logo: "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/c150efc4a51_3.png",
    },
    {
      name: "Brand 1",
      logo: "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/150efc4a51b_4.png",
    },
    {
      name: "Brand 1",
      logo: "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/0efc4a51b15_5.png",
    },
    {
      name: "Brand 1",
      logo: "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/ac150efc4a5_6.webp",
    },
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
