import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiPostAdverts } from '../../../../services/advert';
import { useNavigate } from 'react-router-dom';

function PostAdvertModal() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
        price: '',
        category: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        if (formData.image) {
            data.append('image', formData.image);
        }
        data.append('price', formData.price);
        data.append('category', formData.category);

        const token = localStorage.getItem("token");

        try {
            const response = await apiPostAdverts(data, token);

            if (response.status === 200 || response.status === 201) {
                toast.success('Advert posted successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                
                // Reset form data
                setFormData({ title: '', description: '', image: null, price: '', category: '' });
                navigate('/dashboard/products'); // Navigate to the products page
            
            } else {
                const errorResult = await response.json();
                toast.error(errorResult.message || 'Failed to post advert.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            toast.error('An error occurred while posting the advert.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-semibold">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter the advert title"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                        placeholder="Describe the product or service"
                        rows="6"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold">Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                        accept="image/*"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter the price"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="services">Services</option>
                        <option value="home">Home & Garden</option>
                        <option value="automotive">Automotive</option>
                    </select>
                </div>

                <div>
                    <button
                        type="submit"
                        className={`w-full py-3 ${loading ? 'bg-gray-400' : 'bg-teal-500'} text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-200`}
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? 'Posting...' : 'Post Advert'} {/* Show loading text when loading */}
                    </button>
                </div>
            </form>

            
        </>
    );
}

export default PostAdvertModal;