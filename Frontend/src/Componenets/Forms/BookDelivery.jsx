import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormContext } from '../ContextApi/FormProvider';
import axios from 'axios';

function BookDeliveryForm() {
  const navigate = useNavigate();
  const successOrder = () => toast.success("Order inserted successfully!");
  // const errorOrder = () => toast.error("Order insertion failed!");
  // const errorOrder = () => toast("Order inserted successfully!");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    // navigate('/');
    successOrder();

    // try {
    //     const res = await axios.post("http://localhost:3000/api/orders/blood/insert", data)
    //     console.log(res.data);
    //     if (res.data) {
    //         // navigate("/");
    //         successOrder();  // Show the toast notification
    //         setTimeout(() => navigate("/"), 2000);  // Delay navigation to ensure the toast is visible
    //     } else {
    //         errorOrder();
    //     }
    // } catch (error) {
    //     console.error("Error:", error);
    //     if (error.response) {
    //         // The request was made, and the server responded with a status code that falls out of the range of 2xx
    //         alert("Error: " + error.response.data.error);
    //     } else if (error.request) {
    //         // The request was made, but no response was received
    //         alert("No response from server.");
    //     } else {
    //         // Something happened in setting up the request that triggered an Error
    //         alert("Error in setting up request: " + error.message);
    //     }
    // }
  }

  const { handleAnalyzeClick } = useFormContext();

  return (
    <div className="">
      <div className="rounded-2xl shadow-lg flex justify-center flex-col mx-5 py-10 bg-white">
        <h1 className="text-center font-bold text-2xl text-rose-500 mb-9">Book Delivery Form</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 mx-16">

          {/* Full Name */}
          <div className="">
            <label className="font-semibold">Full Name</label> <br />
            <input
              type="text" placeholder="Enter your name"
              className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Phone Number */}
            <div className="">
              <label className="font-semibold">Phone Number</label> <br />
              <input
                type="tel" placeholder="Enter your phone number"
                className="outline-none py-1 px-1 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
                {...register("phone", { required: true, pattern: /^[0-9]+$/ })}
              />
              {errors.phone && <span className="text-sm text-red-500">Valid phone number is required</span>}
            </div>

            {/* Email */}
            <div className="">
              <label className="font-semibold">Email Address</label> <br />
              <input
                type="email" placeholder="Enter your email"
                className="outline-none py-1 px-1 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">Email is required</span>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Pickup Address */}
            <div className="">
              <label className="font-semibold">Pickup Address</label> <br />
              <input
                type="text" placeholder="123 Main Street"
                className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
                {...register("pickupAddress", { required: true })}
              />
              {errors.pickupAddress && <span className="text-sm text-red-500">Pickup Address is required</span>}
            </div>

            {/* Delivery Address */}
            <div className="">
              <label className="font-semibold">Delivery Address</label> <br />
              <input
                type="text" placeholder="Apt 4B"
                className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
                {...register("deliveryAddress", { required: true })}
              />
              {errors.deliveryAddress && <span className="text-sm text-red-500">Delivery Address is required</span>}
            </div>
          </div>

          {/*
          <div className="grid grid-cols-3 gap-2">
            
            <div className="pr-2">
              <label className="font-semibold">City</label> <br />
              <input
                type="text" placeholder="Enter your city"
                className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
                {...register("city", { required: true })}
              />
              {errors.city && <span className="text-sm text-red-500">City is required</span>}
            </div>

            <div className="pr-2">
              <label className="font-semibold">State/Province</label> <br />
              <input
                type="text" placeholder="Enter your state"
                className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
                {...register("state", { required: true })}
              />
              {errors.state && <span className="text-sm text-red-500">State is required</span>}
            </div>

            Postal Code
            <div className="">
              <label className="font-semibold">Postal Code</label> <br />
              <input
                type="text" placeholder="Enter postal code"
                className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
                {...register("postalCode", { required: true, pattern: /^[0-9]+$/ })}
              />
              {errors.postalCode && <span className="text-sm text-red-500">Postal code is required and must be a number</span>}
            </div>
          </div>
        */}

          <div className="grid grid-cols-2 gap-4">
            {/* Delivery Date */}
            <div className="">
              <label className="font-semibold">Delivery Date</label> <br />
              <input
                type="date"
                className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
                {...register("deliveryDate", { required: true })}
              />
              {errors.deliveryDate && <span className="text-sm text-red-500">Delivery date is required</span>}
            </div>

            {/* Preferred Time Slot */}
            <div className="">
              <label className="font-semibold">Preferred Time Slot</label>
              
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="4:00 PM"
                    className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
                    {...register("startTime", { required: true })}
                  />
                  {errors.startTime && <span className="text-sm text-red-500">Start time is required</span>}
                </div>

                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="8:00 PM"
                    className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
                    {...register("endTime", { required: true })}
                  />
                  {errors.endTime && <span className="text-sm text-red-500">End time is required</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Type */}
          <div className="">
            <label className="font-semibold">Delivery Type</label> <br />
            <select
              className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
              {...register("deliveryType", { required: true })}
            >
              <option value="Standard Delivery">Standard Delivery</option>
              <option value="Express Delivery">Express Delivery</option>
              <option value="Urgent Delivery">Urgent Delivery</option>
            </select>
            {errors.deliveryType && <span className="text-sm text-red-500">Delivery type is required</span>}
          </div>

          {/* Order Items */}
          <div className="">
            <label className="font-semibold">Order Items</label> <br />
            <textarea
              placeholder="Item description"
              className="outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2"
              {...register("orderItems", { required: true })}
            />
            {errors.orderItems && <span className="text-sm text-red-500">Order items are required</span>}
          </div>

          {/* Notifications */}
          <div className="mb-4 flex justify-between">
            <label className="font-semibold">Notifications</label> <br />
            <label>
              <input type="checkbox" {...register("notifications.sms")} /> SMS
            </label> <br />
            <label>
              <input type="checkbox" {...register("notifications.email")} /> Email
            </label> <br />
            <label>
              <input type="checkbox" {...register("notifications.realTimeTracking")} /> Real-Time Tracking
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            onClick={handleAnalyzeClick} 
            className="bg-rose-500 text-white font-bold py-2 px-4 rounded"
          >
            Analyse
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookDeliveryForm;