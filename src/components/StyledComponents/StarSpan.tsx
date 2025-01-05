import styled from "@emotion/styled";

const StarSpan = styled.span<{ active: boolean }>`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => (props.active ? "#ffc107" : "#e4e5e9")};
`;

export default StarSpan;
