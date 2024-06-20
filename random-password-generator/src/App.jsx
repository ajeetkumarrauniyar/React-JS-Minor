import { useState, useCallback, useEffect } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let char = "!@#$%^&*()_+-={}<>,.?/";

    if (numberAllowed) {
      str += num;
    }
    if (characterAllowed) {
      str += char;
    }

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="flex items-center mb-4">
          <input
            type="text"
            name="generatedPassword"
            id="generatedPassword"
            className="flex-grow border border-gray-300 rounded p-2 mr-2"
            value={password}
            readOnly
          />
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Copy
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="lengthAllowed" className="block text-gray-700 mb-2">
            Password Length
          </label>
          <input
            type="range"
            name="lengthAllowed"
            id="lengthAllowed"
            min={4}
            max={20}
            className="w-full cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <div className="flex justify-between text-gray-600 mt-1">
            <span>8</span>
            <span>
              Strength: <strong>{length}</strong>
            </span>
            <span>20</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            name="numberAllowed"
            id="numberAllowed"
            className="mr-2 cursor-pointer"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberAllowed" className="text-gray-700">
            Include Numbers
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="charAllowed"
            id="charAllowed"
            className="mr-2 cursor-pointer"
            defaultChecked={characterAllowed}
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charAllowed" className="text-gray-700">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
