import { useForm } from 'react-hook-form';
import { selectAuthInfo, signIn, signUp, update } from './authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = (path, action) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authInfo = useSelector(selectAuthInfo);

    const { status, error } = authInfo;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) =>
    action === 'singIn' ? dispatch(signIn(data)) : dispatch(signUp(data));

    useEffect(() => {
        if (status === 'received') {
            dispatch(update());
            navigate(path);
        }
    }, [status, dispatch, navigate]);

    return [error, errors, register, handleSubmit, onSubmit, status];
};
