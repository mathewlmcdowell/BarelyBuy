import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWishlistActive: false,
    };
  }

  toggleWishlist = () => {
    this.setState((prevState) => ({
      isWishlistActive: !prevState.isWishlistActive,
    }));
  };

  render() {
    const { isWishlistActive } = this.state;

    return (
      <div className="product">
        <h2>{this.props.name}</h2>
        <p>Price: ${this.props.price}</p>
        <button onClick={this.toggleWishlist}>
          {isWishlistActive ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    );
  }
}

export default Product;
