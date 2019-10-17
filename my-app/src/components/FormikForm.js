import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Form = ({values, touched, errors, status}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        status && setUsers(users => [...users, status])
    },[status])

reutrn (
<div className='form'>
    <Form>
        <Field 
        type="text" 
        name="name" 
        placeholder="enter name" />

        <Field 
        type="text" 
        name="email" 
        placeholder="enter Email" />

        <Field 
        type="text" 
        name="password" 
        placeholder="enter Password" />

        <Field
            type="checkbox"
            name="Terms of Service"
            checked={values.vaccinations}
          />

        <span className="checkmark" />


        <button type="submit">Submit!</button>
        
    </Form>

{users.map(user = (
    <ul key={}>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Password: {user.name}</li>
    </ul>
))}
</div>
  );
};
const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password}) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please Enter Name'),
        email: Yup.string().required('Please Enter Email'),
        password: Yup.string().required('Please Enter Password'),
    }),
    handleSubmit(values, {setStatus}) {
        axios.post('', values)
        .then(res => {setStatus(res.data); })
        .catch(err => console.log(err.response));
    }

})