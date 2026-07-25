import React, { useState } from 'react'
import { FiPlus, FiX } from 'react-icons/fi';

const FAQItem = ({question, answer}) => {
    const [open, setOpen] = useState(false);
  return (

    <div>

        <button 
            onClick={() => setOpen(!open)}
            className='w-full bg-[#2d2d2d] border border-black border-t-8 border-r-0 border-l-0 hover:bg-[#414141] transition flex justify-between items-center px-8 py-6 text-left'
        >

            <span className="text-2xl font-medium">{question}</span>

            {open ? (
                <FiX className="text-2xl" />
            ) : (
                <FiPlus className="text-2xl" />
            )}

        </button>

        {open && (
            <div className="bg-[#2d2d2d] px-6 py-6">
            <p className="text-2xl leading-relaxed whitespace-pre-line">
                {answer}
            </p>
            </div>
        )}
        
    </div>

  );
};

export default FAQItem