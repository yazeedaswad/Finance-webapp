import Link from "next/link";
import Image from "next/image";
import { link } from "fs";

export const HeaderLogo = () =>{
    return(
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="/logo.svg" width={28} height={28} alt="logo" />
                <p className="font-semibold text-white text-2xl ml-2.5">Financepro</p>
            </div>
        </Link>
    )
}