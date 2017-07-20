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
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="unsplash" />
          <Like />
        </main>
        <footer className="footer">
          <p>&copy; 2017 Aruna</p>
        </footer>
      </div>
    );
  }
}

export default Main;
