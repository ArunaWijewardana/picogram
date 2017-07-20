import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <Icon />
          <Logo name="Aruna" />
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          Page not found.
        </main>
        <footer className="footer">
          <p>&copy; 2017 Aruna</p>
        </footer>
      </div>
    );
  }
}

export default Main;
