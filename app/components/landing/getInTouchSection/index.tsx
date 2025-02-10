"use client";
import { useState, FormEvent, FC } from "react";

interface FormData {
    fullName: string;
    email: string;
    company: string;
    message: string;
}

const GetInTouch: FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        company: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Form Submitted")
    };

    return (
        <section className="relative w-full bg-primary600 text-white py-20 px-6 md:px-16">
            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div >
                        <h2 className="text-3xl md:text-4xl font-semibold">Get in Touch</h2>
                        <div className="h-[2px] bg-white w-16 my-10"></div>
                        <p className="mt-4 text-xl">For general enquiries</p>

                        <div className="mt-6 space-y-6 text-xl">
                            <div>
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p>110, 16th Road, Chembur, Mumbai - 400071</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p>+1 (123) 456-7890</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p>contact@supremegroup.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:mt-0 mt-10">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-8">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none"
                                    placeholder="Full name"
                                    required
                                />
                            </div>
                            <div className="mb-8">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="mb-8">
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none"
                                    placeholder="Company"
                                    required
                                />
                            </div>
                            <div className="mb-8">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none"
                                    rows={4}
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="mt-10 w-[130px] flex justify-center gap-1 disabled:opacity-70 disabled:cursor-not-allowed relative outline-none bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:bg-white focus:bg-white text-white stroke-dark hover:stroke-white font-semibold border border-white lg:text-base text-sm px-8 md:px-12 py-3"
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
