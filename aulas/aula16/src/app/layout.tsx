import { ReactNode } from 'react';
import './globals.css';

type Props = {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body className='bg-black text-white'>
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