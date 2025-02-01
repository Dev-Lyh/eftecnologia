import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div></div>
        <nav>
          <a href="#home">Home</a>
          <a href="#aboutme">Sobre mim</a>
          <a href="#projects">Projetos</a>
          <a href="#mains">Princípios</a>
          <a href="#home">Stacks</a>
        </nav>
        <a href="#getintouch">Entre em contato</a>
      </header>

      <section id="home">
        <h1>
          Transformando
          <br />
          ideias em <mark>Códigos</mark>.
        </h1>
        <p>
          Trabalhe comigo para buscar inovação e facilidade para o seu negócio.
          Tenha a garantia da qualidade do seu produto.
        </p>
        <div>
          <a href="#getintouch">Entre em contato</a>

          <a href="#aboutme">Saiba mais</a>
        </div>
      </section>
      <section id="aboutme">
        <div>
          <h2>
            Quem sou <mark>eu</mark>?
          </h2>
          <p>
            Olá, seja bem-vindo ao meu portfólio! Sou Emily Carvalho Felicio e
            sou desenvolvedora full-stack à 4 anos. Sou de Curitiba-PR (BR) e
            tenho 20 anos. Atualmente estou cursando Engenharia de Software pela
            Universidade CESUMAR.
          </p>
          <nav>
            <a href="linkedin">LinkedIn</a>
            <a href="github">Github</a>
          </nav>
        </div>
      </section>
      <section id="projects">
        <h2>
          Projetos<mark>.</mark>
        </h2>
        <p>
          Venha ver minhas habilidades na prática. Nessa lista dos meus projetos
          realizados, contém projetos de estudo e projetos que estão em
          construção.
        </p>
        <div>
          <div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
