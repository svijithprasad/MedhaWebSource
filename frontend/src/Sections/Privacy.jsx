import React from 'react';

const PrivacyPolicy = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      backgroundColor:'white',
      margin: '0 auto',
      
      padding: '20px',
      lineHeight: '1.6',
      color: '#333',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#2c3e50',
      marginTop: "100px  " 
    },
    section: {
      marginBottom: '30px',
    },
    sectionHeader: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#34495e',
    },
    text: {
      fontSize: '16px',
      marginBottom: '15px',
    },
    list: {
      marginLeft: '20px',
      marginBottom: '15px',
    },
    link: {
      color: '#3498db',
      textDecoration: 'none',
    },
    contactInfo: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#ecf0f1',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Privacy Policy</h1>
      <p style={styles.text}>Last updated: November 13, 2024</p>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>1. Information We Collect</h2>
        <p style={styles.text}>
          We collect information to process your event registrations and payments securely. The types of information we may collect include:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Personal Information:</strong> When you register for an event, we may collect your name, college, phone number, and other necessary details required for registration and communication.
          </li>
          <li>
            <strong>Payment Information:</strong> We use Razorpay as our payment processor. We do not store your payment details directly. Razorpay processes your payment securely, and its privacy policy governs your payment data.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>2. How We Use Your Information</h2>
        <p style={styles.text}>
          We use the information we collect for several purposes, including:
        </p>
        <ul style={styles.list}>
          <li>Event Registration: To manage your participation in events and communicate with you about event details.</li>
          <li>Payment Processing: To securely process your payment through Razorpay and confirm your registration.</li>
          <li>Customer Support: To address your questions, requests, or concerns regarding the event or registration process.</li>
          <li>Analytics: To analyze website usage and improve our Service.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>3. Sharing Your Information</h2>
        <p style={styles.text}>
          We only share your information in limited circumstances:
        </p>
        <ul style={styles.list}>
          <li>Third-Party Payment Processor: Your payment details are handled by Razorpay, which processes payments securely and complies with all applicable data protection laws.</li>
          <li>Legal Requirements: We may disclose your information if required by law or to protect our rights, comply with legal obligations, or safeguard the public.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>4. Razorpay Payment Processing</h2>
        <p style={styles.text}>
          We integrate Razorpay to securely process payments. Razorpay may collect and process personal information independently and may have its own privacy policies. We encourage you to review Razorpay's privacy practices for more information.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>5. Refund Policy</h2>
        <p style={styles.text}>
          If you wish to request a refund for an event registration, the refund will be processed within 4 to 7 working days. Refunds are available only for payments made under the condition of unsuccessful event registration or other valid reasons as per our terms.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>6. Data Security</h2>
        <p style={styles.text}>
          We implement reasonable measures to protect your information. However, no electronic storage or transmission is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>7. Data Retention</h2>
        <p style={styles.text}>
          We retain personal information only for as long as necessary for event management, legal obligations, and business purposes. Once your information is no longer needed, we securely dispose of it.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>8. Your Rights</h2>
        <p style={styles.text}>
          Depending on your location, you may have the right to access, update, delete, or restrict the processing of your personal information. To exercise these rights, please contact us at the email provided below.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>9. Links to Other Websites</h2>
        <p style={styles.text}>
          Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites, and we encourage you to review their privacy policies.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>10. Changes to This Privacy Policy</h2>
        <p style={styles.text}>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the "Last updated" date will reflect the latest version. Your continued use of the Service after updates indicates your acceptance of the revised policy.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>11. Contact Us</h2>
        <div style={styles.contactInfo}>
          <p style={styles.text}>
            If you have any questions or concerns about this Privacy Policy, please contact us:
          </p>
          <p style={styles.text}>
            Shree Devi Institute of Technology<br />
            Kenjar, Near Mangalore International Airport, Karnataka - 574142<br />
            Email: <a href="mailto:sditmcadept2022@gmail.com

" style={styles.link}>sditmcadept2022@gmail.com
</a><br />
            Phone: <a href="tel:+919741152696" style={styles.link}>+91 9741152696</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;