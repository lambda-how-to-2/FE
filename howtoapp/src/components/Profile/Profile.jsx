import React, { useState } from "react"
import axios from "axios"
import * as yup from "yup"
import "./profile_style.css"
import ImageThumbnail from "./image-thumbnail.svg"
import { useHistory } from "react-router-dom"

function Profile(props) {
  const initialState = { title: "", body: "", image: "" }
  const [imagesFile, setImageFile] = React.useState("")
  const [imageName, setImageName] = React.useState("")
  const [howToInputValue, setHowToInputValue] = React.useState(initialState)
  const [errors, setErrors] = useState(initialState)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const history = useHistory()

  const handleInputChanges = e => {
    const inputValue = {
      ...howToInputValue,
      [e.target.name]: e.target.value,
    }
    setHowToInputValue(inputValue)
    validateChange(e)
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
    history.push("/")
  }
  console.log(howToInputValue)
  const profileformSchema = yup.object().shape({
    title: yup.string().required("Please enter a Title."),
    image: yup.string().required("image"),
    body: yup.string().required("A HowTo text is required."),
  })

  const validateChange = e => {
    e.persist()
    yup
      .reach(profileformSchema, e.target.name)
      .validate(e.target.value)
      .then(valid =>
        setErrors({
          ...errors,
          [e.target.name]: "",
        })
      )
      .catch(error =>
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        })
      )
  }

  const ImageError = () => {
    if (howToInputValue.title !== "" && howToInputValue.title !== "") {
      console.log("error")
    }
  }
  // DEBUG BLOCK >>>>>>>>>

  console.log("erros", errors)

  // >>>>>>>>>>>>>>>>>>>>>>>
  return (
    <div className='profile'>
      <form onSubmit={handleFormSubmit}>
        <div className='profile-form'>
          <input
            className='profile-title'
            name='title'
            id='profileTitle'
            type='text'
            placeholder={errors.title || "Title"}
            onChange={handleInputChanges}
          />
          <textarea
            className='profile-body'
            rows='10'
            cols='30'
            placeholder={errors.body || "Description"}
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
                name='image'
                data-cloudinary-field='image_id'
                data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
                onChange={handleImageUpload}
              />
              <button className='profile-post-btn'>Post</button>
            </div>
          </div>
          <p className='profile-error'>{/* <ImageError /> */}</p>
        </div>
      </form>
    </div>
  )
}

export default Profile
