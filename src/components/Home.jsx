import React from 'react';
import meuAvatar from '../utils/meuAvatar.png';
function Home() {
  return (
    <section id='home'>
      <div>
        <img id='imageHome' src={meuAvatar} alt="Elielson Imagem" />
      </div>

      <div>
        <h1 id='nameHome'>Elielson Nascimento</h1>
        <h2 id='profissionHome'>Desenvolvedor de Software - Front-end</h2>
      </div>
    </section>
  )
}

export default Home