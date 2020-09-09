import { useRouter } from 'next/router'
import Link from 'next/link'

interface Props {
    href: string,
    name: string,
}

export default function NavigationLink({ href, name }: Props) {
    const router = useRouter()
    const isCurrentPath = router.pathname === href || router.asPath === href;
    return (
        <li>
            <Link href={href}>
                <a className={isCurrentPath ? "active" : null}>{name}</a>
            </Link>
        </li>
    )
}