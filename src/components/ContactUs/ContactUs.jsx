import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-cover bg-center min-h-screen py-12" style={{ backgroundImage: "url('background6.jpg')" }}>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-white">Contact Us</h1>

                <div className="bg-opacity-70 bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-lg">
                        Have questions or feedback? We'd love to hear from you! Fill out the form below or reach out to us via email or phone.
                    </p>

                    {/* Contact Form */}
                    <form className="mt-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Your Message"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
