import { Button, TextField } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const formSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>

            <form onSubmit={handleSubmit(formSubmit)}>
                <TextField
                    {...register('username', {
                        required: "username is req",
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: 'Username must be alphanumeric',
                        }
                    })}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default Login