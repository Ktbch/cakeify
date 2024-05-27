'use client'

import { useLogout } from "@/app/hooks/authHooks";
import { ShoppingCart, X } from "lucide-react";
import Link from "next/link";


export default function NavBar() {

    const { handleLogout, login, pathName } = useLogout()

    return (
        <div className="shadow-md  shadow-[#F5DEB3] text-[#8D6E63] text-sm">
            <div className="max-7xl m-auto px-10 py-5">
                <div className="flex items-center justify-between rounded-md">
                    <div>
                        <Link href={'/'}>
                            <h3 className="">SHOPIFY</h3>
                        </Link>

                    </div>
                    <div className="flex items-center gap-14">
                        {pathName === '/Products' ?
                            <Link href={''}>
                                <div className="flex items-center gap-5">
                                    <ShoppingCart size={20} className="" />
                                    <span>0</span>
                                </div>
                            </Link>
                            :
                            <Link href={'/Products'} className="hover:text-[#bfbd92] transition-all ease-in-out">Products</Link>
                        }

                        {login ? <button className="text-[#FF6347] text-xs transition-all ease-in-out hover:text-[#bfbd92] border p-2 rounded-[40px] hover:border-[#FF6347] " onClick={() => { handleLogout() }}>LogOut</button> :
                            <Link href={pathName === '/signin' ? '/signup' : '/signin'} className="text-[#FF6347] text-xs transition-all ease-in-out hover:text-[#bfbd92] border p-2 rounded-[40px] hover:border-[#FF6347] ">{pathName === '/signin' ? 'SignUp' : 'SignIn'}
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}