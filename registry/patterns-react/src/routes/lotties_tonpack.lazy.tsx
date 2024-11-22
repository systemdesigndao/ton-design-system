import { Lottie } from '@/components/Lottie'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/lotties_tonpack')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LottiesTonPackComponent />
}

function LottiesTonPackComponent() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-1">
      <Lottie src="/lotties/ton-pack/bird1.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/bird2.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/celebrate.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/exchange.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/gem1.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/gem2.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/keyboard.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/light.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/lock.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/mailbox.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/money.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/monkey.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/sad.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/teacher1.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/teacher2.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/time.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/wallet.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/write1.json" className="h-40 w-40" loop playOnHover />
      <Lottie src="/lotties/ton-pack/write2.json" className="h-40 w-40" loop playOnHover />
    </div>
  )
}
