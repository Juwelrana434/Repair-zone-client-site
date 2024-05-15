
import { useContext, useEffect } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../component/AuthProvider';
import { useLoaderData } from 'react-router-dom';
const BookingServices = () => {
  useEffect(() => {
    document.title = "booking";
    })
    const service = useLoaderData();
    const {
        service_image,
        _id,
        service_name,
        servicer_email,
        service_description,
        service_provider,
        service_price,
      } = service;
    useEffect(() => {
        document.title = "Booking Service";
        })
      const { user} = useContext(AuthContext);
    // console.log(user.email);
        const handleBookService = event => {
            event.preventDefault();
            const form = event.target;
            const serviceId = _id;
            const photo = service_image;
            const serviceName = service_name; // Fixed typo
            const date = form.date.value;
            const providerName= service_provider?.name; //
            const providerEmail = servicer_email;
            const instruction = form.instruction.value;
            const price = service_price;
            const userName = user.displayName;
            const email = user.email;
            
            
        
            // const bookService = { serviceId,photo, serviceName, date, providerName, location,instruction, price ,userName,email, providerEmail}; // Fixed property name
            const bookService = { serviceId,serviceName,userName,email, instruction,date,price,photo,providerName,providerEmail};
            // console.log(bookService);
            // send to server
            
            fetch('https://repair-zone-server-side.vercel.app/booking',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(bookService)
            })
            .then(res => res.json())
            .then(data =>{
            //  console.log(data)
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
             <div className="m-10 bg-[#f0f1f4] text-black">
        <h1 className="text-center py-6 text-[45px] font-bold">Booking a Service </h1>

        <form onSubmit={handleBookService}>
          <div className="grid lg:md:grid-cols-2 gap-6">
            <div>
              <label className='text-xl font-bold ml-2'>ServiceId</label>
              <br />
              <input
                type="text"
                readOnly
                name="serviceId"
               defaultValue={_id}
                className="w-full p-2 mt-4"
              />
              <label className='text-xl font-bold ml-2'>Service Name</label>
              <br />
              <input
              readOnly
                type="text"
                name="serviceName"
                defaultValue={service_name}
                className="w-full p-2 mt-4"
              />
              <label className='text-xl font-bold ml-2'>Service Image</label>
              <br />
              <input
              readOnly
                type="text"
                name="photo"
                defaultValue={service_image}
                className="w-full p-2 mt-4"
              />
              
              <br />
              
            </div>
            <div>
              
              <label className='text-xl font-bold ml-2'>Service Taking Date</label>
              <br />
              <input
                type="date"
                name="date"
                placeholder="Enter date to take"
                className="w-full p-2 mt-4"
              />
              <br />
              <label className='text-xl font-bold ml-2'>provider Name</label>
              <br />
              <input
              readOnly
                type="text"
                name="providerName"
                defaultValue={service_provider?.name}
                placeholder='provider name'
                className="w-full p-2 mt-4"
              />
              <br />
              <label className='text-xl font-bold ml-2'>provider email</label>
              <br />
              <input
              readOnly
                type="email"
                name="providerEmail"
                defaultValue={servicer_email}
                placeholder='provider name'
                className="w-full p-2 mt-4"
              />
             
          
          
            </div>
          </div>
          <label className='text-xl font-bold ml-2'>Special Instruction</label>
          <br />
          <textarea
            type="text"
            name="instruction"
            placeholder="write short Instruction"
            className="w-full p-2 my-4"
          />
          <input type="submit" value="Purchase Service" className="w-full btn btn-primary" />
        </form>
      </div>
        </div>
    );
};

export default BookingServices;