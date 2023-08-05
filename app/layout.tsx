import "./globals.css";
import { ReactNode } from "react";
import { AuthProvider } from "@/context/authProvider";

export const metadata = {
  title: "Test",
  description: "Human resources CV acceptance website",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {/* <header className="w-full h-20 bg-main">
      <div className="max-width flex-between h-full">
        <h1 className="text-white text-xl uppercase">Test</h1>
      </div>
    </header> */}
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
