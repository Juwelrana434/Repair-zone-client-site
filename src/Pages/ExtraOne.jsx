
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



const ExtraOne = () => {
    const [comments, setComment] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/comment")
        .then((res) => res.json())
        .then((data) => setComment(data.slice(0,2)));
    }, []);  

// console.log(comments);


  const handleAddComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const number = form.number.value;
    const message = form.text.value;

    const addComment = {
      number,
      message,
      email,
      photo,
      name,
    }; // Fixed property name
    console.log(addComment);
    
    // send to server

    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addComment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add message successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="mx-4 my-16">
      <div className="grid lg:md:grid-cols-2">
        
        <div>
          <div className="bg-[#f0f1f4] text-black font-bold">
            <h1 className="text-center pt-6 text-[45px]">Send us a Message </h1>

            <form onSubmit={handleAddComment}>
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name*"
                  className="w-full p-2 mt-4"
                />

                <br />
                <input
                  type="photo"
                  name="photo"
                  placeholder="photoUrl*"
                  className="w-full p-2 mt-4"
                />

                <br />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email*"
                  className="w-full p-2 mt-4"
                />
                <br />
                <input
                  type="number"
                  name="number"
                  placeholder="Number*"
                  className="w-full p-2 mt-4"
                />
                <br />
                <textarea
                  type="text"
                  name="text"
                  rows="4"
                  required
                  placeholder="massage"
                  className="w-full p-2 mt-4"
                />
                <br />
              </div>

              <input
                type="submit"
                value="Send Message"
                className="w-full btn btn-primary"
              />
            </form>
          </div>
        </div>
        {/* [#eb4a62] */}
        <div className="bg-[#2980B9]">
        <h1 className="text-white font-bold text-center mt-4">WHAT OUR CLIENTS THINK</h1>
        <h1 className="text-white font-bold text-center text-2xl my-4">Our Testimonials</h1>
        <div>
        {comments.map((comment) =>(<div key={comment._id}>
        
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-20 rounded-full ">
      <img  src={comment?.photo} />
    </div>
  </div>
  <div className="chat-bubble bg-white text-black my-4"><h1>{comment.message}</h1></div>
</div>


        </div>))}
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default ExtraOne;
