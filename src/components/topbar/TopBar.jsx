import './topbar.css'

function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-github"></i>
            <i className="topIcon fa-brands fa-threads"></i>
            <i className="topIcon fa-brands fa-behance"></i>
        </div>
        <div className='topCenter'>
            <ul className="topList">
                <li className="topListItem">Home</li>
                <li className="topListItem">About</li>
                <li className="topListItem">Contact</li>
                <li className="topListItem">Write</li>
                <li className="topListItem">Logout</li>
            </ul>
        </div>
        <div className='topRight'>
            <img className='topImg' src="https://avatars.githubusercontent.com/u/17250994?v=4" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar