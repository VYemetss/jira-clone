import {
    CardContent,
    Card,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {DottedSeparator} from "@/components/dotted-separator";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import Link from "next/link"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
    email: z.string().trim().min(1, "Required").email(),
    password: z.string().min(1, 'Required'),
});

export const SignInCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({values})
    };
    return (
        <Card className={'w-full h-full md:w-[487px] border-none shadow-none'}>
            <CardHeader className={'flex items-center justify-center text-center p-7'}>
                <CardTitle className={'text-2xl'}>Welcome Back!</CardTitle>
            </CardHeader>
            <div className={'px-7'}>
                <DottedSeparator/>
            </div>
            <CardContent className={'p-7'}>
                <Form {...form}>
                    <form className={'space-y-4'}
                    onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            name={'email'}
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                            <Input
                                {...field}
                                type={'email'}
                                placeholder={'Enter email address'}
                            />
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                        )}
                        />
                        <FormField
                            name={'password'}
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type={'password'}
                                            placeholder={'Enter password'}
                                        />
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        />
                        <Button disabled={false} size={'lg'} className={'w-full'}>Log in</Button>
                    </form>
                </Form>
            </CardContent>
            <div className={'px-7'}>
                <DottedSeparator></DottedSeparator>
            </div>
            <CardContent className={'p-7 flex flex-col gap-y-4'}>
                <Button disabled={false} variant={'secondary'} size={'lg'} className={'w-full'}>
                    <FcGoogle className={'mr-2 size-5'}></FcGoogle>
                    Login with Google
                </Button>
                <Button disabled={false} variant={'secondary'} size={'lg'} className={'w-full'}>
                    <FaGithub className={'mr-2 size-5'}></FaGithub>
                    Login with Github
                </Button>
            </CardContent>
            <div className={'px-7'}>
                <DottedSeparator/>
            </div>
            <CardContent className={"p-7 flex justify-center items-center"}>
                <p>Don&apos;t have an account?</p>
                <Link href={"/sign-up"}>
                    <span className={'text-blue-700'}>&nbsp;Sign Up</span>
                </Link>
            </CardContent>
        </Card>
    );
};