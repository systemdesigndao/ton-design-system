import { Button } from '@/components/Button'
import { useNavigate as useNavigateRouterDom } from 'react-router-dom'

export function LottiesComponent() {
  const navigate = useNavigateRouterDom()
  return (
    <>
      <Button
        className="w-40"
        onClick={() => {
          navigate('/lotties_tonpack')
        }}
      >
        To /lotties/tonpack
      </Button>
    </>
  )
}
