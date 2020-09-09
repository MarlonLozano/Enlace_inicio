import HeaderNavigation from './HeaderNavigation'
import NavLink from './NavigationLink'

export default function Header() {
    return (
        <header className="header">
            <HeaderNavigation>
                <NavLink href="/" name="Inicio" />
                <NavLink href="/nosotros" name="Nosotros" />
                <NavLink href="/eventos" name="Eventos" />
                <NavLink href="/contacto" name="Contacto" />
            </HeaderNavigation>
        </header>
    )
}