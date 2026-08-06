export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Render a completely bare layout — no Navbar, Footer, Clerk, or providers
    <>{children}</>
  );
}
