import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format check
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[a-zA-Z\d]).{8,}$/;
    // ^ At least one uppercase, one special char, and 8+ total chars
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailError = '';
    let passwordError = '';

    if (!validateEmail(email)) {
      emailError = 'Please enter a valid email address.';
    }

    if (!validatePassword(password)) {
      passwordError = (
        <div className="text-red-500">
          <br />- At least 8 characters long
          <br />- Include one uppercase letter
          <br />- Include one special character
        </div>
      );
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({ email: '', password: '' });
      console.log('Form submitted successfully:', { email, password });
      alert('Sign In Successful!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.email ? 'border-red-500' : 'focus:ring-2 focus:ring-blue-500'
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.password
                  ? 'border-red-500'
                  : 'focus:ring-2 focus:ring-blue-500'
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-gray-600 text-sm text-center mt-4">
          Have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
