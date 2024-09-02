"use client";

import React, { useEffect, useState } from 'react';

const UserInvoice = ({ userId }) => {
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("extractId:", userId);


  const invoiceHandler = async () => {
    try {
      const response = await fetch(`https://next-resort-project.vercel.app/api/users/${userId}`);
      const newData = await response.json();
      console.log("newData:", newData);

      if (response.ok) {
        setInvoice(newData.data);
      } else {
        throw new Error(newData.message || 'Failed to fetch invoice data');
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    invoiceHandler();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!invoice || !invoice.bookings) {
    return <div>No invoice data available</div>;
  }

  const calculateDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.abs(end - start);
    return Math.ceil(difference / (1000 * 60 * 60 * 24)); 
  };

  const deleteBooking = async (bookingId) => {
    const isConfirmed = window.confirm("Are you sure to delete this booking?");
    if (!isConfirmed) {
      return; 
    }
  
    try {
      const response = await fetch(`https://next-resort-project.vercel.app/api/users/${bookingId}`, {
        method: 'DELETE',
      });
  
      const result = await response.json();
      if (response.ok) {
        setInvoice((prevInvoice) => ({
          ...prevInvoice,
          bookings: prevInvoice.bookings.filter((item) => item._id !== bookingId),
        }));
        console.log("Booking deleted:", result);
      } else {
        throw new Error(result.message || 'Failed to delete booking');
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Failed to delete booking');
    }
  };
  

  return (
    <div className="invoice-container">
    <h1>Username: {invoice.username}</h1>
  
    {invoice.bookings.length > 0 ? (
      invoice.bookings.map((item) => {
        const days = calculateDays(item.startDate, item.endDate);
        const totalAmount = days * item.price;
  
        return (
          <div key={item._id} className="booking-item">
            <h3>{item.productName}</h3>
            <p>Booking dates from {item.startDate} to {item.endDate}</p>
            <p>Discount: {item.offer}%</p>
            <p>Number of Days: {days}</p>
            <h4>Price per day: {item.price}</h4>
            <h4>Total Amount: {totalAmount}</h4>
           <div align="center">
           <button onClick={() => deleteBooking(item._id)}
                className="deleteBtn"
                >Delete Booking</button>
           </div>
          </div>
        );
      })
    ) : (
      <div className="no-bookings">No bookings available</div>
    )}
  </div>
  
  );
};

export default UserInvoice;
