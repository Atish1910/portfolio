import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onRegistration = (data) => {
    debugger;
    // Delay storing the form data by 1 second (1000 ms)
    setTimeout(() => {
      localStorage.setItem("formData", JSON.stringify(data));
      console.log("Form data saved to localStorage:", data);
    }, 5000); // adjust delay as needed

    // You can still do other logic here (e.g., show loading spinner)
  };

  return (
    <>
      <section className="bg-grey py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center d-flex justify-content-center mb-4">
              <h2 className="title-01 mb-0 py-2 px-5">Contact Me</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit(onRegistration)}>
                {/* Full Name */}
                <input
                  type="text"
                  className={`mb-3 form-control ${
                    errors.name ? "input-errors" : ""
                  }`}
                  placeholder="Enter Full Name"
                  {...register("name", { required: "Full Name is required" })}
                />
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}

                {/* Phone Number */}
                <input
                  type="number"
                  className={`mb-3 form-control ${
                    errors.contactNumber ? "input-errors" : ""
                  }`}
                  placeholder="Enter Phone No"
                  {...register("contactNumber", {
                    required: "Phone number is required",
                  })}
                />
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}

                {/* Email */}
                <input
                  type="email"
                  className={`mb-3 form-control ${
                    errors.email ? "input-errors" : ""
                  }`}
                  placeholder="Enter Email Id"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}

                <textarea
                  name=""
                  rows={5}
                  className={`mb-3 form-control ${
                    errors.textarea ? "input-errors" : ""
                  }`}
                  placeholder="Enter Your message"
                  id=""
                  {...register("textarea", {
                    required: "Enter Minimum 10 Letters",
                  })}
                ></textarea>
                {errors.textarea && (
                  <p className="text-danger">{errors.textarea.message}</p>
                )}

                <div className="text-center pt-4">
                  <button
                    className="btn btn-form px-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please Wait..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
