import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('sorryPageNotFound')}
            {' '}
            <Link to="/">{t('homePage')}</Link>
        </div>
    );
};

export default NotFoundPage;
