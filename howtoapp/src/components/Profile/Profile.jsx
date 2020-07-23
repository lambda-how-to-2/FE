import React from 'react'
import './profile_style.css'
import Navigation from '../navigation/LoggedInNav'
import ImageThumbnail from './image-thumbnail.svg'



function Profile({ searchBox }) {
    return (
        <div className='profile'>
            <Navigation searchBox={searchBox} />
            <div className="conatianer">
                <div className="wrapper">
                    <form>
                        <input className="profile-title " name="title" id="profileTitle" type="text" placeholder="Title" />
                        <textarea className="profile-body" rows="10" cols="30" placeholder="Body" />
                        <div className="formBottomBtn">
                            <div className="upload-btn">
                                <label for="file-upload" class="file-upload-circle">
                                    <img src={ImageThumbnail} alt="" srcset="" />
                                </label>
                                <input id="file-upload" type="file" />
                            </div>
                            {/* <p className="form-error error">if an error </p> */}
                            <button className="post-btn">Post</button>
                        </div>
                        {/* <p className="form-error error">if an error </p> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile
