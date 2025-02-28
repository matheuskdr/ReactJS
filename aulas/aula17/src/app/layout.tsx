import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";

type Props = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: {
    template: '%s - MATHEUS',
    default: 'MATHEUS'
  }
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body className="bg-black text-white">
        <h1>Meu primeiro projeto next</h1>
        <hr />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}

export default Layout;
