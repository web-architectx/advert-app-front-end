import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// import withReactContent from 'sweetalert2-react-content'
// import withReactContent from 'sweetalert2-re'
import { apiPostAdverts } from '../../../services/advert';

// const MySwal = withReactContent(Swal);

function PostAdvertModal() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    price: '',
    category: '',
  });
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setFormData({ title: '', description: '', image: null, price: '', category: '' }); // Reset form
  };
  
  const handleShow = () => setShow(true);

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
    data.append('image', formData.image);
    data.append('price', formData.price);
    data.append('category', formData.category);

    const token = localStorage.getItem("token");

    try {
        const response = await apiPostAdverts(data, token); // Pass token to the API function

        // Check if the response is OK (status 200-299)
        if (response.ok) {  
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Advert posted successfully!',
            });
            handleClose(); // Close modal after successful submission
        } else {
            // Handle non-200 responses
            const result = await response.json(); // Parse the error response
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: result.message || 'Failed to post advert. Please try again.',
            });
        }
    } catch (error) {
        // Generic error handling
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'An error occurred while posting the advert.',
        });
    } finally {
        setLoading(false); // Reset loading state
    }
};


  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Advert
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Advert</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter the advert title"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Describe the product or service"
                rows="4"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-gray-700 font-medium">Upload Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                accept="image/*"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter the price"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className='w-1/5 h-14'>
            Close
          </Button>
          <Button 
            variant="primary"
            onClick={handleSubmit}
            className="w-1/5 bg-teal-600 text-white py-3 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 ease-in-out"
            disabled={loading} // Disable while loading
          >
            {loading ? 'Posting...' : 'Post Advert'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostAdvertModal;
