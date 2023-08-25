import { Container, SignUpDiv, Form, Checkbox, ButtonSignUp } from './styles';

const App = () => {
  return (
    <Container>
      <SignUpDiv>
        <h1>Criar Conta</h1>
        <Form action="">
          <input type="text" placeholder="Nome" required/>
          <input type="text" placeholder="Sobrenome" required/>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Senha" required/>
          <input type="password" placeholder="Confirme sua senha" required/>
        </Form>
        <Checkbox>
          <input type="checkbox" />
          <label htmlFor="checkbox"> Eu concordo <a href="" required>Termos e condições</a></label>
        </Checkbox>
        <ButtonSignUp>SignUp</ButtonSignUp>
        <div>Ja tem uma conta?
          <a href="#"> Entre aqui</a>
        </div>
      </SignUpDiv>
    </Container>
  )
}
export default App;
