import React from 'react'
import './profile_style.css'
import ImageThumbnail from './image-thumbnail.svg'



function Profile() {
    return (
        <div className='profile'>
            <form>
                <div className="profile-form">
                    <input className="profile-title" name="title" id="profileTitle" type="text" placeholder="Title" />
                    <textarea className="profile-body" rows="10" cols="30" placeholder="Body" />
                    <div className="formBottomBtn">
                        <div className="upload-btn">
                            <label htmlFor="file-upload" className="file-upload-circle">
                                <img src={ImageThumbnail} alt="upload icon" />
                            </label>
                            <input id="file-upload" type="file" />
                            <button className="profile-post-btn">Post</button>
                        </div>
                    </div>
                    <p className="profile-error">if an error if an errorif an error </p>
                </div>
            </form>
        </div>
    )
}

export default Profile
