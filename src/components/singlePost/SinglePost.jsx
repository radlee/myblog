import './singlePost.css';

function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/18619106/pexels-photo-18619106/free-photo-of-portrait-of-african-woman-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Some Amazing Heading to the Post
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Mafanga</b></span>
                <span className="singlePostDate">1 Hour ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur 
                ratione, impedit, sunt eligendi odio iure itaque non ullam commodi magni 
                deserunt in? Totam sint, sapiente libero perspiciatis laudantium nulla 
                quam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Consequuntur ratione, impedit, sunt eligendi odio iure itaque non ullam 
                commodi magni deserunt in? Totam sint, sapiente libero perspiciatis 
                laudantium nulla quam. Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Consequuntur ratione, impedit, sunt eligendi odio 
                iure itaque non ullam commodi magni deserunt in? Totam sint, sapiente 
                libero perspiciatis laudantium nulla quam. Lorem ipsum dolor sit amet 
                consectetur, adipisicing elit. Consequuntur ratione, impedit, sunt 
                eligendi odio iure itaque non ullam commodi magni deserunt in? Totam 
                sint, sapiente libero perspiciatis laudantium nulla quam. Lorem ipsum 
                dolor sit amet consectetur, adipisicing elit. Consequuntur ratione, 
                impedit, sunt eligendi odio iure itaque non ullam commodi magni deserunt 
                in? Totam sint, sapiente libero perspiciatis laudantium nulla quam.</p>
        </div>
    </div>
  )
}

export default SinglePost