import React from "react";

import QuickQuestions from "@/components/QuickQuestions/QuickQuestions";
import UserInput from "@/components/UserInput/UserInput";
import UserInputWrapper from "@/components/UserInput/UserInputWrapper";

const Home = () => {
  return (
    <>
      <UserInputWrapper>
        <QuickQuestions />
        <UserInput />
      </UserInputWrapper>
    </>
  );
};

export default Home;
