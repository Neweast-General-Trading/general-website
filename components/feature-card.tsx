import { Truck, RefreshCcw, CreditCard, Gift } from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "truck":
        return <Truck className="h-6 w-6" />
      case "refresh-ccw":
        return <RefreshCcw className="h-6 w-6" />
      case "credit-card":
        return <CreditCard className="h-6 w-6" />
      case "gift":
        return <Gift className="h-6 w-6" />
      default:
        return <Truck className="h-6 w-6" />
    }
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
        {getIcon(icon)}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </div>
  )
}
