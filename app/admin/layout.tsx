import type React from "react"
import SimpleAdminLayout from "./simple-layout"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <SimpleAdminLayout>{children}</SimpleAdminLayout>
}
