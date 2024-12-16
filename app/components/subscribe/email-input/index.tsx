import EmailIcon from "./email-icon";

function Email() {
  return (
    <div className="w-full flex items-center gap-3 bg-base rounded-full px-4 py-3">
      <EmailIcon />
      <input
        placeholder="Enter your email address"
        className="text-sm  bg-transparent outline-none text-neutral/40 "
      />
    </div>
  );
}

export default Email;
