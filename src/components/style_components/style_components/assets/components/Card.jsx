import nerdImage from "../img/illustration.png";
import Button from "./Button";
import { ButtonContainer, CardContainer, ContentContainer } from "./styles/Container.styles";
import { StyledTitle } from './styles/Custom.style';
import { H1, Img, P1, Tag } from "./styles/Elements.styles";

export default function Card() {
  return (
    <CardContainer>
    
      <ContentContainer>
        <Tag>EXCLUSIVE</Tag>
        <H1 color="royalBlue"><StyledTitle text='React Style Components' color="red"/></H1>
        <P1>
          Exclusive React JS Tutorial on Styled components where you will learn
          whe we need this & how to use it.
        </P1>
        <ButtonContainer className="buttons">
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/rsc" text="Github repo" />
        </ButtonContainer>
      </ContentContainer>
      <Img src={nerdImage} alt="nerd" width="300px" />
    </CardContainer>
  );
}
