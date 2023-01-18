import './componet.css';
import {Link} from 'react-router-dom'
import{FaUserCircle} from 'react-icons/fa'
import {BiLogOutCircle} from 'react-icons/bi'
import{VscSourceControl} from 'react-icons/vsc'
import{GrDocumentPerformance} from 'react-icons/gr'
import{AiFillSetting} from 'react-icons/ai'
import{GoFileMedia} from 'react-icons/go'
import{GiStoneBlock} from 'react-icons/gi'
// import {Navigation} from 'react-minimal-side-navigation';
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { ProSidebarProvider } from "react-pro-sidebar";
// import "./styles.css";
import React, { useState,useEffect } from "react";
import axios from 'axios';
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine,
  
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem,
  
  //useProSidebar
} from "react-pro-sidebar";


function App(props) {
  
        const [collapsed, setCollapsed] = useState(false);

const [toggled, setToggled] = useState(false);

const handleCollapsedChange = () => {
  setCollapsed(!collapsed);
};
const handleToggleSidebar = (value) => {
  setToggled(value);
};
const[head,setHead] =useState('')   
    useEffect(()=>{

        axios.get('http://localhost:8082/api/settings/siteSettings').then((res)=>{
            setHead(res.data.heading)}).catch((err)=>{console.log(err)})  
    },[])
    console.log(head)


return (
  <ProSidebarProvider>
  <div className='sidebar'>
    <Sidebar
      className={`app ${toggled ? "toggled" : ""}`}
      style={{ height: "100%", position: "relative"}}
      collapsed={collapsed}
      toggled={toggled}
      handleToggleSidebar={handleToggleSidebar}
      handleCollapsedChange={handleCollapsedChange}
    >
      <main>
        <Menu>
          {collapsed ? (
            <MenuItem
              icon={<FiChevronsRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FiChevronsLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: "9px",
                  // textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 14,
                  letterSpacing: "1px"
                }}
              >
              {head}
              </div>
            </MenuItem>
          )}
          <hr />
        </Menu>

        <Menu>
          <a href="/admin"><MenuItem icon={<RiHome4Line />}>Dashboard</MenuItem></a>
          <SubMenu defaultOpen label={"Pages"} icon={<RiStackLine />}>
          <a href="/admin/collections/home"><MenuItem >Home Page</MenuItem></a>
          <a href="/admin/collections/about-page"><MenuItem >About Page</MenuItem></a>
          <a href="/admin/collections/contact-page"><MenuItem >Contact Page</MenuItem></a>
          <a href="/admin/collections/service-page"><MenuItem >service Page</MenuItem></a>
          <a href="/admin/collections/contact-page"><MenuItem >Contact Page</MenuItem></a>
          </SubMenu>

          <SubMenu defaultOpen label={"Blocks"} icon={<GiStoneBlock/>}>
          <a href="/admin/collections/header"><MenuItem >Header</MenuItem></a>
          <a href="/admin/collections/main"><MenuItem >Main</MenuItem></a>
          <a href="/admin/collections/footer"><MenuItem>Footer</MenuItem></a>
          </SubMenu>
          
          <a href="/admin/collections/users"><MenuItem icon={<RiTeamLine />}>Users</MenuItem></a>
          <a href="/admin/collections/users"><MenuItem icon={<VscSourceControl/>}>Roles</MenuItem></a>
          <MenuItem icon={<GrDocumentPerformance/>}>Enquiry</MenuItem>
          <a href="/admin/collections/media"><MenuItem icon={<GoFileMedia/>}>Media</MenuItem></a>

          <SubMenu defaultOpen label={"General"} icon={<AiFillSetting/>}>
          <MenuItem ><Link to='/admin/collections/settings'><li>Site Settings</li></Link></MenuItem>
          </SubMenu>

        </Menu>
      </main>
      <a href="/admin/account"><FaUserCircle className='logo' size={30}/></a>
      <a href="/admin/logout"><BiLogOutCircle className='logout' size={30}/></a>

    </Sidebar>

  </div>

    </ProSidebarProvider>
      
    
  );
}

export default App;