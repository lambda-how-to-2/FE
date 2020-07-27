import React, { useEffect } from "react"
import axios from "axios"
import "./profile_style.css"
import ImageThumbnail from "./image-thumbnail.svg"
import { useHistory } from "react-router-dom"

function Profile(props) {
  const initialState = { title: "", body: "", image: "" }
  const [imagesFile, setImageFile] = React.useState("")
  const [imageName, setImageName] = React.useState("")
  const [howToInputValue, setHowToInputValue] = React.useState(initialState)

  const history = useHistory()

  const handleInputChanges = e => {
    const inputValue = {
      ...howToInputValue,
      [e.target.name]: e.target.value,
    }
    setHowToInputValue(inputValue)
  }

  const handleImageUpload = e => {
    const file = e.target.files
    const data = new FormData()
    data.append("file", file[0])
    data.append("upload_preset", "howtos")

    setImageName(file[0].name)
    setImageFile(data)
  }

  const submitHowToImage = () => {
    axios({
      method: "post",
      url: "https://api.cloudinary.com/v1_1/brunopaula/image/upload",
      data: imagesFile,
    }).then(res => {
      setHowToInputValue({
        ...howToInputValue,
        image: res.data.secure_url,
      })
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    submitHowToImage()

    console.log("Data Sent", howToInputValue)
  }

  return (
    <div className='profile'>
      <form onSubmit={handleFormSubmit}>
        <div className='profile-form'>
          <input
            className='profile-title'
            name='title'
            id='profileTitle'
            type='text'
            placeholder='Title'
            onChange={handleInputChanges}
          />
          <textarea
            className='profile-body'
            rows='10'
            cols='30'
            placeholder='Body'
            name='body'
            onChange={handleInputChanges}
          />
          <div className='formBottomBtn'>
            <div className='upload-btn'>
              <label htmlFor='file-upload' className='file-upload-circle'>
                <img src={ImageThumbnail} alt='upload icon' />
              </label>
              <p className='image-name'>{imageName}</p>
              <input
                id='file-upload'
                type='file'
                data-cloudinary-field='image_id'
                data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
                onChange={handleImageUpload}
              />
              <button className='profile-post-btn'>Post</button>
            </div>
          </div>
          <p className='profile-error'>if an error if an errorif an error </p>
        </div>
      </form>
    </div>
  )
}

export default Profile
