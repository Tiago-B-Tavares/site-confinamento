
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Family() {

    
        AOS.init({ duration: 800 });


    return (
        <div id='about' className="w-screen h-[100dvh]  bg-opacity-500 flex justify-center items-center bg-[#f5f5f5]">
            <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center  ">
                <div className=' flex flex-col md:flex-row items-center gap-4 '>

                    <article className="w-full md:w-1/2 text-[#768678] text-justify text-lg md:text-2xl" data-aos="fade-long">
                    <span  className='text-4xl font-bold text-green-500 '>Nossa Família </span>
                        <p>
                            Esta é a família que carrega no coração o compromisso com o que faz. Cada passo do nosso confinamento tem o toque e o cuidado de quem vive essa terra com orgulho e dedicação.

                            Mais do que produtores, somos guardiões de um legado que atravessa gerações. Aqui, o trabalho é feito em conjunto, com união, simplicidade e a certeza de que o sucesso começa em casa — com amor, respeito e muita vontade de fazer bem feito.

                        </p>

                    </article>
                    <figure data-aos="fade-right" className="w-full md:w-1/2 ">
                        <img src="/imagens/fotos/familia.jpg" alt="Boi no cocho" className="w-full h-auto rounded-lg" />
                    </figure>
                </div>
            </div>
        </div >

    )
}
export default Family