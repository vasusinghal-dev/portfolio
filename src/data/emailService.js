import emailjs from "@emailjs/browser";

const sendEmail = ({ name, email, message }) => {
  return emailjs.send(
    "service_y92vzzg",
    "template_15f1kgf",
    {
      name,
      email,
      message,
    },
    "3gO6qubDuG4lKhHqm"
  );
};
export default sendEmail;
