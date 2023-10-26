import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

function Settings() {
  return (
    <div className='settings'>
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/3175979/pexels-photo-3175979.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Mafanga'/>
                    <label>Email</label>
                    <input type="email" placeholder='mafanga@gmail.com'/>
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    </div>
  )
}

export default Settings