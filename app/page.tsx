import React from "react";

import QuickQuestions from "@/components/QuickQuestions/QuickQuestions";
import UserInput from "@/components/UserInput/UserInput";

const Home = () => {
  return (
    <>
      <div className="user-input-container">
        <QuickQuestions />
        <UserInput />
      </div>
    </>
  );
};

export default Home;
