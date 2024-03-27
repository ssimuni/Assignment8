import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-cover bg-center min-h-screen py-12" style={{ backgroundImage: "url('background6.jpg')" }}>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-white">About Us</h1>

                <div className="bg-opacity-70 bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg">
                        Welcome to Book Vibe, where we provide a platform for book enthusiasts to explore, discover, and manage their reading journey. At Book Vibe, our mission is to make reading an enriching and enjoyable experience for everyone. We strive to provide a user-friendly interface and a diverse selection of books to cater to all tastes and preferences.
                    </p>
                </div>

                <div className="bg-opacity-70 bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Features</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Book Listings: Browse through our extensive collection of books categorized by genre, author, and more.</li>
                        <li>Reading Lists: Create personalized reading lists, track your progress, and mark books as read or wishlist.</li>
                        <li>Custom Shape Bar Chart: Visualize your reading progress with our unique custom shape bar chart, displaying book names against their total pages.</li>
                        <li>Responsive Design: Our platform is designed to be accessible on all devices, ensuring a seamless reading experience wherever you are.</li>
                        <li>Local Storage Integration: Save your reading lists and preferences locally, so you can pick up where you left off anytime.</li>
                    </ul>
                </div>

                <div className="bg-opacity-70 bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-lg">
                        Have questions or feedback? We'd love to hear from you! Feel free to reach out to us at bookvibe@gmail.com or 01845368758.
                    </p>
                </div>

                <div className="bg-opacity-70 bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li><span className='font-bold'>Sayma Siddiqua Simu: </span> Founder & CEO</li>
                        <li><span className='font-bold'>Ziaul Quader: </span> Head of Development</li>
                        <li><span className='font-bold'>Sadia Siddiqua:</span> Lead Designer</li>
                        <li><span className='font-bold'>Mahfuja Yesmin:</span> Marketing Manager</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
