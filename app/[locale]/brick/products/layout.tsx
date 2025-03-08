export default function Layout({ children: children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-screen-xl">{children}</main>
  )
}