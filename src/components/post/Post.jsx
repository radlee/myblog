import './post.css'

function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/18254555/pexels-photo-18254555/free-photo-of-subway-train-in-berlin-germany.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>
            <hr />
            <span className="postDate">1 Hour Ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam odio esse mollitia architecto qui ea repudiandae, molestias debitis hic et quas aspernatur quo cum vero similique voluptatum consectetur aliquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam odio esse mollitia architecto qui ea repudiandae, molestias debitis hic et quas aspernatur quo cum vero similique voluptatum consectetur aliquam.</p>
    </div>
  )
}

export default Post