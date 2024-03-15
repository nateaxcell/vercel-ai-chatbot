"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { auth } from '@/auth'
import Image from "next/image"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import { updateOrg } from "@/lib/data"

const orgFormSchema = z.object({
    organization: z
        .string(),
    brandLogo: z
        .string()
        .optional(),
})

type OrgFormValues = z.infer<typeof orgFormSchema>

// This can come from your database or API.


export function OrgForm({updateOrg}: any) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const router = useRouter();
    const form = useForm<OrgFormValues>({
        resolver: zodResolver(orgFormSchema),
        mode: "onChange",
    })

    async function onSubmit(data: OrgFormValues) {
        console.log(data)
        let updateData = await updateOrg({
            name: data.organization,
            updated_at: null,
            org_id: user.org_id,
            status: "active"
        })
        router.push('/')
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="lg:max-w-2xl space-y-8">
                <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization Name</FormLabel>
                            <FormControl>
                                <Input placeholder={user.org_name} {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your login email. You can login through any SSO provider with the same email id.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={true}
                    name="brandLogo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization</FormLabel>
                            <FormControl>
                                <Input placeholder='/unicorn.png' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Image
                    src="/unicorn_logo.png"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
                <Button
                // onClick={e => {
                //     e.preventDefault()
                //     console.log(OrgFormValues)
                //     router.refresh()
                //     router.push('/')
                // }}
                type="submit">Update Settings</Button>
            </form>
        </Form>
    )
}
