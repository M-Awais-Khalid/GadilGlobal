import React, { useState }  from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state


    const emailChange = (e) => setEmail(e.target.value);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true

        if ( !email ) {
            return toast.error("Fill all the details first");
        }

        const serviceId = 'service_w05wbnm';
        const templateId = 'template_aclsjp9';
        const publicKey = 'wDG8vT8zDikiaJTJ4';

        const templateParams = {
            from_email: email,
            to_name: 'Awais Khalid - admin',
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
            setEmail('');
        } catch (error) {
            console.log(error);
            toast.error('Error submitting your request - try again later');
        } finally {
            setIsLoading(false); // Set loading state to false
        }
    };
  return (
    <>
    <form onSubmit={handleSubmit}>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
            <div className="w-full">
              <label for="hero-input" className="sr-only">Search</label>
              <input onChange={emailChange} value={email} type='email' id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email"/>
            </div>
            <button type='submit' className="w-full sm:w-auto whitespace-nowrap py-3 px-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            New UI kits or big discounts. Never spam.
          </p>
     </form>
     <Toaster />
     </>
  )
}

export default Subscribe