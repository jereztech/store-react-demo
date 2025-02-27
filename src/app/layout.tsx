import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import Providers from './providers';

export const metadata: Metadata = {
    title: 'Store React',
    description: 'Sample React project using the web version of @jereztech/react-elements',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" data-bs-theme="auto">
            <head></head>
            <body>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                    defer
                />
            </body>
        </html>
    )
}
