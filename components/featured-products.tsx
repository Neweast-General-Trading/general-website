import ProductCard from "./product-card"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "Premium Engine Oil",
      image: "/placeholder.svg?height=300&width=300",
      category: "Engine/Fuel Parts",
      price: 29.99,
    },
    {
      id: 2,
      title: "High Performance Battery",
      image: "/placeholder.svg?height=300&width=300",
      category: "Battery",
      price: 89.99,
    },
    {
      id: 3,
      title: "All-Season Tires",
      image: "/placeholder.svg?height=300&width=300",
      category: "Tires",
      price: 129.99,
    },
    {
      id: 4,
      title: "Performance Exhaust System",
      image: "/placeholder.svg?height=300&width=300",
      category: "Exhaust Systems",
      price: 149.99,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          category={product.category}
          price={product.price}
        />
      ))}
    </div>
  )
}
