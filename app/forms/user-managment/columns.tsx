"use client"

import { ColumnDef } from "@tanstack/react-table"
import { User } from "@/lib/types"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<User>[] = [
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
  {
    accessorKey: "username",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "full_name",
    header: "full_name",
  },
  {
    accessorKey: "org_id",
    header: "org_id",
  },
  {
    accessorKey: "updated_at",
    header: "updated_at",
  },
]
