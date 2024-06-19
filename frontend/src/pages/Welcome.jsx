import { styled } from "styled-components";
const StyledText = styled.p`
  background-color: black;
  color: white;
  padding: 5px 10px;
`;
function WelcomePage() {
  return <StyledText>Welcome page</StyledText>;
}

export default WelcomePage;
