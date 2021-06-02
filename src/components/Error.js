import React from 'react';
import image from '../images/noData.png';
import styled from 'styled-components';

const Error = () => {
  return (
    <div>
      <ImageContainer>
        <img
          src={image}
          style={{ objectFit: 'contain', height: '100%' }}
          alt='Error img'
        />
      </ImageContainer>
      <ErrorMessage>
        No results found for the entered State, Pin code or Date, Please Try
        Again
      </ErrorMessage>
    </div>
  );
};

export default Error;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  height: 300px;
`;

const ErrorMessage = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  font-weight: bold;
`;
