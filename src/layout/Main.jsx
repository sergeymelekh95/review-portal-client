import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../features/auth/SignIn';
import styled from '@emotion/styled';
import { SignUp } from '../features/auth/SignUp';
import { NotFound } from '../pages/NotFound';

const Container = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1900px;
    flex-grow: 1;
`;

export const Main = () => {
    return (
        <Container>
            <Routes>
                <Route path='/' element={<h1>Main Content</h1>}></Route>
                <Route path='/signIn' element={<SignIn />}></Route>
                {/* <Route path='/signIn' element={user ? <Navigate to'/' /> : <SignIn />}></Route> */}
                <Route path='/signUp' element={<SignUp />}></Route>
                <Route path='*' component={<NotFound />} />
            </Routes>
        </Container>
    );
};
