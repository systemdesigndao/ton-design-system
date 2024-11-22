import { Button } from '@/components/Button'
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/lotties')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LottiesComponent />
}

function LottiesComponent() {
  const navigate = useNavigate()
  return (
    <>
      <Button
        className="w-40"
        onClick={() => {
          navigate({ to: '/lotties_tonpack' })
        }}
      >
        To /lotties/tonpack
      </Button>
    </>
  )
}
