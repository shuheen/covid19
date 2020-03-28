import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Topbar from '../topbar/topbar';
import TopRoutes from '../../routes/topRoutes';
import RootRoutes from '../../routes/rootRoutes';

// import SidebarLeft from './sidebar'
export default class fullLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidebar:false,
            topbar:false
        }
    }
    sideBarToggle(){
        // alert()
        this.setState({"sidebar":!this.state.sidebar})
    }
    render() {
        return (
            <div>
                <Topbar topBarToggleClass={this.state.topbar} routes={TopRoutes}/>
                {/* <SidebarLeft sidebarToggleClass={this.state.sidebar} sideBarToggle={this.sideBarToggle.bind(this)}/> */}

                <div className="page-wrapper d-block">
					<div className="page-content container-fluid">
						
						<Switch>
							{
								RootRoutes.map((prop, key) => {
									if (prop.redirect) {
										return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
									}
									else {
										return <Route path={prop.path} component={prop.component} key={key} />
									}
								
							})}
						</Switch>
					</div>
					{/* <Footer /> */}
				</div>
            </div>
        )
    }
}
