import React from "react";
import styled, { css } from "styled-components";
import FilteredPropsInputField from "../components/propsInputFIeld";

export const Input = styled(FilteredPropsInputField)`
  background-color: #f7f7f7;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5rem;
  text-color: #c7c9cf;
  font-style: normal;
  font-weight: 300;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }
  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);
      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`;
export const SubmitA = styled.button`
  width: 100%;
  background-color: #121728;
  margin-top: 1.5rem;
  display: block;
  text-align: center;
  font-size: 16px;
  line-height: 1.5rem;
  font-style: normal;
  height: 3rem;
  border-radius: 4px;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

export const SubmitB = styled.button`
  width: 100%;
  margin-top: 15px;
  display: block;
  border: 1px solid #121728;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  line-height: 1.5rem;
  font-style: normal;
  height: 3rem;
  white-space: nowrap;
  color: #121728 !important;
  padding: 0.5rem 1rem;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;
