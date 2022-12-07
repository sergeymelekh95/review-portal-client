import { NavLink } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField, Link, Box } from '@mui/material';
import { LoginWrapper } from '../../components/LoginWrapper';
import { ErrorText } from '../../components/ErrorText';
import { useAuth } from './useAuth';

export const SignUp = () => {
    const [error, errors, register, handleSubmit, onSubmit, status] = useAuth(
        '/signIn',
        'singUp'
    );

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
                    id='username'
                    label='Name'
                    name='name'
                    error={!!errors.username?.message}
                    {...register('username', {
                        required: true,
                        minLength: {
                            value: 2,
                            message: 'password should be at least 2',
                        },
                        pattern: {
                            value: /^[^\s]+(?:$|.*[^\s]+$)/,
                            message:
                                'Entered value cant start/end or contain only white spacing',
                        },
                    })}
                />
                {errors.username?.message && (
                    <ErrorText error={errors.username?.message} />
                )}
                <TextField
                    margin='normal'
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    error={!!errors.email?.message}
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter a valid email',
                        },
                    })}
                />
                {errors.email?.message && (
                    <ErrorText error={errors.email?.message} />
                )}
                <TextField
                    margin='normal'
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    error={!!errors.password?.message}
                    {...register('password', {
                        required: true,
                        minLength: {
                            value: 5,
                            message: 'password should be at least 5',
                        },
                    })}
                />
                {errors.password?.message && (
                    <ErrorText error={errors.password?.message} />
                )}
                {error && <ErrorText error={error} />}
                <LoadingButton
                    type='submit'
                    fullWidth
                    variant='contained'
                    loading={status === 'loading'}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </LoadingButton>
                <Link to='/signIn' component={NavLink} variant='body2'>
                    Do you have an account? Sign In
                </Link>
            </Box>
        </LoginWrapper>
    );
};
