
import About from "./about/index";
import Family from "./family/index";
import Title from '../components/section-title'
function Main() {
    return (
        <main className="w-full flex justify-center bg-[#f5f5f5]">
            <section className="w-full max-w-screen-md px-4 flex flex-col items-center">
                <Title title="Raizes que alimentam" fontColor="#2C8235" />
                <About />
                <Title title="Nossa Família, Nossa Raiz" fontColor="" />
                <Family />
            </section>
        </main>

    );
}
export default Main