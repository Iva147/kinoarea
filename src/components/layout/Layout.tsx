import { signal, effect } from '@preact/signals-react'
import { ReactNode, useCallback } from 'react'
import { Header } from '../ui/Header/Header'
import { Navigation } from '../ui/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import { Footer } from '../ui/Footer/Footer'
import { Mailing } from '../ui/Mailing/Mailing'

const isNavOpen = signal(false)

interface LayoutProps {
  children?: ReactNode
  noMailing?: boolean
}
export const Layout = ({ children, noMailing = false }: LayoutProps) => {
  const onNavClose = useCallback(() => {
    isNavOpen.value = false
  }, [])

  const onMenuClick = useCallback(() => {
    isNavOpen.value = true
  }, [])

  effect(() => console.log({ isNavOpen: isNavOpen.value }))

  return (
    <div className="App bg-darkBlue flex flex-col h-screen">
      <Header onMenu={onMenuClick} />
      <Navigation isOpen={isNavOpen.value} onClose={onNavClose} />
      <main className={'grow'}>
        {children || <Outlet />}
        {noMailing || <Mailing />}
      </main>
      <Footer />
    </div>
  )
}
