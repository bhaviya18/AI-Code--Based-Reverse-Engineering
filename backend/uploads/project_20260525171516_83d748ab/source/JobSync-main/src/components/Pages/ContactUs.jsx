

function ContactUs() {
  return (
    <div className="contact-container">
      <style>
        {`
          /* Global Styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(to bottom, #ffffff, #6c63ff);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeIn 2s ease-out;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          /* Container Styling */
          .contact-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 90%;
            max-width: 1200px;
            background: #ffffff;
            border-radius: 15px;
            padding: 2rem;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
            animation: slideUp 1s ease-out;
          }

          @keyframes slideUp {
            0% {
              transform: translateY(20%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* Form Container Styling */
          .form-container {
            flex: 1;
            min-width: 300px;
            padding: 1rem;
          }

          .form-container h1 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: #6c63ff;
            text-align: center;
            font-weight: bold;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          form input,
          form textarea,
          form button {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          form input:focus,
          form textarea:focus {
            border-color: #6c63ff;
            box-shadow: 0px 0px 8px rgba(108, 99, 255, 0.5);
          }

          form button {
            background-color: #6c63ff;
            color: #ffffff;
            border: none;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.3s ease, background-color 0.3s ease;
          }

          form button:hover {
            background-color: #4a46b5;
            transform: scale(1.05);
          }

          /* Hover effect for input fields */
          form input:hover,
          form textarea:hover {
            border-color: #6c63ff;
          }

          /* Graphic Section Styling */
          .graphic {
            flex: 1;
            min-width: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
          }

          .graphic-card {
            width: 100%;
            max-width: 300px;
            height: 200px;
            background-image: url('https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg');
            background-size: cover;
            background-position: center;
            border-radius: 20px;
            box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .graphic-card:hover {
            transform: scale(1.1);
            box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .contact-container {
              flex-direction: column;
            }

            .graphic {
              margin-top: 2rem;
            }
          }
        `}
      </style>

      <div className="form-container">
        <h1>Contact Us</h1>
        <form action="https://formspree.io/f/mjkvojvb" method="POST">
          <input type="text" placeholder="Your Name" name="Name" required />
          <input type="email" placeholder="Your Email" name="Email" required />
          <textarea
            placeholder="Your Message"
            name="Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="graphic">
        <div className="graphic-card"></div>
      </div>
    </div>
  );
}

export default ContactUs;
