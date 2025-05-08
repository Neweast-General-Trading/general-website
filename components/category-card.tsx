import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string | StaticImageData;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <Link href="#" className="block group">
      <div className="bg-gray-100 rounded-sm overflow-hidden aspect-square relative mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-center font-medium">{title}</h3>
    </Link>
  );
}
