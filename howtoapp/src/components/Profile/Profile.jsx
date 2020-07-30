import React, { useState } from "react"
import axios from "axios"
import * as yup from "yup"
import ImageModal from "./ImageModal"
import "./profile_style.css"
import ImageThumbnail from "./image-thumbnail.svg"
import { useHistory } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"

function Profile(props) {
  const initialState = {
    title: "",
    author: "Bruno Paula",
    description: "",
    image: "",
  }

  const [imageName, setImageName] = React.useState("")
  const [file, setFile] = React.useState("")
  const [imageData, setImageData] = React.useState("")
  const [howToInputValue, setHowToInputValue] = React.useState(initialState)
  const [errors, setErrors] = useState(initialState)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [HandleFormData, handleFormData] = useState({})
  const [loading, setLoading] = useState(false)

  //   Modal
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
    setFile("")
    setImageName("")
    setLoading(false)
  }

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
    setLoading(true)
    setFile(URL.createObjectURL(e.target.files[0]))
    const file = e.target.files
    setImageName(file[0].name)
    handleFormData(file)
    handleShow()
    e.target.files = null
  }

  const saveImage = () => {
    const data = new FormData()
    data.append("file", HandleFormData[0])
    data.append("upload_preset", "howtos")

    axios
      .post("https://api.cloudinary.com/v1_1/brunopaula/image/upload", data)
      .then(res => {
        setHowToInputValue({
          ...howToInputValue,
          image: res.data.secure_url,
        })
        setImageData(res.data)
        setShow(false)
        setLoading(false)
      })
  }

  const token = localStorage.getItem("token")
  const addNewPost = () => {
    const config = {
      method: "post",
      url: "https://how-to-2-team-win.herokuapp.com/api/howtodos",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: {
        title: howToInputValue.title,
        author: howToInputValue.author,
        description: howToInputValue.description,
        image_url: howToInputValue.image,
      },
    }

    axios(config).then(res => {
      setLoading(false)
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    addNewPost()
    history.push("/")
  }

  const profileformSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("A HowTo Description is required."),
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

  const AlertSaved = () => {
    return imageName ? (
      <Alert variant='dark'>{`${imageName} has been saved!`}</Alert>
    ) : (
      ""
    )
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
            placeholder={errors.title || "Title"}
            onChange={handleInputChanges}
          />

          <textarea
            className='profile-body'
            rows='10'
            cols='30'
            placeholder={errors.description || "Description"}
            name='description'
            onChange={handleInputChanges}
          />

          <AlertSaved />

          <div className='formBottomBtn'>
            <div className='upload-btn'>
              {loading ? (
                <Spinner animation='border' variant='success' />
              ) : (
                <label htmlFor='file-upload' className='file-upload-circle'>
                  <img src={ImageThumbnail} alt='upload icon' />
                </label>
              )}

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
        </div>
      </form>

      <ImageModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleShow}
        saveImage={saveImage}
        file={file}
        data={imageData}
      />
    </div>
  )
}

export default Profile
