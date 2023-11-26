import React, { useRef } from 'react';

const LoginNative = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const userData = {
      username: formData.get('username'),
      password: formData.get('password'),
    };
    console.log('User Data:', userData);
  };

  return (
    <div class="bg-gray-700 h-screen text-black">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginNative;
