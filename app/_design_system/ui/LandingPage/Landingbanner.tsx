import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LandingBanner = () => {
    return (
        <div className="container m-auto pt-40 sm:px-5 md:px-32 h-screen">
            <div className="flex flex-col items-center text-center gap-10">
                <h3 className="text-5xl font-bold tracking-wider text-[#3E2723]">GET YOUR CAKES</h3>
                <p className="text-[#8D6E63] tracking-tight">
                    Ready to make your celebration extra special?
                    Browse our selection, customize your order, and
                    let us bring sweetness to your doorstep.
                    At Sweet Bliss Cakes, every slice is a celebration.
                </p>
                <Link href='/Products'>
                    <Button className="bg-[#FF6347] text-[#FFFFFF] hover:bg-[#FFADAD]">Order Your Cake Today</Button>
                </Link>
            </div>
        </div>
    )
}
