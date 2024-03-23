import React from "react";
import PropTypes from "prop-types";

// Changed the function name to match the filename
function Email(props) {
  const { code } = props;
  return (
    <div className="font-sans bg-white max-w-lg mx-auto shadow-md">
      <div className="bg-gray-800 text-white text-lg font-semibold p-4">
        Verification Code
      </div>
      <div className="p-4">
        <p className="text-gray-700">Dear User,</p>
        <p className="text-gray-700 mt-2">
          Your verification code is: <strong>{code}</strong>.
        </p>
        <p className="text-gray-700 mt-2">
          Please use this code to complete your registration process.
        </p>
        <p className="text-gray-700 mt-2">
          Regards,
          <br />
          SeniorVerve Team
        </p>
      </div>
    </div>
  );
}

Email.propTypes = {
  code: PropTypes.string.isRequired, // Removed email prop as it's not used in this component
};

export default Email;
