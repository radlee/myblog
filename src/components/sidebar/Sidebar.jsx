import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://images.pexels.com/photos/18054269/pexels-photo-18054269/free-photo-of-woman-in-car-window-on-road-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Ea porro nihil ipsa facere.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-github"></i>
                <i className="sidebarIcon fa-brands fa-threads"></i>
                <i className="sidebarIcon fa-brands fa-behance"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar