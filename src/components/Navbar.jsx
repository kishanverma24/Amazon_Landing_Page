import React from 'react'
function Navbar() {
  return (
<header>
        <div className="navbar">
            <div className="nav-logo border">
                <div className="logo"></div>
            </div>
            <div className="nav-adress1st border">
                <p className="add-first">Deliver to</p>
                <div className="add-icon">
                    <svg className="location-icon" >
                        <path
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <p className="add-sec">India</p>
                </div>
            </div>
            <div className="nav-search border">
                <select className="search-select">
                    <option>All</option>
                </select>
                <input placeholder="Search Amazon" className="search-input"/>
                <div className="search-icon">
                  <img className="search-icon-main" src={"../public/search icon.png"} alt=""/>
                </div>
            </div>
            <div className="nav-signin border">
                <p><span style={{cursor:"pointer"}}>Hello,sign in</span></p>
                <p className="nav-second">Account & Lists</p>
            </div>

            <div className="nav-return border">
                <p><span>Returns</span></p>
                <p className="nav-second">&Orders</p>
            </div>
            <div className="nav-cart border">
                <img className="nav-cart-img" src="../shopping-cart.png" alt=""/>
                <h4 className="Cart">Cart</h4>

            </div>
        </div>
        <div className="panel ">
            <div className="panel-all border" >
               <i><img className="panel-all-icon" src="../menu-bar.png" alt=""/></i>
            </div>
            <div className="panel-ops">
                <p className="border">Today's Deals</p>
                <p className="border">Customer Service</p>
                <p className="border">Registry</p>
                <p className="border">Gift Cards</p>
                <p className="border">Sell</p>
            </div>
            <div className="panel-deals border">
                Shop deals in Electronics
            </div>
        </div>
    </header> 
)
}

export default Navbar;