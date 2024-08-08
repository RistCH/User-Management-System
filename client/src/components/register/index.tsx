import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Register = () => {
    const initialValues = {
        name: "",
        email: "",
        username: "",
        password: "",
        cpassword: "",
    }
    
    const registerValidation = Yup.object({
        name: Yup.string().min(3, "Name must contain 3 letters").matches(/^(?![\s.]+$)[a-zA-Z\s.'-]*$/, "Name must only contain letters and special characters such as ('-.)").required("Please enter your name"),
        email: Yup.string().email("Please enter valid email").required("Please enter your email"),
        username: Yup.string().matches(/^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/, 'Username must only contain 8-20 characters with letters, numbers and underscore').required("Please enter your username"),
        password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain at least 8 characters, one uppercase letter, and one lowercase letter").required("Please enter your password"),
        cpassword: Yup.string().oneOf([Yup.ref("password")], "Password is not match").required("Please confirm your password")
    })
    
    const navigate = useNavigate()

    const handleRegister = async (values: any) => {
        try{
            await axios.post('http://localhost:5000/register', values)
            .then(result => {
                console.log(result)
                if (result.data.message === "User saved successfully"){
                    console.log("Registered successfully");
                    navigate('/login');
                }
            })
            
        } catch (err) {
            console.log("Registration failed");
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
                <div className="w-1/3
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
                    text-center">Register</div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={registerValidation}
                        onSubmit={handleRegister}
                    >
                        <Form>
                        <div className="flex
                        flex-col
                        justify-left
                        items-left
                        px-5
                        py-2
                        mx-4
                        space-y-2">
                                <label htmlFor="Name" className="
                                text-gray-10
                                text-lg
                                font-semibold">Name</label>
                                <Field className="border-2
                                border-md
                                border-gray-10
                                px-3
                                py-2
                                rounded-lg" 
                                type="text" 
                                name="name"
                                placeholder="Enter your name"/>
                                <ErrorMessage component="label" name="name" className="font-semibold text-red-10" />

                                <label htmlFor="Email" className="
                                text-gray-10
                                text-lg
                                font-semibold">Email</label>
                                <Field className="border-2
                                border-md
                                border-gray-10
                                px-3
                                py-2
                                rounded-lg" 
                                type="email" 
                                name="email"
                                placeholder="Enter your email"
                                />
                                <ErrorMessage component="div" name="email" className="font-semibold text-red-10" />

                                <label htmlFor="Username" className="
                                text-gray-10
                                text-lg
                                font-semibold">Username</label>
                                <Field className="border-2
                                border-md
                                border-gray-10
                                px-3
                                py-2
                                rounded-lg" 
                                type="text" 
                                name="username" 
                                placeholder="Enter your username"
                                />
                                <ErrorMessage component="div" name="username" className="font-semibold text-red-10" />

                                <label htmlFor="Password" className="
                                text-gray-10
                                text-lg
                                font-semibold">Password</label>
                                <Field className="border-2
                                border-md
                                border-gray-10
                                px-3
                                py-2
                                rounded-lg" 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password"
                                />
                                <ErrorMessage component="div" name="password" className="font-semibold text-red-10" />
                                
                                <label htmlFor="Confirm Password" className="
                                text-gray-10
                                text-lg
                                font-semibold">Confirm Password</label>
                                <Field className="border-2
                                border-md
                                border-gray-10
                                px-3
                                py-2
                                rounded-lg" 
                                type="password" 
                                name="cpassword" 
                                placeholder="Confirm your password"
                                />
                                <ErrorMessage component="div" name="cpassword" className="font-semibold text-red-10" />

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
                                    > Register </button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Register;