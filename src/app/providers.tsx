'use client';

import { I18nProvider } from '@jereztech/i18n-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import i18nConfig from '../../i18n.config';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <I18nProvider config={i18nConfig}>
                {children}
            </I18nProvider>
        </QueryClientProvider>
    );
}
