// import SignIn from "./pages/SignIn";
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { Footer } from './layout/Footer';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const App = () => {
    return (
        <Container>
            <Header />
            <Main />
            <Footer />
        </Container>
    );
};
