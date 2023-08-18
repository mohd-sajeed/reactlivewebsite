// import { prettyDOM } from "@testing-library/react";
import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
  
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
    );
  };
  
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
      <form onSubmit={formSubmit}>

      
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                FullName
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="fullname"

                placeholder="Enter your name"
                value={data.fullname}
                onChange={inputEvent}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="phone"

                placeholder="mobile Number"
                value={data.phone}
                onChange={inputEvent}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                placeholder="email address"
                value={data.email}
                onChange={inputEvent}
              />
            </div>

            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="msg"
              value={data.msg}
              onChange={inputEvent}
            >

            </textarea>
            <div className="col-12mt-5">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
