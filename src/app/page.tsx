"use client";
import CustomerDetailsPage from "@/container/customerdetail";
import DashboardPage from "@/container/dashboard";
import { useState } from "react";

export default function Home() {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const handleUserDetail = () => {
    setShowUserDetails(true);
  }
  return (
         <>
          <DashboardPage  handleUserDetail={handleUserDetail} />
         {showUserDetails &&  <CustomerDetailsPage />}
         </>
  );
}
