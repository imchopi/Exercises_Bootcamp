import React from "react";
import { Part1, Part2, Part3 } from "./Parts";

export const Content = () => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Part1 part1={part1} exercises1={exercises1} />
      <Part2 part2={part2} exercises1={exercises2} />
      <Part3 part3={part3} exercises1={exercises3} />
    </div>
  );
};
