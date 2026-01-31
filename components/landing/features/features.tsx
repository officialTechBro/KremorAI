import FeatureCard from "./fature-card"
const features = [
  {
    iconSrc: "/vectors/motorbike.svg",
    text: "Free Shipping",
    tag: "Orders above $200",
    hasBorder: true,
  },
  {
    iconSrc: "/vectors/return.svg",
    text: "Money-back",
    tag: "30 days Guarantee",
    hasBorder: true,
  },
  {
    iconSrc: "/vectors/headset.svg",
    text: "Premium Support",
    tag: "Phone and email support",
    hasBorder: true,
  },
  {
    iconSrc: "/vectors/secure.svg",
    text: "Secure Payments",
    tag: "Secured by Stripe",
    hasBorder: false,
  },
]

const Features = () => {
  return (
    <section className="py-16 px-6 md:px-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:max-w-7xl lg:mx-auto">
        {features.map((feature) => (
          <FeatureCard key={feature.text} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Features
