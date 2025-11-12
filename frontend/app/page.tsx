import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Index(){
    return (
        <section className="min-h-screen flex flex-col gap-4 items-center justify-center">
            <div className="container mx-auto max-w-7xl text-center space-y-4">
                <h1 className="text-4xl font-bold mb-4">Todo Home page</h1>
                <div className="max-w-4xl mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dicta nam accusamus illum facere, molestiae sed at perspiciatis, voluptatem nostrum odit suscipit vero fugit omnis repellat voluptatum neque aspernatur ad error! Adipisci laborum, officiis enim debitis totam autem ex et.</div>
                <div className="flex gap-4 items-center justify-center">
                <Button>
                    <Link href={'/sign-up'}>Sign up</Link>
                </Button>
                <Button variant={'outline'}>
                    <Link href={'/todo'}>Browse Todos</Link>
                </Button>
                </div>
            </div>
        </section>
    )
}