import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  useEffect(() => {
    fetch(
      `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/info`
    ).then((res) => {
      res.json().then((data) => {
        const url = data.download_url as string;
        setAvatarUrl(url);
      });
    });
  }, []);
  return (
    <header className="header">
      <section className="website-info">
        <Image
          src={"/checklist.svg"}
          alt="website logo"
          width={50}
          height={50}
        />
        <h1>TasksBoard</h1>
      </section>
      <section className="user-icon">
        <img src={avatarUrl} alt="website logo" width={50} height={50} />
      </section>
    </header>
  );
};

export default Header;
