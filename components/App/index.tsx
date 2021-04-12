import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import styled from '@emotion/styled';
import Modal from '../modal';

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin: 100px auto 0 auto;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  & div {
    font-size: 20px;
    color: #4c6ef5;
    cursor: pointer;
  }
`;

const App = () => {
  const [show, setShow] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback(
    ({ target }) => {
      console.log(target);
      if (popRef.current && !popRef.current.contains(target)) {
        setShow(false);
      }
    },
    [setShow]
  );

  useEffect(() => {
    document.addEventListener('click', onClickOutside);
    return () => {
      document.removeEventListener('click', onClickOutside);
    };
  }, []);

  const onClickToggleModal = useCallback(() => {
    setShow(prev => !prev);
  }, [setShow]);

  return (
    <Container>
      <div ref={popRef}>
        <FaAlignJustify onClick={onClickToggleModal} />
        <Modal show={show} />
      </div>
    </Container>
  );
};

export default App;
