export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>above the child</div>
      {children}
      <div>below the child</div>
    </>
  );
}
