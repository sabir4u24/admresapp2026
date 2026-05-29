import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"

export default async function DashboardPage() {
  const session = await auth()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Welcome back, {session?.user?.name || session?.user?.email}!</p>
      <p className="mb-4 text-sm text-gray-500">Role: {session?.user?.role}</p>

      <form
        action={async () => {
          "use server"
          await signOut({ redirectTo: '/login' })
        }}
      >
        <Button variant="outline" type="submit">Sign Out</Button>
      </form>
    </div>
  )
}
