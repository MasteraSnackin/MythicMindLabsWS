import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, Sparkles, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const currencies = [
  { code: "USD", symbol: "$", flag: "🇺🇸", rate: 1.27 },
  { code: "EUR", symbol: "€", flag: "🇪🇺", rate: 1.17 },
  { code: "GBP", symbol: "£", flag: "🇬🇧", rate: 1.0 },
  { code: "JPY", symbol: "¥", flag: "🇯🇵", rate: 186.76 },
  { code: "AUD", symbol: "A$", flag: "🇦🇺", rate: 1.94 },
  { code: "CAD", symbol: "C$", flag: "🇨🇦", rate: 1.72 },
  { code: "CHF", symbol: "Fr", flag: "🇨🇭", rate: 1.12 },
  { code: "CNY", symbol: "¥", flag: "🇨🇳", rate: 9.15 },
  { code: "INR", symbol: "₹", flag: "🇮🇳", rate: 105.67 },
  { code: "SGD", symbol: "S$", flag: "🇸🇬", rate: 1.71 }
]

const BASE_PRICE = 9.99;

const Pricing = () => {
  const { toast } = useToast()
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[2]) // Default to GBP

  const handleSubscribe = () => {
    toast({
      title: "Subscription Started! 🎉",
      description: "Welcome to Story Weaver! Your journey begins now.",
    })
  }

  const handleCurrencyChange = (value: string) => {
    const currency = currencies.find(c => c.code === value)
    if (currency) {
      setSelectedCurrency(currency)
    }
  }

  const formatPrice = (price: number) => {
    const convertedPrice = price * selectedCurrency.rate;
    return `${selectedCurrency.symbol}${convertedPrice.toFixed(2)}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white dark:from-purple-900 dark:via-gray-900 dark:to-black pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
              Choose Your Adventure Plan
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Flexible plans for every storyteller
            </p>
            <div className="max-w-xs mx-auto">
              <Select onValueChange={handleCurrencyChange} defaultValue={selectedCurrency.code}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      <span className="flex items-center gap-2">
                        <span>{currency.flag}</span>
                        <span>{currency.code}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Free Explorer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">{formatPrice(0)}/mo</div>
                <ul className="space-y-2">
                  {[
                    "Access to sample stories",
                    "Basic AI features",
                    "Limited story choices",
                    "Community access"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/library">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star className="w-4 h-4" /> Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle>Story Weaver</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">{formatPrice(BASE_PRICE)}/mo</div>
                <ul className="space-y-2">
                  {[
                    "Unlimited story access",
                    "Advanced AI features",
                    "Priority support",
                    "Personalized recommendations",
                    "Progress tracking"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={handleSubscribe}>Subscribe Now</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education Pro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">Custom</div>
                <ul className="space-y-2">
                  {[
                    "School-wide access",
                    "Curriculum integration",
                    "Teacher dashboard",
                    "Analytics & reporting",
                    "Custom content creation",
                    "Training & support"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <h2 className="text-xl font-semibold">Coming Soon</h2>
                </div>
                <p className="text-gray-600">
                  Stay tuned for our educational partnership program, offering special pricing for schools and educational institutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing
