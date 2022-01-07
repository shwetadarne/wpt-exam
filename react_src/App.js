import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";

export default function App() {
  return <Component />;
}

function Component() {
  const [message, setmessage] = useState("");
  const [list, setlist] = useState([]);

  async function text(e) {
    setmessage(e.target.value);
  }

  const data = {
    message: message,
  };
  async function adduser() {
    const url = "http://localhost:5000/add-users";

    await axios.post(url, data);
    const newlist = [data, ...list];
    setlist(newlist);
    setlist("");
  }

  async function getuser() {
    const url = "http://localhost:5000/users";
    const list = await axios.get(url);
    const newlist = [...list];
    setlist(newlist);
  }

  useEffect(() => getuser(), []);

  return (
    <div className="">
      <div className="c2">
        <input
          className="c1"
          type="text"
          placeholder="message here.."
          onChange={text}
        />
      </div>

      <div className="c2 ">
        <input
          className="btn"
          type="button"
          value="write here.."
          onClick={adduser}
        />
        <input
          className="btn"
          type="button"
          value="getuser.."
          onClick={getuser}
        />
      </div>
    </div>
  );
}
