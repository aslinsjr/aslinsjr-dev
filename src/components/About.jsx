import './About.css'

const About = () => {
  return (
    <>
    <section className='about'>
        <span id='about'></span>
        <h1>Sou<br />
          <span id="text-decoration-h1">Alexandre Lins <br />
          </span>
          <span>Desenvolvedor Web</span>, muito prazer.
        </h1>
        <img src="./background-image.jpg" alt="" />
      </section>
      <section className='infos'>
        <div id="experiencias">
          <h2>Experiências</h2>
          <ul>
            <li className='infos-li'>
              <div className="logo-infos" id='alliance3'></div>
              <h3>Desenvolvedor Web - Alliance3
                <p>Outubro 2024/Atual</p>
              </h3>
            </li>
            <li className='infos-li'>
              <div className="logo-infos" id='alliance3'></div>
              <h3>Analista de TIC - Alliance3
                <p>Março 2024/Setembro 2024</p>
              </h3>
            </li>
          </ul>
        </div>
        <div id="formacao">
          <h2>Formações</h2>
          <ul>
            <li className='infos-li-delay'>
              <div className="logo-infos" id='estacio'></div>
              <h3>Análise e Desenvolvimento de Sistemas
                <p>Faculdade Estácio - Cursando</p>
              </h3>
            </li>
            <li className='infos-li-delay'>
              <div className="logo-infos" id='softex'></div>
              <h3>Formação Acelerada em Programação - Front-end
                <p>Softex PE - Agosto 2024/Dezembro 2024</p>
              </h3>
            </li>
            <li className='infos-li-delay'>
              <div className="logo-infos" id='potencia-tech'></div>
              <h3>Bootcamp Desenvolvimento de Jogos
                <p>Potência Tech iFood - Janeiro 2024</p>
              </h3>
            </li>
          </ul>
        </div>
      </section>
      </>
  )
}

export default About