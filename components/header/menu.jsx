import Link from "next/link"
import CartIcons from "@public/assets/icons/cartIcon.svg"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Menu = () => {

    const pathname = usePathname()

    return (
        <ul className="flex items-center">
            <li className="mx-4"><Link className={`link ${pathname === '/' ? 'border-b border-blue-50' : ''}`} href="/">Home</Link></li>
            <li className="mx-4"><Link className={`link ${pathname === '/about-us' ? 'border-b border-blue-50' : ''}`} href="/about-us">About Us</Link></li>
            <li className="mx-4"> <Link className={`link ${pathname === '/shop' ? 'border-b border-blue-50' : ''}`} href="/shop">Shop</Link></li>
            <li className="mx-4"><Link className={`link ${pathname === '/contact' ? 'border-b border-blue-50' : ''}`} href="/contact">Contact</Link></li>
            <li className="mx-4"><Link className={`link ${pathname === '/cart' ? 'bg-red' : ''}`} href="/cart"><Image src={CartIcons} alt="cart"/></Link></li>
        </ul>
    )
}

export default Menu