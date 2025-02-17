import './Projects.css'

const Projects = () => {
  return (
    <section className='projects'>
        <span id="projects"></span>
        <h2>Últimos projetos</h2>
        <div className="projects-container">
          <div className="project">
            <a href="https://aslinsjr.github.io/sunnyside-agency-landing-page-main" target='_blank' className="img-container">
              <img src="./landpage-project.png" alt="" />
            </a>
            <h3>Agência Sunnyside</h3>
            <p>Desafio proposto pelo <a href="https://www.frontendmentor.io/profile/aslinsjr">Frontend Mentor</a>. A página possui animações interativas, layout atrativo e conta com menu mobile e responsividade para vários dispositivos.</p>
            <div className="tools-container">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="btn-control">
              <a href="https://github.com/aslinsjr/sunnyside-agency-landing-page-main" target='_blank'>Github</a>
              <a href="https://aslinsjr.github.io/sunnyside-agency-landing-page-main" target='_blank'>Deploy</a>
            </div>
          </div>
          <div className="project">
            <a href="https://mp-hackathon-olimpiadas-five.vercel.app/" target='_blank' className="img-container">
              <img src="./hackaton-project-dark.png" alt="" />
            </a>
            <h3>Quadro de Medalhas Paris 2024</h3>
            <p>Projeto desenvolvido em um Hackathon comemorativo das Olimpiadas de 2024. A aplicação conta com ferramentas de filtragem, modo claro/escuro, e está responsiva para dispositivos mobile e tablets.</p>
            <div className="tools-container">
              <span>React.Js</span>
            </div>
            <div className="btn-control">
              <a href="https://github.com/aslinsjr/mp-hackathon-olimpiadas" target='_blank'>Github</a>
              <a href="https://mp-hackathon-olimpiadas-five.vercel.app/" target='_blank'>Deploy</a>
            </div>
          </div>
          <div className="project">
            <a href="https://rock-paper-scissors-five-olive.vercel.app/" target='_blank' className="img-container">
              <img src="./game-project.png" alt="" />
            </a>
            <h3>Pedra, Papel e Tesoura</h3>
            <p>Jogo com desing atrativo desenvolvido para o navegador. O layout possui placar de score, aba de regras e mensagem interativa a cada resultado de rodada.</p>
            <div className="tools-container">
            <span>React.Js</span>
            </div>
            <div className="btn-control">
              <a href="https://github.com/aslinsjr/rock-paper-scissors" target='_blank'>Github</a>
              <a href="https://rock-paper-scissors-five-olive.vercel.app/" target='_blank'>Deploy</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects