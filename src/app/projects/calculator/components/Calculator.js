import React from "react";
import "@/app/projects/calculator/styles/style.css";
import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Button = styled.button`
  background-color: rgb(49, 49, 49);
  border-color: rgb(49, 49, 49);
  font-weight: 500;
  font-size: 29px;
  height: 65px;
  width: 65px;
  margin: 0.25rem;
  border: none;
`;

const ButtonLight = styled.button`
  background-color: rgb(160, 160, 160);
  border-color: rgb(160, 160, 160);
  color: black;
  font-weight: 500;
  font-size: 29px;
  height: 65px;
  width: 65px;
  margin: 0.25rem;
  border: none;
`;

const ButtonBlue = styled.button`
  background-color: rgb(16, 169, 250);
  border-color: rgb(16, 169, 250);
  font-weight: 500;
  font-size: 29px;
  height: 65px;
  width: 65px;
  margin: 0.25rem;
  border: none;
`;

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleAllClear = () => {
    setResult("");
  };

  const handleClear = () => {
    setResult(result.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const calcResult = eval(result);

      if (Number.isFinite(calcResult)) {
        setResult(calcResult.toString());
      } else {
        setResult("Invalid");
      }
    } catch (err) {
      setResult("Error");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCalculate();
    }
  };

  const isValidInput = (input) => {
    const allowedInputRegex = /^[0-9+\-*/.%()\b]*$/;
    return allowedInputRegex.test(input);
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (isValidInput(inputValue)) {
      setResult(inputValue);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [result]);

  return (
    <div
      className={`container-sm d-flex flex-column justify-content-center align-items-center mb-4`}>
      <div
        className={`bg-black rounded-5 p-4 d-flex flex-column justify-content-center mt-4`}>
        <div>
          <input
            type="text"
            className={`display bg-black text-white border-0 rounded`}
            style={{ textAlign: "right" }}
            value={result}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="row mt-3">
          <ButtonLight
            onClick={handleAllClear}
            className={`col rounded-circle`}>
            AC
          </ButtonLight>

          <ButtonLight
            onClick={handleClear}
            className={`col rounded-circle`}
            variant="secondary">
            C
          </ButtonLight>
          <ButtonLight
            onClick={handleClick}
            className={`col rounded-circle`}
            variant="secondary"
            name="%">
            %
          </ButtonLight>
          <ButtonBlue
            onClick={handleClick}
            className={`col rounded-circle btn btn-primary`}
            name="/">
            ÷
          </ButtonBlue>
        </div>
        <div className="row">
          <Button
            name="7"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            7
          </Button>
          <Button
            name="8"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            8
          </Button>
          <Button
            name="9"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            9
          </Button>
          <ButtonBlue
            name="*"
            onClick={handleClick}
            className={`col rounded-circle btn btn-primary`}>
            x
          </ButtonBlue>
        </div>
        <div className="row">
          <Button
            name="4"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            4
          </Button>
          <Button
            name="5"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            5
          </Button>
          <Button
            name="6"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            6
          </Button>
          <ButtonBlue
            name="-"
            onClick={handleClick}
            className={`col rounded-circle btn btn-primary`}>
            -
          </ButtonBlue>
        </div>
        <div className="row">
          <Button
            name="1"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            1
          </Button>
          <Button
            name="2"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            2
          </Button>
          <Button
            name="3"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            3
          </Button>
          <ButtonBlue
            name="+"
            onClick={handleClick}
            className={`col rounded-circle btn btn-primary`}>
            +
          </ButtonBlue>
        </div>
        <div className="row row-cols-12">
          <Button
            name="0"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            0
          </Button>
          <Button
            name="00"
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            00
          </Button>
          <Button
            name="."
            onClick={handleClick}
            className={`col rounded-circle btn btn-dark`}>
            .
          </Button>
          <ButtonBlue
            onClick={handleCalculate}
            className={`col rounded-circle btn btn-primary`}>
            =
          </ButtonBlue>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
