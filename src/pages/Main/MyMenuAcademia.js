import React from 'react';
import { Link } from 'react-scroll';
import { StyledMenu } from './Styles';

const styles = {
  bmBurgerButton: {
    right: '10%',
    top: '3%',
    position: 'fixed',
    width: '30px',
    height: '24px',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    right: '0px',
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#333',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#333',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <StyledMenu
        right
        noOverlay
        styles={styles}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link
          to="Home"
          className="bm-item"
          spy
          smooth
          duration={500}
          onClick={() => this.closeMenu()}
        >
          HOME
        </Link>
        <Link
          to="Home"
          className="bm-item"
          spy
          smooth
          duration={500}
          onClick={() => this.closeMenu()}
        >
          SOBRE
        </Link>
        <Link
          to="Vantagens"
          className="bm-item"
          spy
          smooth
          duration={500}
          onClick={() => this.closeMenu()}
        >
          DIFERENCIAIS
        </Link>
        <Link
          to="Apartamentos"
          className="bm-item"
          spy
          smooth
          duration={500}
          onClick={() => this.closeMenu()}
        >
          COLIVINGS
        </Link>
        <Link
          to="Contato"
          className="bm-item"
          spy
          smooth
          duration={500}
          onClick={() => this.closeMenu()}
        >
          CONTATO
        </Link>
      </StyledMenu>
    );
  }
}
export default Example;
