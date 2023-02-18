import React, { useState } from 'react';
import { Alert } from '@windmill/react-ui';

function EmailSpan() {
  const [isCopied, setIsCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText('silikhesilas@gmail.com');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  return (
    <div className="flex items-center">
      <span
        className={`bg-purple-100 text-purple-800 text-sm font-medium mr-3 px-3.5 py-1.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400 focus:outline-none`}
        onClick={handleClick}
      >
        silikhesilas@gmail.com
      </span>
      {isCopied && (
        <Alert
          type="success"
          className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Email address copied!
        </Alert>
      )}
    </div>
  );
}
