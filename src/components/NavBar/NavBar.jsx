import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {
  const navigate = useNavigate()

  const initialState = {
    username: '',
    password: '',
  }

  const [formData, setFormData] = useState(initialState)

  useEffect(() => {
    if (props.user) {
      navigate('/')
    }
  }, [props.user])

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleSignIn(formData)
    navigate('/')
  }

  return (
     <nav>
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/hoots"> Hoots </Link></li>
      {props.user ? (
        <>
          <li>Welcome {props.user.username}</li>
          <li><Link to='/' onClick={props.handleSignOut}>Sign Out</Link></li>
        </>
        ) : (
          <>
            <li><Link to="/sign-up">Sign Up</Link></li>
            <li><Link to="/sign-in">Sign In</Link></li>
          </>
          ) }
        </ul>
    </nav>
  )
}

export default SignIn