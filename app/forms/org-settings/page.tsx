import { Separator } from "@/components/ui/separator"
import { OrgForm } from "@/app//forms/org-settings/org-form"
import { updateOrg } from "@/lib/data"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Organization</h3>
        <p className="text-sm text-muted-foreground">
          This settings get applied to all users of your organization.
        </p>
      </div>
      <Separator />
      <OrgForm updateOrg={updateOrg}/>
    </div>
  )
}
