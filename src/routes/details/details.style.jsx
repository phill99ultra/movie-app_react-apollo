import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

export const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

export const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 25%;
  height: 60%;
  background-color: transparent;
`;

export const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

export const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;
export const Description = styled.p`
  font-size: 28px;
`;