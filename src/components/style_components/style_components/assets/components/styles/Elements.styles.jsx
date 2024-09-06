import styled from "styled-components";

export const Tag = styled.span`
  display: inline-block;
  color: #fff;
  background: #4361ee;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 0.7em;
`;

export const H1 = styled.h1`
  color: ${(props) => props.color || "#fff"};
`;

export const P1 = styled.p`
  width: 280px;
  font-size: 13px;
  line-height: 1.4;
  color: #aaa;
  margin: 20px 0;
`;

export const Img = styled.img`
  position: absolute;
  top: 30px;
  right: -20px;
  z-index: 0;
`;
