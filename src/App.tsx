import { useState } from "react";
import "./App.css";

// Import toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [text, setText] = useState<string>("");
  const [beshified, setBeshified] = useState<string>("");

  const onChangeTextHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const textValue = event.target.value;
    setText(textValue);

    // Replace all white spaces with '🤸' using .replace() and regex
    const beshifiedText = textValue.trim().replace(/\s/g, "🤸🏽");
    setBeshified(beshifiedText);
  };

  const onCopyClickHandler = () => {
    navigator.clipboard.writeText(beshified);
    toast("🤸🏽 Beshified text copied!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="container mx-auto h-screen">
      <div className="max-w-2xl m-auto h-screen flex flex-col justify-center items-center">
        <h1 className="my-10">✨ Beshinator ✨</h1>
        <div className="textarea-wrapper px-2">
          <textarea
            className="w-full border-2 border-black rounded-md p-2 resize-none"
            id="text"
            name="text"
            placeholder="Ba't malungkot ang beshy ko?"
            rows={10}
            value={text}
            onChange={onChangeTextHandler}
          ></textarea>
        </div>
        <div className="flex flex-row px-3 my-2 justify-between w-full">
          <span className="beshified-label">🤸🏽Beshified🤸🏽</span>
          <button
            className="copy-button border-2 border-black bg-indigo-500 text-white py-2 px-5 rounded-md hover:bg-indigo-600 disabled:bg-indigo-300 clickable"
            type="button"
            onClick={onCopyClickHandler}
            disabled={beshified === ""}
          >
            Copy
          </button>
        </div>
        <div className="textarea-wrapper px-2">
          <textarea
            className="w-full border-2 border-black rounded-md p-2 resize-none"
            id="beshified"
            name="beshified"
            placeholder="Ba't🤸🏽malungkot🤸🏽ang🤸🏽beshy🤸🏽ko?"
            rows={10}
            value={beshified}
            disabled
          />
        </div>
        <div></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
