import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, TextField, Link, Box } from '@mui/material';
import { LoginWrapper } from '../components/LoginWrapper';

export const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <LoginWrapper title='Sign up'>
            <Box
                component='form'
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
            >
                <TextField
                    margin='normal'
                    fullWidth
                    id='name'
                    label='Name'
                    name='name'
                    {...register('name', { required: true })}
                />
                <TextField
                    margin='normal'
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    {...register('email', { required: true })}
                />
                <TextField
                    margin='normal'
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    {...register('password', { required: true })}
                />
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </Button>
                <Link to='/signIn' component={NavLink} variant='body2'>
                    Do you have an account? Sign In
                </Link>
            </Box>
        </LoginWrapper>
    );
};
