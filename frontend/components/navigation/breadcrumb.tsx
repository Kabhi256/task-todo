import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";


export function BreadCrumbWithCustomSeparator(){
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={'#'}>Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator/>
                
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={'/todo'}>Todo</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            
            </BreadcrumbList>
        </Breadcrumb>
    )
}