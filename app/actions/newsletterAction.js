"use server";

export async function subscribeNewsletter(formData) {
  const email = formData.get('email');

  if (!email) {
    return { success: false, message: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address" };
  }

  try {
    const response = await fetch('https://your-api.com/api/v1/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }

    return { success: true, message: "Successfully subscribed to newsletter!" };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, message: "Failed to subscribe. Please try again." };
  }
}
