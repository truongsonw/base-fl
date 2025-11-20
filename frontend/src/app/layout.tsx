import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css'
import Wrapper from './wrapper';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <Wrapper>
          {children}
        </Wrapper>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;