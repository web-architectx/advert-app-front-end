import React, { useState } from 'react';
import PostAdvertModal from '../components/PostAdvertModal';

const AddProduct = () => {
     

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Post an Advert</h2>

                 <button>
                 <PostAdvertModal/>
                 </button>
                 
            </div>
        </div>
    );
};

export default AddProduct;
