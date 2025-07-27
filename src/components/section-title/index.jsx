function Title({ title, fontColor, size}) {
    return (
        <div className={`flex justify-center items-center  text-3xl md:text-5xl font-bold my-4 w-screen`}>
            <h1 className={`text-5xl font-bold text-center text-[${fontColor}]`}>{title}</h1>
        </div>
    );
}
export default Title