import { auth } from '@/auth'
import { DataTable } from '@/components/data-table'
import { columns } from './columns'
import { fetchUsers } from '@/lib/data'

export default async function userManagment() {
  const session = await auth()
  const users = await fetchUsers(session?.user.org_id)
//  const users = [
//   {
//     id: '1abd5866-0a03-4d46-b715-8cebfac39e52',
//     updated_at: null,
//     username: 'arjun.nair@telus.com',
//     full_name: 'Arjun Nair',
//     org_id: '1a584c12-657b-4180-b910-3ea1ebdbd2d3',
//     role: 'admin'
//   }
// ];
  // redirect to home if user is already logged in
  return (
    <div className="">
 <DataTable columns={columns} data={users} />


    </div>
  )
}
