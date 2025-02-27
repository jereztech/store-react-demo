'use client'

import { useI18n } from "@jereztech/i18n-react";
import Image from "next/image";

export default function Header() {

    const { t, setLocale } = useI18n('Navigation');

    return (
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex me-3" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder={t('search')}
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                {t('search')}
                            </button>
                        </form>
                        <div className="d-flex">
                            <Image
                                src="https://flagcdn.com/h60/us.png"
                                width={32}
                                height={24}
                                alt="US flag"
                                className="me-2"
                                onClick={() => setLocale('en-US')}
                            />
                            <Image
                                src="https://flagcdn.com/h60/es.png"
                                width={32}
                                height={24}
                                alt="ES flag"
                                onClick={() => setLocale('es-ES')}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
