'use client'

import { useI18n } from "@jereztech/i18n-react";

export default function Carousel() {
    const { t } = useI18n('Carousel');
    return (
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active slide1">
                    <svg
                        className="bd-placeholder-img"
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                    >
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                    </svg>
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>{t('slide1')}</h1>
                            <p className="opacity-75">
                                {t('slide1-desc')}
                            </p>
                            <p>
                                <a className="btn btn-lg btn-primary" href="#">
                                    {t('slide1-cta')}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item slide2">
                    <svg
                        className="bd-placeholder-img"
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                    >
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                    </svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>{t('slide2')}</h1>
                            <p>{t('slide2-desc')}</p>
                            <p>
                                <a className="btn btn-lg btn-primary" href="#">
                                    {t('slide2-cta')}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item slide3">
                    <svg
                        className="bd-placeholder-img"
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                    >
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                    </svg>
                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>{t('slide3')}</h1>
                            <p>{t('slide3-desc')}</p>
                            <p>
                                <a className="btn btn-lg btn-primary" href="#">
                                    {t('slide3-cta')}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">{t('previous')}</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">{t('next')}</span>
            </button>
        </div>
    )
}
