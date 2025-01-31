// SuccessPage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useVideoContext } from "../../Context/VideoContext";
import { Axios } from "../MainRouter";

const SuccessPage = () => {
  const navigate = useNavigate();
  const { setError,setLoading,setUser,sessionId,user} = useVideoContext();
  console.log("sabik",user);
  const loginuser=localStorage.getItem('user')
  const amount = JSON.parse(localStorage.getItem("selectedAmount"));

  const uuser=JSON.parse(loginuser)
  console.log("uuser",uuser.email);
  console.log("amount",amount);
  

  useEffect(() => {
    // Here you can make an API call to check if the payment was successful
    // Optionally you can redirect after a delay or based on some condition
  }, []);

  const verifyPremium = async () => {
    if (!sessionId) {
      setError("Session ID is missing.");
      return;
    }

    setLoading(true);
    try {
      const response = await Axios.post(`/user/verifypremium/${sessionId}`, {
        email:uuser.email,
        amount:amount
      });

      const userData = response.data.user;
      console.log("Verified user:", userData);
console.log("response",response);



      setUser(userData); // ✅ Store user in context instead of Redux
      navigate("/"); // ✅ Redirect after verification
    } catch (error) {
      console.error("Verification failed:", error);
      setError("There was an error verifying your payment. Please try again.");
    } 
  };

  return (
    <div className="bg-green-500 min-h-screen text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-extrabold mb-4">Payment Successful!</h1>
      <p className="text-lg">Thank you for your purchase. Your payment was processed successfully.</p>
      <div className="mt-6">
        <button
         onClick={()=>verifyPremium()}
 // You can navigate to your desired page
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Go to HomePage
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
