import { Button } from "@/components/ui/button"
import Link from "next/link"

type BreadcrumbProps = {
  product?: string
}


const Breadcrumb = ({product} : BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-3 px-10">
        <div>
            <Link href="/">Home</Link>
        </div>
        <div>
            <Link href="/products">Products</Link>
        </div>
        <div className="text-[13px] lg:text-[15px] text-gray-500">
            {product}
        </div>
    </div>
  )
}
export default Breadcrumb