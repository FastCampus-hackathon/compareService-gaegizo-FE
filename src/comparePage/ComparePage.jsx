import styled from 'styled-components';

const ComparePage = () => {
  return <Title>공고 비교하기</Title>;
};

const Text = styled.p`
  font-weight: 700;
  color: #373f57;
`;

const Title = styled(Text)`
  font-size: 36px;
  margin-bottom: 60px;
`;

export default ComparePage;
