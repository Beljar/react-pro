import { NavLink } from 'react-router-dom';

import { useAuth } from 'features/authRouting';

import styles from './styles.module.scss';

const menuItemsPublic = [
  { label: 'Публичная', to: '/public' },
  { label: 'Портали', to: '/portal-showcase' },
  { label: 'Вход', to: '/login' },
];

const menuItemsProtected = [
  { label: 'Публичная', to: '/public' },
  { label: 'Портали', to: '/portal-showcase' },
  { label: 'Профиль', to: '/profile' },
];

export const NavigationMenu = () => {
  const { accessToken } = useAuth();
  const menuItems = accessToken ? menuItemsProtected : menuItemsPublic;
  return (
    <nav className={styles.navigation} aria-label="Главная навигация">
      <div className={styles.brand}>React Pro</div>

      <ul className={styles.list}>
        {menuItems.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                [styles.link, isActive ? styles.activeLink : '']
                  .filter(Boolean)
                  .join(' ')
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
