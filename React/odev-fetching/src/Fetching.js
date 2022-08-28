import axios from "axios";
import { useEffect, useState } from "react";

export default function Fetching() {
  const [usersData, setUsersData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [count, setCount] = useState(-1);

  const increase = () => {
    setCount(count => count + 1);
  }

  useEffect(() => {
    const getData = async () => {
      let sayi = prompt("Lütfen 1-10 arasında sayı giriniz.");
      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + `${sayi}`
      );
      console.log(users);
      setUsersData(users);

      const { data: posts } = await axios(
        "https://jsonplaceholder.typicode.com/posts?userId=" + `${sayi}`
      );
      console.log(posts);
      setPostsData(posts);
    };
    getData(setUsersData, setPostsData);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft:"20px",
        marginRight:"20px",
        fontStyle: "italic",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      <div style={{ textAlign: "left" }}>
        <h2 style={{ color: "gray" }}>Users Data</h2>
        <p>
          <span className="sp1">id:</span>{" "}
          <span className="sp2">{usersData.id}</span>
        </p>
        <p>
          <span className="sp1">name:</span>{" "}
          <span className="sp3">"{usersData.name}"</span>{" "}
        </p>
        <p>
          <span className="sp1">username:</span>{" "}
          <span className="sp3">"{usersData.username}"</span>
        </p>
        <p>
          <span className="sp1">email:</span>{" "}
          <span className="sp3">"{usersData.email}"</span>
        </p>
        <p>
          <span className="sp1">phone:</span>
          <span className="sp3">"{usersData.phone}"</span>
        </p>
        <p>
          <span className="sp1">website: </span>
          <span className="sp3">"{usersData.website}"</span>
        </p>
      </div>
      <div style={{ textAlign: "left" }}>
        <h2 style={{ color: "gray" }}>Posts Data</h2>
        {postsData.map((item,setCount) => (
          <div key={item.id}>
           <p><span className="sp1">{setCount}: </span></p>                       
           <p><span className="sp1 index">userId: </span><span className="sp2">{item.userId}</span></p>
           <p><span className="sp1 index">id: </span><span className="sp2">{item.id}</span></p>
           <p><span className="sp1 index">title: </span><span className="sp3">"{item.title}"</span></p>
           <p><span className="sp1 index">body: </span><span className="sp3">"{item.body}"</span></p>
           <hr size="2px" color="gray"/>
         </div>         
        ))}
      </div>
    </div>
  );
}
