import React from "react";
import App from "../App";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <App />
    </article>
  );
};
