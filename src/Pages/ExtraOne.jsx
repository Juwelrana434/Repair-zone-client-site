
import Swal from "sweetalert2";



const ExtraOne = () => {
  

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
    <div>
      <div className="grid lg:md:grid-cols-2">
        
        <div>
          <div className="m-10 bg-[#f0f1f4] text-black font-bold">
            <h1 className="text-center pt-6 text-[45px]">Send us a Message </h1>

            <form onSubmit={handleAddComment}>
              <div>
                <input
                  type="text"
                  name="name"
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
        <div className="bg-[#eb4a62]"></div>
      </div>
    </div>
  );
};

export default ExtraOne;
