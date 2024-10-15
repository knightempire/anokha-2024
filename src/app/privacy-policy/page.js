import React from "react";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#192032] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Markdown className="prose dark:prose-invert text-white">
          {`
# Privacy Policy for Anokha 2024

**Last Updated:** 10/10/2024

This Privacy Policy explains how Anokha 2024 collects, uses, and protects your personal information when you participate in our event designed for college students, visit our [website](https://anokha.amrita.edu), or engage with us in other ways.

### 1. Information We Collect

We may collect the following types of information:

- **Personal Information:** When you register for the event, we may collect personal information such as your name, email address, phone number, college/university name and city.

- **Event Participation Data:** We may collect information about your participation in workshops, sessions, and networking events.

### 2. How We Use Your Information

We may use the information we collect for various purposes, including:

- To process your registration and manage your participation in the event.
- To communicate important information about the event, including schedules and updates.
- To analyze usage and trends to improve our event offerings and website experience.

### 3. Sharing Your Information

We do not sell or rent your personal information to third parties. We may share your information in the following situations:

- **With Service Providers:** We may share your information with third-party vendors who assist us in organizing the event, such as payment platforms.

- **For Legal Reasons:** We may disclose your information if required to do so by law or in response to valid requests by public authorities.

### 4. Data Security

We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.

### 5. Your Rights

Depending on your location, you may have the following rights regarding your personal information:

- The right to access the information we hold about you.
- The right to request corrections to your information.
- The right to request deletion of your information.

To exercise these rights, please contact us using the information below.

### 6. Third-Party Links

Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies.

### 7. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date.

### 8. Contact Us

If you have any questions about this Privacy Policy, please contact us:

- **Email:** anokhapr@cb.amrita.edu
- **Address:** Amrita Vishwa Vidyapeetham, Coimbatore Campus, Amritanagar, Coimbatore - 641 112.
          `}
        </Markdown>

        <Link
          href="/"
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
