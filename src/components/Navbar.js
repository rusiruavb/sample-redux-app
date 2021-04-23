import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Tech Club</a>
            Number of Members: 10
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;