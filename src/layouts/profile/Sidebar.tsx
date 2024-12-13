import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaHome, FaUsers } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-1/4 border-r border-gray-300 pr-4 dark:border-gray-700">
      {/* Título principal */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4 dark:text-gray-200">
        {t('profile.sideTitle')}
      </h2>

      {/* Primera sección de enlaces */}
      <ul className="space-y-2">
        <li className="flex items-center text-orange-500 font-medium dark:text-gray-200">
          <FaUser className="mr-2" /> {t('profile.account')}
        </li>
      </ul>

      {/* Título secundario */}
      <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4 dark:text-gray-200">
        {t('profile.sideSecondTitle')}
      </h2>

      {/* Segunda sección de enlaces */}
      <ul className="space-y-2">
        {/* Apartamentos */}
        <li className="flex items-center">
          <a 
            href="/profile/my-apartments" 
            className="flex items-center text-gray-800 dark:text-gray-200 hover:text-orange-500 transition-colors"
          >
            <FaHome className="mr-2" /> {t('profile.apartments')}
          </a>
        </li>

        {/* Ofertas */}
        <li className="flex items-center">
          <a 
            href="/profile/my-offers" 
            className="flex items-center text-gray-800 dark:text-gray-200 hover:text-orange-500 transition-colors"
          >
            <FaUsers className="mr-2" /> {t('profile.offers')}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

