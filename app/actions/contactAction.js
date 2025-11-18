"use server";

export async function submitContactForm(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { success: false, message: "All fields are required" };
  }

  try {
    const response = await fetch('https://your-api.com/api/v1/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}
