import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProductCardProps {
  title: string
  image: string
  category: string
  price: number
}

export default function ProductCard({ title, image, category, price }: ProductCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow">
      <Link href="#" className="block">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <Link href="#" className="block">
          <h3 className="font-medium mb-2 line-clamp-2 min-h-[40px] group-hover:text-red-600 transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">${price.toFixed(2)}</div>
          <Button size="sm" className="bg-red-600 hover:bg-red-700 rounded-sm">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
