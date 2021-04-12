import React, { FC, useRef, useEffect, useCallback, useState } from 'react';
import styled from '@emotion/styled';

const MenuBox = styled.ul`
  position: absolute;
  top: 50px;
  left: 100px;

  margin: 0;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  list-style: none;

  & li {
    font-size: 16px;
    color: #dee2e6;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      color: #4c6ef5;
    }
  }
`;

interface Props {
  show: boolean;
}

const Modal: FC<Props> = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <MenuBox>
      <li>마이페이지</li>
      <li>구매 내역</li>
      <li>설정</li>
    </MenuBox>
  );
};

export default Modal;
