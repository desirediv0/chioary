"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { motion, AnimatePresence } from "framer-motion"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Image from "next/image"

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export default function LoginPage() {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values) {
        setIsLoading(true)
        setError("")

        try {
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            })

            if (result.error) {
                setError(result.error)
                setIsLoading(false)
            } else {

                const navigationTimeout = setTimeout(() => {
                    setIsLoading(false)
                }, 5000)

                try {
                    router.push("/dashboard")
                    clearTimeout(navigationTimeout)
                } catch (navigationError) {
                    console.error("Navigation error:", navigationError)
                    setError("Failed to navigate to dashboard. Please try again.")
                    setIsLoading(false)
                    clearTimeout(navigationTimeout)
                }

                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            }
        } catch (error) {
            console.error("Login error:", error)
            setError("An unexpected error occurred. Please try again.")
            setIsLoading(false)
        }
    }

    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    return (
        // <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100">
        //     <motion.div
        //         initial={{ opacity: 0, y: 20 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 0.5 }}
        //         className="w-full max-w-md"
        //     >
        //         <Card className="border-none shadow-lg">
        //             <CardHeader className="space-y-2">
        //                 <motion.div
        //                     initial={{ scale: 0.9 }}
        //                     animate={{ scale: 1 }}
        //                     transition={{ duration: 0.3 }}
        //                 >
        //                     <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
        //                 </motion.div>
        //                 <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        //             </CardHeader>
        //             <CardContent>
        //                 <AnimatePresence>
        //                     {error && (
        //                         <motion.div
        //                             initial={{ opacity: 0, height: 0 }}
        //                             animate={{ opacity: 1, height: "auto" }}
        //                             exit={{ opacity: 0, height: 0 }}
        //                             transition={{ duration: 0.3 }}
        //                         >
        //                             <Alert variant="destructive" className="mb-4">
        //                                 <AlertDescription>{error}</AlertDescription>
        //                             </Alert>
        //                         </motion.div>
        //                     )}
        //                 </AnimatePresence>
        //                 <Form {...form}>
        //                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        //                         <motion.div
        //                             initial={{ x: -10, opacity: 0 }}
        //                             animate={{ x: 0, opacity: 1 }}
        //                             transition={{ duration: 0.3, delay: 0.1 }}
        //                         >
        //                             <FormField
        //                                 control={form.control}
        //                                 name="email"
        //                                 render={({ field }) => (
        //                                     <FormItem>
        //                                         <FormLabel>Email</FormLabel>
        //                                         <FormControl>
        //                                             <Input
        //                                                 placeholder="you@example.com"
        //                                                 {...field}
        //                                                 className="h-11"
        //                                             />
        //                                         </FormControl>
        //                                         <FormMessage />
        //                                     </FormItem>
        //                                 )}
        //                             />
        //                         </motion.div>
        //                         <motion.div
        //                             initial={{ x: -10, opacity: 0 }}
        //                             animate={{ x: 0, opacity: 1 }}
        //                             transition={{ duration: 0.3, delay: 0.2 }}
        //                         >
        //                             <FormField
        //                                 control={form.control}
        //                                 name="password"
        //                                 render={({ field }) => (
        //                                     <FormItem>
        //                                         <FormLabel>Password</FormLabel>
        //                                         <FormControl>
        //                                             <div className="relative">
        //                                                 <Input
        //                                                     type={showPassword ? "text" : "password"}
        //                                                     placeholder="••••••••"
        //                                                     {...field}
        //                                                     className="h-11 pr-10"
        //                                                 />
        //                                                 <button
        //                                                     type="button"
        //                                                     className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
        //                                                     onClick={togglePasswordVisibility}
        //                                                 >
        //                                                     {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
        //                                                 </button>
        //                                             </div>
        //                                         </FormControl>
        //                                         <FormMessage />
        //                                     </FormItem>
        //                                 )}
        //                             />
        //                         </motion.div>
        //                         <motion.div
        //                             whileHover={{ scale: 1.01 }}
        //                             whileTap={{ scale: 0.99 }}
        //                             initial={{ y: 10, opacity: 0 }}
        //                             animate={{ y: 0, opacity: 1 }}
        //                             transition={{ duration: 0.3, delay: 0.3 }}
        //                         >
        //                             <Button
        //                                 type="submit"
        //                                 className="w-full h-11 font-medium"
        //                                 disabled={isLoading}
        //                             >
        //                                 {isLoading ? (
        //                                     <div className="flex items-center justify-center space-x-2">
        //                                         <motion.div
        //                                             animate={{ rotate: 360 }}
        //                                             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        //                                             className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
        //                                         />
        //                                         <span>Logging in...</span>
        //                                     </div>
        //                                 ) : "Login"}
        //                             </Button>
        //                         </motion.div>
        //                     </form>
        //                 </Form>
        //             </CardContent>
        //             {/* <CardFooter className="flex justify-center">
        //                 <p className="text-sm text-gray-500">
        //                     Don&apos;t have an account?{" "}
        //                     <Link href="/register" className="text-primary font-medium hover:underline transition-colors">
        //                         Register
        //                     </Link>
        //                 </p>
        //             </CardFooter> */}
        //         </Card>
        //     </motion.div>
        // </div>



        <div className="min-h-screen flex flex-col md:flex-row bg-white">
            <div className="hidden md:block md:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-red-400/80 z-10" />
                <Image
                    src="/login-page.jpeg"
                    alt="Indian Classical Music Background"
                    fill
                    className="object-cover object-center opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 backdrop-blur-[2px] z-20 " />
                <motion.div
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="text-center space-y-8"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-white"
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Welcome to Adyashakti
                        </motion.h1>
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {/* <p className="text-xl md:text-2xl text-white/90 font-light">
                                Your Gateway to Indian Classical Music
                            </p> */}
                            <div className="flex items-center justify-center space-x-3">
                                <span className="h-[2px] w-12 bg-red-500" />
                                <span className="text-white/80 text-sm font-medium">
                                Adyashakti Parmarth Niketan Trust
                                </span>
                                <span className="h-[2px] w-12 bg-red-500" />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>



            {/* Right Section */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-6 bg-gradient-to-tr from-red-50 to-red-100">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    <Card className="border-none shadow-lg">
                        <CardHeader className="space-y-2">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
                            </motion.div>
                            <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <AnimatePresence>
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Alert variant="destructive" className="mb-4">
                                            <AlertDescription>{error}</AlertDescription>
                                        </Alert>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <motion.div
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="you@example.com"
                                                            {...field}
                                                            className="h-11"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                    >
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Password</FormLabel>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <Input
                                                                type={showPassword ? "text" : "password"}
                                                                placeholder="••••••••"
                                                                {...field}
                                                                className="h-11 pr-10"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
                                                                onClick={togglePasswordVisibility}
                                                            >
                                                                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                                                            </button>
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 0.3 }}
                                    >
                                        <Button
                                            type="submit"
                                            className="w-full h-11 font-medium"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <div className="flex items-center justify-center space-x-2">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                                                    />
                                                    <span>Logging in...</span>
                                                </div>
                                            ) : "Login"}
                                        </Button>
                                    </motion.div>
                                </form>
                            </Form>
                        </CardContent>
                        {/* <CardFooter className="flex justify-center">
                        <p className="text-sm text-gray-500">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="text-primary font-medium hover:underline transition-colors">
                                Register
                            </Link>
                        </p>
                    </CardFooter> */}
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
