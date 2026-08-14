import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

const menuItems = [
  { label: 'Мои задачи', to: '/tasks' },
  { label: 'Регистрация', to: '/signup' },
  { label: 'Подписка', to: '/subscribe' },
];

export const NavigationMenu = () => {
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
