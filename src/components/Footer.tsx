'use client'

import { useI18n } from "@jereztech/i18n-react";

export default function Footer() {
    const { t } = useI18n('Navigation');
    return (
        <footer className="container">
            <p className="float-end">
                <a href="#">{t('back-to-top')}</a>
            </p>
            <p>Copyright &copy; {new Date().getFullYear()} <a href="https://jereztech.com">Jerez Tech</a></p>
        </footer>
    )
}
