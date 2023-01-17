import { Field } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  border: none;
  width: 100%;
  padding-bottom: 8px;
  margin-bottom: 32px;
  border-bottom: 1px solid #E0E0E0;
  font-family: VerdanaBold;
  line-height: 16px;
  font-size: 14px;
  color: #212121;
  letter-spacing: 0.04em;
  background-color: transparent;

  &::placeholder {
    color: #9B9FAA;
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
  }
  &:hover,
  &:focus {
    &::placeholder {
      color: #FC842D;
    }
  }
  @media (min-width: 554px) and (max-width: 1023px) {
    padding-bottom: 20px;
    margin-bottom: 0;
    width: 240px;
  }
  @media (min-width: 1024px) {
    padding-bottom: 20px;
    margin-bottom: 0;
    width: 240px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 8px;
  font-family: VerdanaBold;
  line-height: 1.2;
  font-size: 14px;
  color: #9B9FAA;
  letter-spacing: 0.04em;
  &:hover,
  &:focus {
    color: #FC842D;
  }

  @media (min-width: 426px) and (max-width: 1023px) {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    width: 240px;
  }
  @media (min-width: 1024px) {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    width: 240px;
  }
`;

export const Checkbox = styled(Field)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  &:checked {
    appearance: none;
    border-radius: 50%;
    background: #FC842D;
    border: 5px solid #fff;
    box-shadow: 0 0 0 1px #9B9FAA;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: #FC842D;
`;

export const Error = styled.div`
  position: absolute;
  margin-top: -30px;
  font-size: 10px;
  color: white;
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  width: 75%;
  @media (min-width: 426px) {
    margin-top: 0;
    width: 240px;
  }
`;

export const List = styled.ul`
  margin-bottom: 40px;
  padding-right: 40px;
  @media (min-width: 554px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 40px;

    padding-right: 224px;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 40px;
    width: 608px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 426px) and (max-width: 1023px) {
    justify-content: flex-start;
  }
  @media (min-width: 1024px) {
    justify-content: flex-start;
    display: inline-block;
    position: relative;
    left: 339px;
  }
`;

export const ButtonForm = styled.button`
  padding: 13px 25px;
  border-radius: 30px;
  border: none;
  font-family: Verdana, sans-serif;
  line-height: 1.2;
  font-size: 14px;
  letter-spacing: 0.04em;
  display: block;
  cursor: pointer;

  color: #ffffff;
  background: #FC842D;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  position: relative;
  &:hover,
  :focus {
    background: #f07116;
  }
  &::before {
    content: '';
    position: absolute;
    top: -11px;
    left: 5px;
    width: 72px;
    height: 22px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 50px -15px 0 10px #fff;
    opacity: 1;
    transition: opacity 700ms linear;
  }
  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 167px;
    width: 50px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    box-shadow: -35px -10px 0 10px #fff;
    opacity: 1;
    transition: opacity 700ms linear;
  }
`;
