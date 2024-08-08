import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const initialValues = {
    username: '',
    password: ''
  }  

  const validationSchema = Yup.object({
    username: Yup.string().required("Please type your username"),
    password: Yup.string().required("Please type your password")
  })

  const { setToken } = useAuth()
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try{
        const response = await axios.post('http://localhost:5000/login', values)
        const token = response.data.token;
        setToken(token);
        navigate("/");
        console.log("Login successful");
    } catch (error){
        console.log("Login error");
    }
  }

  return (
    <div className="container-fluid">
        <div className="flex
        justify-center
        items-center
        w-screen
        h-screen
        bg-penn-blue">
            <div className="w-1/6
            h-min
            bg-white-type
            rounded-lg">
                <div className="px-4
                py-3
                mx-3
                my-2
                font-bold
                text-4xl
                text-gray-10
                text-center">Login</div>
                
                <div className="flex
                flex-col
                justify-center
                items-center
                px-5
                py-3
                mx-8
                space-y-2">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        <Form>
                            <Field className="border-2
                            border-md
                            border-gray-10
                            px-3
                            py-2
                            my-3
                            rounded-lg"
                            type="text"
                            placeholder="Username"
                            name="username"
                            />
                            <ErrorMessage component="div" name="username" className="font-semibold text-red-10" />

                            <Field className="border-2
                            border-md
                            border-gray-10
                            px-3
                            py-2
                            my-3
                            rounded-lg"
                            type="password"
                            placeholder="Password"
                            name="password"
                            />
                            <ErrorMessage component="div" name="password" className="font-semibold text-red-10" />

                            <div className="flex
                            justify-center
                            items-center">
                                <button type="submit"
                                className="py-3
                                px-4
                                my-4
                                mx-2
                                text-md
                                text-center
                                rounded-md
                                duration-300
                                cursor-pointer
                                bg-penn-blue
                                hover:bg-cerulean
                                text-white-type"
                                > Login </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login