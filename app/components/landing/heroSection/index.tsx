const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./assets/video-1.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center px-6">
                <div>
                    <p className="font-light text-lg  xl:text-xl 2xl:text-[1.375rem] text-white">
                        Driven by performance
                    </p>
                    <h1 className="text-3xl md:text-5xl font-light mt-4 leading-2 lg:leading-10">
                        <span className="font-semibold">Soft trims and </span><span className="font-semibold text-primary">NVH solutions</span> 
                        <p className="lg:mt-2">for seamless rides</p>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
