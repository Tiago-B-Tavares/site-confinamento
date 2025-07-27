import './index.css'
import { Parallax } from 'react-scroll-parallax';

function About() {
    return (
        <div>
            <div id='about' className="w-screen h-[100dvh] bg-[#F9FAFB] bg-opacity-500 flex justify- items-center border border-red">
                <Parallax translateY={[5, 20]} className="w-full flex justify-center items-center flex-col ">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#2C8235] my-6">Sobre nós</h2>
                    <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center gap-8">
                        <div className='px-4 flex flex-col md:flex-row items-center gap-8 mb-4'>
                            <figure className="w-full md:w-1/2">
                                <img src="/imagens/fotos/boi_no_cocho.jpg" alt="Boi no cocho" className="w-full h-auto rounded-lg" />
                            </figure>
                            <article className="w-full md:w-1/2 text-[#2C8235] text-justify text-lg">
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
                </Parallax>

            </div>
            <div id='about' className="w-screen h-[60dvh] bg-[#73a788] bg-opacity-500 flex justify- items-center border border-red">
                <Parallax translateY={[-5, 80]} className="w-full flex justify-center items-center flex-col bg-[#73a788]">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#edf8ee] my-6 ">Nossa Família, Nossa Raiz</h2>
                    <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center gap-8 ">
                        <div className=' flex flex-col md:flex-row items-center gap-4 '>

                            <article className="w-full md:w-1/2  text-white text-justify  text-lg">
                                <p>
                                    Esta é a família que carrega no coração o compromisso com o que faz. Cada passo do nosso confinamento tem o toque e o cuidado de quem vive essa terra com orgulho e dedicação.

                                    Mais do que produtores, somos guardiões de um legado que atravessa gerações. Aqui, o trabalho é feito em conjunto, com união, simplicidade e a certeza de que o sucesso começa em casa — com amor, respeito e muita vontade de fazer bem feito.

                                </p>

                            </article>
                            <figure className="w-full md:w-1/2">
                                <img src="/imagens/fotos/familia.jpg" alt="Boi no cocho" className="w-full h-auto rounded-lg" />
                            </figure>
                        </div>
                    </div>
                </Parallax>

            </div>
        </div>

    );
}

export default About;
