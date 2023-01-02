// import { render } from "@testing-library/react";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="navbar_component">
          <div className="navBar_logo"></div>
          <div className="navbar_locator">
            <div className="navbar_locatorImage"></div>
            <div className="navbar_location">New Delhi</div>
          </div>
          <div className="navBar_SearchComponent">
            <div>
              <select className="categories">
                <option value="">All</option>
                <option value="">Alexa Skills</option>
                <option value="">Amazon Devices</option>
                <option value="">Amazon Fashion</option>
                <option value="">Amazon Fresh</option>
                <option value="">Amazon Pharmacy</option>
                <option value="">Appliances</option>
                <option value="">Apps & Games</option>
                <option value="">Baby</option>
                <option value="">Beauty</option>
                <option value="">Books</option>
                <option value="">Car & Motorbike</option>
                <option value="">Clothing & Accessories</option>
                <option value="">Collectibles</option>
                <option value="">Computers & Accessories</option>
                <option value="">Deals</option>
                <option value="">Electronics</option>
                <option value="">Furniture</option>
                <option value="">Garden & Outdoors</option>
                <option value="">Gift Cards</option>
                <option value="">Grocery & Gourmet Foods</option>
                <option value="">Health & Personal Care</option>
                <option value="">Home & Kitchen</option>
                <option value="">Industrial & Scientific</option>
                <option value="">Jewellery</option>
                <option value="">Kindle Store</option>
                <option value="">Luggage & Bags</option>
                <option value="">Luxury Beauty</option>
                <option value="">Movies & TV Shows</option>
                <option value="">Music</option>
                <option value="">Musical Instruments</option>
                <option value="">Office Products</option>
                {/* <option value="">Pet Supplies</option> */}
                <option value="">Prime Video</option>
                <option value="">Shoes & Handbags</option>
                <option value="">Software</option>
              </select>
            </div>
            <div>
              <input type="text" className="navBar_SearchBox"></input>
            </div>
            <div className="searchBox">
              <div className="navBar_SearchIcon"></div>
            </div>
          </div>
          <div className="navbar_language"></div>
          <div className="navbar_signin">
            <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
            <div style={{ fontWeight: "bold" }}>Accounts & Lists</div>
          </div>
          <div className="navbar_orders">
            <div style={{ fontSize: "14px" }}>Orders</div>
            <div style={{ fontWeight: "bold" }}>& Returns</div>
          </div>
          <div className="navbar_Cart">
            <div className="cart_image" alt="Cart-Image"></div>
            <div className="cart_item">0</div>
            <div className="Cart">Cart</div>
          </div>
        </div>
        <div className="navbar_footer">
          <div className="navbar_footer_text">
            <FontAwesomeIcon icon="fa-solid fa-bars" />
            All
          </div>
          <div className="navbar_footer_text">Sell</div>
          <div className="navbar_footer_text">Best Sellers</div>
          <div className="navbar_footer_text">Mobiles</div>
          <div className="navbar_footer_text">Today's Deals</div>
          <div className="navbar_footer_text">Customer Services</div>
          <div className="navbar_footer_text">Electronics</div>
          <div className="navbar_footer_text">Prime</div>
          <div className="navbar_footer_text">Fashion</div>
          <div className="navbar_footer_text">Home & Kitchen</div>
          <div className="navbar_footer_text">New Releases</div>
          <div className="navbar_footer_text">Amazon Pay</div>
          <div className="navbar_advertisement">RAMSETU</div>
          <div className="Prime_join">Join Prime Now</div>
        </div>
      </div>
    );
  }
}
export default NavBar;
