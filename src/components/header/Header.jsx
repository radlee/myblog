import './header.css';

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm' >React & Node</span >
            <span className='headerTitleLg' >Blog</span >
        </div> 
        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2013/09/bg-9-full.jpg" alt="" className="headerImg" />
    </div>
  )
}

export default Header