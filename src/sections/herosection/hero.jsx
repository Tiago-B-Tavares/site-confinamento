import { Parallax } from 'react-scroll-parallax'

export default function HeroSection() {
  return (
    <section  id="home" className="relative h-[100vh] overflow-hidden">
      {/* Parallax Image - Fundo */}
      <Parallax speed={-1000} className="absolute inset-0 ">
        <img
          src="/imagens/Ceva-gado-brahman-alimentando-se-em-palete-dentro-do-confinamento.webp"
          alt="Hero"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.7) contrast(1.2)',
          }}
        />
      </Parallax>

      <div className="relative z-20 flex flex-col items-center justify-center h-full  text-center px-4 ">
        <h1 className="text-4xl md:text-6xl font-bold text-[#5ae466]">Confinamento MP</h1>
        <p className="text-xl mt-4 text-white mb-8">
          Qualidade, bem-estar e tecnologia no campo.
        </p>
       
          <a
            href="#contato"
            className="bg-[#4dd45a] hover:bg-[#2C8235] text-white px-6 py-3 rounded-full shadow-md transition duration-300 hover:scale-105"
          >
            Fale conosco
          </a>
    


      </div>
    </section>
  )
}
