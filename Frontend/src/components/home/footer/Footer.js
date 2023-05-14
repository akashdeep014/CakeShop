
import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {Link} from 'react-router-dom';

export function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <div>
            <img
          
          />

            </div>
            <h1 className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4><i>Quik Links</i></h4>
            <ui className="list-unstyled">
              <li><Link to={"/"}aria-current="page"className="text active hover_line" style={{textDecoration:'none'} }>Home</Link></li>
              <li><Link to={"/vendorsList/mumbai"}className="text active hover_line" style={{textDecoration:'none'} }>Cake List</Link></li>
              <li > <Link to={"/about"}className="text active hover_line" style={{textDecoration:'none'} }> About us </Link></li>
            </ui>
          </div>
          <div className="col">
            <h4><i>Favourites</i></h4>
            <ui className="list-unstyled">
              <li><Link to={"/vendorsList/Strawberry Cake"}className="text active hover_line" style={{textDecoration:'none'} }>Strawberry Cake</Link></li>
              <li><Link to={"/vendorsList/Chocalate Cake"}className="text active hover_line" style={{textDecoration:'none'} }>Chocalate Cake</Link></li>
              <li><Link to={"/vendorsList/Blueberry Cake"}className="text active hover_line" style={{textDecoration:'none'} }>Blueberry Cake</Link></li>
              <li><Link to={"/vendorsList/Vanilla Cake"}className="text active hover_line" style={{textDecoration:'none'} }>Vanilla Cake</Link></li>
              <li><Link to={"/vendorsList/Sponge Cake"}className="text active hover_line" style={{textDecoration:'none'} }>Sponge Cake</Link></li>
              <li><Link to={"/vendorsList/Coffee Cake"}className="text active hover_line" style={{textDecoration:'none'} }>Coffee Cake</Link></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col"> 
          
            <h5>"As Long as you know how to bake life is sure to be sweet"</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Cup Shop 
          </p>
        </div>
      </div>
    </div>
  );
} 
export default Footer;