import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Sidebar = ({isVisible , toggleSidebar}) => {
  const [isSubMenuOneOpen, setIsSubMenuOneOpen] = useState(false);
  const [isSubMenuTwoOpen , setIsSubMenuTwoOpen] = useState(false);
  const [isSubMenuThreeOpen , setIsSubMenuThreeOpen] = useState(false);
  const [isSubMenuFourOpen , setIsSubMenuFourOpen] = useState(false);
  const [isSubMenuFiveOpen , setIsSubMenuFiveOpen] = useState(false)

  const SubMenuToggle = (menu) => {
    if( menu === 'Layouts'){
      setIsSubMenuOneOpen(!isSubMenuOneOpen)
    }
    else if(menu === 'Account'){
      setIsSubMenuTwoOpen(!isSubMenuTwoOpen)
    }
    else if(menu === 'Connection'){
      setIsSubMenuThreeOpen(!isSubMenuThreeOpen)
    }
    else if(menu === 'Misc'){
      setIsSubMenuFourOpen(!isSubMenuFourOpen)
    }
    else if(menu === 'Interface'){
      setIsSubMenuFiveOpen(!isSubMenuFiveOpen)
    }
  
  };


    return (
      <>
    {
      isVisible && (
    <aside id="layout-menu" className={`layout-menu menu-vertical menu bg-menu-theme ${isVisible ? 'sidebar-open' : false}`}
   
    >
      <div className="app-brand demo">
        <a href="#" className="app-brand-link">
          {/* <span className="app-brand-logo demo">
            <svg width={25} viewBox="0 0 25 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <path d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z" id="path-1" />
                <path d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z" id="path-3" />
                <path d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z" id="path-4" />
                <path d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z" id="path-5" />
              </defs>
              <g id="g-app-brand" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
                  <g id="Icon" transform="translate(27.000000, 15.000000)">
                    <g id="Mask" transform="translate(0.000000, 8.000000)">
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-1" />
                      </mask>
                      <use fill="#696cff" xlinkHref="#path-1" />
                      <g id="Path-3" mask="url(#mask-2)">
                        <use fill="#696cff" xlinkHref="#path-3" />
                        <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-3" />
                      </g>
                      <g id="Path-4" mask="url(#mask-2)">
                        <use fill="#696cff" xlinkHref="#path-4" />
                        <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-4" />
                      </g>
                    </g>
                    <g id="Triangle" transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) ">
                      <use fill="#696cff" xlinkHref="#path-5" />
                      <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-5" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span> */}
            <i className="fa-brands fa-squarespace fs-2" />
          <span className="app-brand-text demo menu-text text-uppercase fw-bolder ms-2">Suvidha</span>
        </a>
        {/* <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
        </a> */}
        <a href="#" className='layout-menu-toggle menu-link  ms-auto'  onClick={toggleSidebar}>
        <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>

      </div>
      {/* <div className="menu-inner-shadow" /> */}
      <div className="scroll-view scrollbar-secondary">

      <ul className="menu-inner">
        {/* Dashboard */}
        <li className="menu-item active">
          <Link to="/" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div data-i18n="Analytics">Home</div>
          </Link>
        </li>


        <li className="menu-item mt-4">
          <Link to="/Users" className="menu-link">
            <i className="menu-icon tf-icons fa-solid fa-user" />
            <div data-i18n="Users">Users</div>
          </Link>
        </li>

        

        <li className="menu-item mt-2">
          <Link to="/UsersKYCSheet" className="menu-link">
            <i className="menu-icon tf-icons fa-solid fa-file-circle-check" />
            <div data-i18n="Explore">Users - KYC</div>
          </Link>
        </li>

        {/* <li className="menu-item mt-2">
          <Link to="/GenerateImageArt" className="menu-link">
            <i className="menu-icon tf-icons fa-solid fa-compass" />
            <div data-i18n="Explore">Tabular</div>
          </Link>
        </li> */}


        <li className="menu-header small text-uppercase" ><span className="menu-header-text">LOANS</span></li>

      

        <li className="menu-item mt-2">
          <Link to="/LoanSheet" className="menu-link">
            <i class="menu-icon tf-icons fa-solid fa-hand-holding-dollar"/>
            <div data-i18n="AI Advisor">Loan List</div>
          </Link>
        </li>
        
       {/* <li className="menu-item mt-2">
          <Link to="/AIAdvisorSection" className="menu-link">
            <i className="menu-icon tf-icons fa-solid fa-paperclip" />
            <div data-i18n="AI Advisor">AI Advisor</div>
          </Link>
        </li> */}

            {/* 
        <li className="menu-item mt-2">
          <Link to="/AIChatSection" className="menu-link">
            <i className="menu-icon tf-icons fa-solid fa-headphones" />
            <div data-i18n="AI Chat">AI Chat</div>
          </Link>
        </li>
   
        <li className="menu-item mt-2">
          <Link to="/AISnapShotSection" className="menu-link">
            <i className="menu-icon tf-icons fa-solid fa-paper-plane" />
            <div data-i18n="AI Snapshot">AI Snapshot</div>
          </Link>
        </li> */}



        {/* Layouts */}
        {/* <li className="menu-item">
          <a href="#b" className={`menu-link menu-toggle ${isSubMenuOneOpen ? 'open' : ''}`}  
            onClick={() => SubMenuToggle('Layouts')}  style={{cursor:"pointer"}}>
            <i className="menu-icon tf-icons bx bx-layout" />
            <div data-i18n="Layouts">Layouts</div>
          </a>
          <ul className={`menu-sub ${isSubMenuOneOpen ? 'open' : 'close'}`}>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <div data-i18n="Without menu">Without menu</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <div data-i18n="Without navbar">Without navbar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <div data-i18n="Container">Container</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <div data-i18n="Fluid">Fluid</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <div data-i18n="Blank">Blank</div>
              </a>
            </li>
          </ul>
        </li>

        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Pages</span>
        </li>


        <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li>
        <li className="menu-item">
          <Link to="/Forms" className="menu-link">
            <i className="menu-icon tf-icons bx bx-collection" />
            <div data-i18n="Basic">Cards</div>
          </Link>
        </li> */}
{/* 

        <li className="menu-item">
          <a href="#h" className="menu-link menu-toggle"
          onClick={() => SubMenuToggle('Interface')} style={{cursor:"pointer"}}
          >
            <i className="menu-icon tf-icons bx bx-box" />
            <div data-i18n="User interface">User interface</div>
          </a>
          <ul className={`menu-sub ${isSubMenuFiveOpen ? 'open' : 'closeFive'}`}
          >
            <li className="menu-item">
              <a href="ui-accordion.html" className="menu-link">
                <div data-i18n="Accordion">Accordion</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-alerts.html" className="menu-link">
                <div data-i18n="Alerts">Alerts</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-badges.html" className="menu-link">
                <div data-i18n="Badges">Badges</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-buttons.html" className="menu-link">
                <div data-i18n="Buttons">Buttons</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-carousel.html" className="menu-link">
                <div data-i18n="Carousel">Carousel</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-collapse.html" className="menu-link">
                <div data-i18n="Collapse">Collapse</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-dropdowns.html" className="menu-link">
                <div data-i18n="Dropdowns">Dropdowns</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-footer.html" className="menu-link">
                <div data-i18n="Footer">Footer</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-list-groups.html" className="menu-link">
                <div data-i18n="List Groups">List groups</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-modals.html" className="menu-link">
                <div data-i18n="Modals">Modals</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-navbar.html" className="menu-link">
                <div data-i18n="Navbar">Navbar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-offcanvas.html" className="menu-link">
                <div data-i18n="Offcanvas">Offcanvas</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                <div data-i18n="Pagination & Breadcrumbs">Pagination &amp; Breadcrumbs</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-progress.html" className="menu-link">
                <div data-i18n="Progress">Progress</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-spinners.html" className="menu-link">
                <div data-i18n="Spinners">Spinners</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-tabs-pills.html" className="menu-link">
                <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-toasts.html" className="menu-link">
                <div data-i18n="Toasts">Toasts</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-tooltips-popovers.html" className="menu-link">
                <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-typography.html" className="menu-link">
                <div data-i18n="Typography">Typography</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-copy" />
            <div data-i18n="Extended UI">Extended UI</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
                <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="extended-ui-text-divider.html" className="menu-link">
                <div data-i18n="Text Divider">Text Divider</div>
              </a>
            </li>
          </ul>
        </li> */}

        {/* <li className="menu-item">
          <a href="icons-boxicons.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-crown" />
            <div data-i18n="Boxicons">Boxicons</div>
          </a>
        </li>

        <li className="menu-item">
          <Link to="/Sheets" className="menu-link">
            <i className="menu-icon tf-icons bx bx-table" />
            <div data-i18n="Tables">Tables</div>
          </Link>
        </li> */}
        {/* Misc */}
        <li className="menu-header small text-uppercase" ><span className="menu-header-text">Misc</span></li>
        <li className="menu-item">
          <a href="#r" target="_blank" className="menu-link">
            <i className="menu-icon tf-icons bx bx-support" />
            <div data-i18n="Support">Support</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="#r" target="_blank" className="menu-link">
            <i className="menu-icon tf-icons bx bx-file" />
            <div data-i18n="Documentation">Documentation</div>
          </a>
        </li>
      </ul>

    </div>
    </aside>
      )
    }

    </>
  )
}

export default Sidebar