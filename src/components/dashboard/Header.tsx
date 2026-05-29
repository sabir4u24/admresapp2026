import { UserButton } from "@/components/dashboard/UserButton"
import { MobileSidebar } from "@/components/dashboard/MobileSidebar"

export const Header = () => {
  return (
    <div className="flex items-center p-4 border-b h-16 bg-white shadow-sm">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  )
}
