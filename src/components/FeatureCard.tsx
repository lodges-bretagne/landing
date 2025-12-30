import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  theme: 'blue' | 'green'
  delay?: number
}

const FeatureCard = ({ icon: Icon, title, description, theme, delay = 0 }: FeatureCardProps) => {
  const themeColors = {
    blue: {
      bg: 'bg-blue-lodge-50',
      icon: 'text-blue-lodge-600',
      border: 'border-blue-lodge-200',
    },
    green: {
      bg: 'bg-green-lodge-50',
      icon: 'text-green-lodge-600',
      border: 'border-green-lodge-200',
    },
  }

  const colors = themeColors[theme]

  return (
    <div
      className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-default`}
    >
      <div className={`${colors.icon} mb-4`}>
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default FeatureCard

