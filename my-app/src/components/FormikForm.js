import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import Users from './Users';

const UserForm = ({values, touched, errors, status}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        status && setUsers(users => [...users, status])
    },[status])

return (
<div className='Formholder'>
    <Form className='Form1'>
        <Field className='Field'
        type="text" 
        name="name" 
        placeholder="enter name" />
        {touched.name && errors.name && (
         <p className='error'>{errors.name}</p>
        )}

        <Field className='Field' 
        type="text" 
        name="email" 
        placeholder="enter Email" />
        {touched.email && errors.email && (
         <p className='error'>{errors.email}</p>
         )}

        <Field className='Field'
        type="text" 
        name="password" 
        placeholder="enter Password" />
        {touched.password && errors.password && (
         <p className='error'>{errors.password}</p>
         )}

        <Field className='Chekbox'
            type="checkbox"
            name="TOS"
            checked={values.tos}
          />

        

        <button className='Field' type="submit">Submit!</button>
        
    </Form>
    <Form className='Form2'>

        <Field className='Field'
        type="text" 
        name="age" 
        placeholder="enter age" />
       
       <Field className='Field'
        type="text" 
        name="role" 
        placeholder="role" />

       <Field className='Field'
          component="textarea"
          type="text"
          name="notes"
          placeholder="Notes"
        />
        


    </Form>
        <Users user1={users}/>
    

</div>
  );
};
const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password, age, role, notes}) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false,
            age: age || "",
            role: role || "",
            notes: notes || ""

        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please Enter Name'),
        email: Yup.string().required('Please Enter Email'),
        password: Yup.string().required('Please Enter Password'),
    }),
    handleSubmit(values, {setStatus}) {
        axios.post('https://reqres.in/api/users', values)
        .then(res => {setStatus(res.data); })
        .catch(err => console.log(err.response));
    }

})(UserForm);
export default FormikUserForm;
console.log('higher order comp', FormikUserForm)