import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

// import React from 'react'

function SidebarLeft(props) {
    return (
        <div className={`page-wrapper chiller-theme "+ ${props.sidebarToggleClass ? 'toggled' : ''} `}>
                <a id="show-sidebar" className="btn btn-sm btn-dark" href="#" onClick={props.sideBarToggle}>
                <FontAwesomeIcon icon={faBars} />
                </a>
            <nav id="sidebar" className="sidebar-wrapper">
              <div className="sidebar-content">
                <div className="sidebar-brand">
                  <a href="#">pro sidebar</a>
                  <div id="close-sidebar" onClick={props.sideBarToggle}>
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                </div>
                <div className="sidebar-header">
                  <div className="user-pic">
                    <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                      alt="User picture" />
                  </div>
                  <div className="user-info">
                    <span className="user-name">Jhon
                      <strong>Smith</strong>
                    </span>
                    <span className="user-role">Administrator</span>
                    <span className="user-status">
                      <i className="fa fa-circle"></i>
                      <span>Online</span>
                    </span>
                  </div>
                </div>
                <div className="sidebar-search">
                  <div>
                    <div className="input-group">
                      <input type="text" className="form-control search-menu" placeholder="Search..." />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-menu">
                  <ul>
                    <li className="header-menu">
                      <span>General</span>
                    </li>
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                        <span className="badge badge-pill badge-warning">New</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Dashboard 1
                              <span className="badge badge-pill badge-success">Pro</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">Dashboard 2</a>
                          </li>
                          <li>
                            <a href="#">Dashboard 3</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                        <span>E-commerce</span>
                        <span className="badge badge-pill badge-danger">3</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Products
          
                            </a>
                          </li>
                          <li>
                            <a href="#">Orders</a>
                          </li>
                          <li>
                            <a href="#">Credit cart</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="far fa-gem"></i>
                        <span>Components</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">General</a>
                          </li>
                          <li>
                            <a href="#">Panels</a>
                          </li>
                          <li>
                            <a href="#">Tables</a>
                          </li>
                          <li>
                            <a href="#">Icons</a>
                          </li>
                          <li>
                            <a href="#">Forms</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-chart-line"></i>
                        <span>Charts</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Pie chart</a>
                          </li>
                          <li>
                            <a href="#">Line chart</a>
                          </li>
                          <li>
                            <a href="#">Bar chart</a>
                          </li>
                          <li>
                            <a href="#">Histogram</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-globe"></i>
                        <span>Maps</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Google maps</a>
                          </li>
                          <li>
                            <a href="#">Open street map</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="header-menu">
                      <span>Extra</span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-book"></i>
                        <span>Documentation</span>
                        <span className="badge badge-pill badge-primary">Beta</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar"></i>
                        <span>Calendar</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-folder"></i>
                        <span>Examples</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="sidebar-footer">
                <a href="#">
                  <i className="fa fa-bell"></i>
                  <span className="badge badge-pill badge-warning notification">3</span>
                </a>
                <a href="#">
                  <i className="fa fa-envelope"></i>
                  <span className="badge badge-pill badge-success notification">7</span>
                </a>
                <a href="#">
                  <i className="fa fa-cog"></i>
                  <span className="badge-sonar"></span>
                </a>
                <a href="#">
                  <i className="fa fa-power-off"></i>
                </a>
              </div>
            </nav>
          
           
          </div>
          
        
    )
}

export default SidebarLeft;