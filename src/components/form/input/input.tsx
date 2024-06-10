import React, { ReactElement, useEffect, useState } from 'react';

interface InputProps {
  title?: string;
  input?: string;
  placeholder?: string;
  className: string;
  regex?: RegExp;
  error?: string;
  type?: 'text' | 'password';
  action?: ReactElement;
  leading?: ReactElement;
  onActionClick?: React.FC;
}

export default function Input(props: InputProps) {
  const [input, setInput] = useState<string>(props.input ?? '');
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const validate = (input: string) => {
    const regex = props.regex ?? /^$/;
    return regex.test(input);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const handleSubmit = () => {
    setIsSubmit(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (isSubmit && input && !validate(input)) {
      setError(props.error ?? '');
    } else {
      setError('');
    }
  }, [input]);
  return (
    <div>
      {props.title && <p>{props.title}</p>}
      <div className='flex justify-between items-center'>
        <div>
          {props.leading}
          <input
            className={props.className}
            type={props.type ?? 'text'}
            placeholder={props.placeholder ?? ''}
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            // onBlur={handleSubmit}
          />
        </div>
        <button onClick={props.onActionClick}>{props.action}</button>
      </div>
      {error != '' && <p className='text-red-500'>{error}</p>}
    </div>
  );
}
