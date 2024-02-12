"use client";
import React from "react";
import DashBoard from "./DashBoard";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return <DashBoard router={router} />;
}
