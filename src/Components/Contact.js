import React,{useState} from 'react'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));

        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
    
        if (!formData.name) {
          validationErrors.name = "Name is required";
        }
    
        if (!formData.email) {
          validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          validationErrors.email = "Invalid email format";
        }
    
        if (!formData.message) {
          validationErrors.message = "Message is required";
        }
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          // Form is valid, you can proceed with submission
          alert("Form submitted:", formData);
          // Clear form data after successful submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });

        }
      };
  return (
    <div id="contact" className="w-full lg:h-[540px] h-[635px] lg:px-[90px] px-[19px] lg:py-[82px] py-[62px] bg-cover relative" style={{ backgroundImage: `url(${require("../assets/contactbg.png")})` }}>
        <div className='  flex lg:flex-row flex-col flex lg:gap-32 sm:gap-20 gap-2 overflow-hidden'>
        
        <div className="flex flex-col sm:text-start text-center lg:w-1/2">
          <p className="font-semibold text-[26px] text-[white] text-opacity-50">Newsletter</p>
          <p className="text-[white] text-[lg]  text-opacity-50 font-normal break-word "> Get news about articles and updates in your inbox.</p>
        </div>

        <div className="flex flex-col pr-[120px]  sm:w-[100%] w-screen sm:pt-[0px] pt-[65px]">
          <form onSubmit={handleSubmit}>
            <div className="relative">
            {errors.name && (
                <p className="absolute text-red-500 text-[12px]">{errors.name}</p>
              )}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
                className={`border-b border-grey-200 bg-transparent w-full px-3 py-2 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              
              
            </div>
            <div className="relative">
            {errors.email && (
                <p className=" absolute text-red-500 text-[12px]">{errors.email}</p>
              )}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                className={`border-b border-grey-200 bg-transparent w-full px-3 py-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              
            </div>

            <div className="relative">
            {errors.message && (
                <p className=" absolute text-red-500 text-[12px]">{errors.message}</p>
              )}
              <input
                type="text"
                id="message"
                name="message"
                placeholder="MESSAGE"
                value={formData.message}
                onChange={handleChange}
                className={`border-b border-grey-200 bg-transparent w-full px-3 py-2 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            
  <div className="z-10 absolute lg:top-[45%] md:top-[62%] lg:left-[80%] md:left-[60%] lg:w-[160px] lg:h-[160px] sm:w-[120px] sm:h-[120px] w-[100px] h-[100px] sm:top-[420px] left-[270px] top-[400px] hover:bg-[#F07E15] rounded-full border border-[#F07E15] flex items-center justify-center">
    <button className="w-full h-full text-[#F07E15] hover:text-white transition duration-300 rounded-full flex items-center justify-center">
      SEND
    </button>
  </div>


          </form>
        </div>
      </div>

      <div className=" flex flex-col text-[white] font-custom font-bold lg:text-[135px] text-[55px] relative">
        <span className='sm:pt-[0px] pt-[35px]'>GET </span>
        <div className="flex lg:flex-row sm:flex-row flex-row">
          <span className="absolute lg:top-20 md:top-10 sm:top-10 top-[80px]">IN</span>
          <span className="absolute sm:top-20 top-[123px] lg:left-[260px]">TOUCH</span>
        </div>
        
      </div>

   </div>
  )
}

export default Contact;