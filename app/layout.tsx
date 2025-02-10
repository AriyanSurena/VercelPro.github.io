import "@/app/ui/global.css";
import { josefinSans } from "./ui/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefinSans.className} style={{ fontWeight:400 }}>{children}</body>
    </html>
  );
}
