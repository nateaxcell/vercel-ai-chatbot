import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { SidebarNav } from "@/app/forms/components/sidebar-nav"
import { IconArrowLeft } from "@/components/ui/icons"
import { BrandLogo } from "@/components/ui/brandLogo"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/forms",
  },
  {
    title: "Account",
    href: "/forms/account",
  },
  {
    title: "Appearance",
    href: "/forms/appearance",
  },
  {
    title: "Organization Settings",
    href: "/forms/org-settings",
  },
  {
    title: "User Management",
    href: "/forms/user-managment",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="lg:ml-20">
      <div className="md:hidden">
        <Image
          src="/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <BrandLogo />
      <div>
        <a href='/'><Button variant="outline" className="pl-3"><IconArrowLeft />  Back to Chat</Button></a>
      </div>
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  )
}
