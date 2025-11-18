"use client";

import { useState } from 'react';
import { subscribeNewsletter } from '../actions/newsletterAction';

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await subscribeNewsletter(formData);
      setSubmitStatus(result.message);
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-6">
      <form action={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {submitStatus && (
        <div className={`mt-2 text-sm ${
          submitStatus.includes('Successfully') 
            ? 'text-green-400' 
            : 'text-red-400'
        }`}>
          {submitStatus}
        </div>
      )}
    </div>
  );
}
