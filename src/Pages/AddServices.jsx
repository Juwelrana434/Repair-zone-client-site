import { useContext, useEffect } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../component/AuthProvider';
const AddServices = () => {
  useEffect(() => {
    document.title = "Add Services";
    })
  const { user} = useContext(AuthContext);
console.log(user.email);
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const service_image = form.photo.value;
        const service_name = form.serviceName.value; // Fixed typo
        const location = form.serviceArea.value;
        const service_description = form.description.value;
        const service_price = form.price.value;
        const name = user.displayName;
        const image = user.photoURL;
        const email = user.email;
        
        
    
        const newAddService = { service_image, 
          service_name, location, service_description
          , 
          service_price ,image,email, name }; // Fixed property name
        console.log(newAddService);
        // send to server
        
        fetch('http://localhost:5000/services',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(newAddService )
        })
        .then(res => res.json())
        .then(data =>{
         console.log(data)
         if(data.insertedId){ 
          Swal.fire({
            title: 'Success!',
            text: 'User added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
         }
         
         
         }) 
        
      };
    return (
    
        <div>
             <div className="m-10 bg-[#f0f1f4] text-black font-bold">
        <h1 className="text-center pt-6 text-[45px]">Add Services </h1>

        <form onSubmit={handleAddService}>
          <div className="grid lg:md:grid-cols-2 gap-6">
            <div>
              <label>Image</label>
              <br />
              <input
                type="text"
                name="photo"
                placeholder="Enter image URL"
                className="w-full p-2 mt-4"
              />
              <label>Service Name</label>
              <br />
              <input
                type="text"
                name="serviceName"
                placeholder="Enter Your service Name"
                className="w-full p-2 mt-4"
              />
              <br />
              
            </div>
            <div>
              
              <label>Price</label>
              <br />
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="w-full p-2 mt-4"
              />
              <br />
              <label>Service Area</label>
              <br />
              <input
                type="text"
                name="serviceArea" // Fixed input name
                placeholder="Enter service area"
                className="w-full p-2 mt-4"
              />
              <br />
            </div>
          </div>
          <label>Description</label>
          <br />
          <br />
          <textarea
            type="text"
            name="description"
            placeholder="write short description"
            className="w-full p-2 my-4"
          />
          <input type="submit" value="Add Service" className="w-full btn btn-primary" />
        </form>
      </div>
        </div>
    );
};

export default AddServices;