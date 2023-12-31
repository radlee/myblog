import './write.css';

function Write() {
  return (
    <div className='write'>
      <img src="https://images.pexels.com/photos/952594/pexels-photo-952594.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="writeImg" />
        <form action="POST" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-angles-up"></i>
                </label>
                <input type="file" style={{ display: 'none' }} id="fileInput" />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea name="" id="" placeholder='Tell Your Story...' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write