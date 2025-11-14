import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser } from "@/lib/actions/auth";
import Form from "next/form";
import Link from "next/link";

export default function SignIn(){
    return (
        <section className="flex min-h-screen min-w-screen items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your username below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Button variant={'link'}>Sign up</Button>
                    </CardAction>
                </CardHeader>

                <CardContent>
                    <Form className="flex flex-col gap-6" action={loginUser}>
                        <div className="grid gap-2 space-y-2">
                            <Label htmlFor="username">Username <span className="text-red-500">*</span> </Label>
                            <Input id="username" name="username" placeholder="e.g., John Doe" required type="text"/>
                        </div>
                        <div className="grid gap-2 space-y-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password <span className="text-red-500">*</span> </Label>
                                <Link href={''} className="ml-auto inline-block text-sm underline-offset-4 hover:underline">Forgot your password?</Link>
                            </div>
                            <Input id="password" type="password" name="password" required placeholder="*********"/>
                        </div>
                        <Button type="submit" className="w-full">Login</Button>
                    </Form>
                </CardContent>

                <CardFooter className="flex-col gap-1">
                    {/* <Button type="submit" className="w-full">Login</Button> */}
                    {/* </Form> */}
                    <Button disabled variant={'outline'} className="w-full">Login with Google</Button>
                </CardFooter>
            </Card>
        </section>
    )
}