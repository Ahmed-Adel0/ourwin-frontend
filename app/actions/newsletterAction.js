"use server";

import logger from "@/lib/logger";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export async function subscribeNewsletter(formData) {
  const email = formData.get("email");

  if (!email) {
    return { success: false, message: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address" };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to subscribe");
    }

    return { success: true, message: "Successfully subscribed to newsletter!" };
  } catch (error) {
    logger.error("Newsletter subscription error:", error);
    return {
      success: false,
      message: "Failed to subscribe. Please try again.",
    };
  }
}
