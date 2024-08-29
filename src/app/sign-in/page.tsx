import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import appIcon from '@/assets/nabrasa-icon.svg'
import Image from 'next/image'

export default function SignIn() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-secondary p-10">
        <div className="flex items-center gap-2">
          <Image src={appIcon} className="dark:invert" alt="" width={35} />
          <p className="font-bold">nabrasa.app</p>
        </div>
      </div>
      <div className="p-10">
        <div className="flex justify-end">
          <Button className="text-muted-foreground" variant={'ghost'}>
            Novo estabelecimento
          </Button>
        </div>
        <div className="w-full h-full items-center justify-center flex">
          <div className="space-y-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Acessar painel</h1>
              <p className="text-muted-foreground">
                Acompanhe suas vendas pelo painel do parceiro!
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Seu e-mail</Label>
                <Input type="email" id="email" />
              </div>
              <Button className="w-full">Acessar painel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
