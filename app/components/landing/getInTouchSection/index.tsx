"use client";
import { motion } from "framer-motion";

const GetInTouch = () => {
    return (
        <section className="relative w-full bg-primary600 text-white py-20 px-6 md:px-16">
            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    {/* Left Side - Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold">Get in Touch</h2>
                        <div className="h-[2px] bg-white w-16 my-10"></div>
                        <p className="mt-4 text-xl">For general enquiries </p>

                        <div className="mt-6 space-y-6 text-xl">
                            <div>
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p className="">110, 16th Road, Chembur, Mumbai - 400071</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p className="">+1 (123) 456-7890</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p className="">contact@supremegroup.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div>
                        <form className="">
                            <div className="mb-8">
                                <input
                                    type="text"
                                    className="text-white  placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white border-white border-opacity-40  transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                                    placeholder="Full name"
                                    required
                                />
                            </div>
                            <div className="mb-8">
                                <input
                                    type="email"
                                    className="text-white  placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white border-white border-opacity-40  transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="mb-8">
                                <input
                                    type="text"
                                    className="text-white  placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white border-white border-opacity-40  transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                                    placeholder="Company"
                                    required
                                />
                            </div>
                            <div className="mb-8">
                                <textarea
                                    className="text-white  placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white border-white border-opacity-40  transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                                    rows={4}
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="mt-10 w-[130px] flex justify-center gap-1 disabled:opacity-70 disabled:cursor-not-allowed relative outline-none !bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:!bg-white focus:!bg-white text-white stroke-dark hover:stroke-white font-semibold !hover:bg-white hover:border-transparent border border-white lg:text-base text-sm  px-8 md:px-12 py-3"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
