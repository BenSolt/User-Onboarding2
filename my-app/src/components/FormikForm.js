import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Form = ({}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        status && setUsers(users => [...users, status])
    },[status])

reutrn (
<div className='form'>
    <Form>
        <Field type="text" name="name" placeholder="enter name" />

        <Field type="text" name="email" placeholder="enter Email" />

        <Field type="text" name="password" placeholder="enter Password" />

    </Form>

</div>

)

}