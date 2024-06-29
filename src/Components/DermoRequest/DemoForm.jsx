import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

function DemoForm({headText}) {
    const [Fname, setFName] = useState('');
    const [Lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setphone] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const FnameChange = (e) => setFName(e.target.value);
    const LnameChange = (e) => setLName(e.target.value);
    const emailChange = (e) => setEmail(e.target.value);
    const compChange = (e) => setCompany(e.target.value);
    const titleChange = (e) => setTitle(e.target.value);
    const messageChange = (e) => setMessage(e.target.value);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = Fname + ' ' + Lname;
        setIsLoading(true); // Set loading state to true

        if (!Fname || !Lname || !email || !company) {
            return toast.error("Fill all the details first");
        }

        const serviceId = 'service_w05wbnm';
        const templateId = 'template_9rkwrgf';
        const publicKey = 'wDG8vT8zDikiaJTJ4';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Athar Raza - admin',
            company: company,
            title: title,
            phone: phone,
            message: message,
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            toast('Successful - Check your email', {
                icon: '👏',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
            setFName('');
            setLName('');
            setEmail('');
            setCompany('');
            setTitle('');
            setphone('');
            setMessage('');
        } catch (error) {
            console.log(error);
            toast.error('Error submitting your request - try again later');
        } finally {
            setIsLoading(false); // Set loading state to false
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen px-4 pb-7'>
            <div className='flex flex-col items-center w-full max-w-6xl'>
                <p className='text-2xl font-medium text-black w-full text-start m-8'>
                {headText ? headText : "Discover how our solution can transform your business – Schedule your live demo today!"}
                </p>
                <div className='bg-[#F0EDE8] w-full rounded-xl p-8 md:p-16'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full gap-y-6'>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0'>
                            <label className='w-full md:w-1/3 text-gray-700'>
                                Name <span className='text-red-500'>*</span>
                            </label>
                            <div className='flex flex-col items-center justify-center md:flex-row w-full md:w-2/3 md:space-x-4'>

                                <div className='flex flex-col w-full md:w-1/2 mt-4 md:mt-0'>
                                    <input
                                        onChange={FnameChange}
                                        value={Fname}
                                        type='text'
                                        className='py-2 rounded border border-gray-400 px-2 focus:outline-none'
                                    />
                                    <label className='text-xs font-medium mt-1'>First Name</label>
                                </div>

                                <div className='flex flex-col w-full md:w-1/2 mt-4 md:mt-0'>
                                    <input
                                        onChange={LnameChange}
                                        value={Lname}
                                        type='text'
                                        className='py-2 rounded border border-gray-400 px-2 focus:outline-none'
                                    />
                                    <label className='text-xs font-medium mt-1'>Last Name</label>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0'>
                            <label className='w-full md:w-1/3 text-gray-700'>
                                Work Email <span className='text-red-500'>*</span>
                            </label>
                            <input
                                onChange={emailChange}
                                value={email}
                                type='email'
                                className='w-full md:w-2/3 py-2 rounded border border-gray-400 px-2 focus:outline-none'
                            />
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0'>
                            <label className='w-full md:w-1/3 text-gray-700'>
                                Company Name <span className='text-red-500'>*</span>
                            </label>
                            <input
                                onChange={compChange}
                                value={company}
                                type='text'
                                className='w-full md:w-2/3 py-2 rounded border border-gray-400 px-2 focus:outline-none'
                            />
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0'>
                            <label className='w-full md:w-1/3 text-gray-700'>Title</label>
                            <input
                                onChange={titleChange}
                                value={title}
                                type='text'
                                className='w-full md:w-2/3 py-2 rounded border border-gray-400 px-2 focus:outline-none'
                            />
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0'>
                            <label className='w-full md:w-1/2 text-gray-700'>Phone</label>
                            <PhoneInput
                                country={'pk'}
                                value={phone}
                                onChange={setphone}
                                className='w-full md:w-1/2'
                            />
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0'>
                            <label className='w-full md:w-1/3 text-gray-700'>Enter your message</label>
                            <textarea
                                onChange={messageChange}
                                value={message}
                                className='w-full md:w-2/3 py-2 rounded border border-gray-400 px-2 focus:outline-none'
                            />
                        </div>
                        <p className='text-sm mt-4'>
                            By filling this form you accept the <a href='/' className='text-blue-500'>Terms and Conditions</a> and the Privacy Policy statement.
                        </p>
                        <button
                            type='submit'
                            className='bg-yellow-500 text-black py-3 w-full rounded-full font-medium mt-6'
                        >
                            {isLoading ? 'Submitting...' : 'Submit Request'}
                        </button>
                    </form>
                </div>
            </div>
            <Toaster />

        


        </div>

    );
}

export default DemoForm;