import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function About() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return (

        <div id='about' className="w-screen h-[100dvh]  bg-opacity-500 flex justify-center items-center  bg-[#f5f5f5]">


            <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center gap-8">
                <div className='px-4 flex flex-col md:flex-row items-center gap-8 mb-4'>
                    <figure className="w-full md:w-1/2">
                        <img src="/imagens/fotos/boi_no_cocho.jpg" alt="Boi no cocho" className="w-full h-auto rounded-lg" />
                    </figure>
                    <article data-aos="fade-up"
                        data-aos-anchor-placement="center-center" className="w-full md:w-1/2 text-[#2C8235] text-justify text-lg">
                        <p>
                            No Confinamento Mario Pinto, nossa essência vai além da produção de carne bovina:
                            cuidamos de cada etapa do processo com responsabilidade, respeito e inovação.
                            Trabalhamos com as mais modernas tecnologias e uma equipe dedicada, garantindo um
                            manejo criterioso, nutrição balanceada e o máximo bem-estar para os animais. Acreditamos
                            que produzir com qualidade é também preservar o meio ambiente e valorizar as pessoas que fazem parte dessa jornada.
                            Nosso compromisso é com a excelência, do pasto ao prato. Atuamos com transparência,
                            ética e paixão pelo que fazemos, entregando resultados sustentáveis e carne de alto padrão para o mercado.
                        </p>

                    </article>
                </div>
            </div>


        </div>


    );
}

export default About;
