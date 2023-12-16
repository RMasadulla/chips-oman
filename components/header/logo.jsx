import Image from "next/image"
import MainLogo from "@public/assets/icons/logo.svg"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center">
            <Image src={MainLogo} alt="logo" />
            <span className="ml-2 text-2xl xl:text-3xl">Chips Oman</span>
        </Link>
    )
}

export default Logo