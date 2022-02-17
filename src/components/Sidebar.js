import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

// components
import Avatar from './Avatar';

// styles & images
import './Sidebar.css';
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';

export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <img
            className="back"
            src="/mfm.jpg"
            alt="Made for More"
            width="150"
          />
        </div>
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
            <li>
              <span>
                <em>Coding Resources</em>
              </span>
            </li>
            <li>
              <a
                href="https://hourofcode.com/us"
                target="_blank"
                rel="noreferrer"
              >
                <span>Hour of Code</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.codesters.com/curriculum/hour-of-code-2019/Basketball/1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Code a Basketball Game</span>
              </a>
            </li>
            <li>
              <a
                href="https://csfirst.withgoogle.com/c/cs-first/en/game-design/overview.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Game Design</span>
              </a>
            </li>
            <li>
              <a
                href="https://csfirst.withgoogle.com/c/cs-first/en/game-design/overview.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>MFM Dojo Source Code</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
