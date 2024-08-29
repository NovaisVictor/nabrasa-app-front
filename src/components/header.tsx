import Image from 'next/image'
import appIcon from '@/assets/nabrasa-icon.svg'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { Home, UtensilsCrossed } from 'lucide-react'
import { ModeToggle } from './theme/theme-switcher'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-4">
        <div className="flex gap-2 items-center py-2">
          <Image src={appIcon} alt="" width={50} className="dark:invert" />
          <Separator className="h-8" orientation="vertical" />
          <Button
            variant={'ghost'}
            className="text-muted-foreground data-[current=true]:text-foreground"
            asChild
          >
            <NavLink href={`/`}>
              <Home className="size-5 mr-2" />
              Home
            </NavLink>
          </Button>
          <Button
            variant={'ghost'}
            className="text-muted-foreground data-[current=true]:text-foreground"
            asChild
          >
            <NavLink href={`/orders`}>
              <UtensilsCrossed className="size-5 mr-2" />
              Pedidos
            </NavLink>
          </Button>
        </div>
        <div>
          <ModeToggle />
        </div>
      </header>
      <Separator />
    </>
  )
}
