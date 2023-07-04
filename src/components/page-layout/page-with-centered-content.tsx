import styled from '@emotion/styled';

export interface PageWithCenteredContentProps {
  children: React.ReactNode;
}

function PageWithCenteredContent({ children }: PageWithCenteredContentProps) {
  return (
    <PageWithCenteredContentWrapper>{children}</PageWithCenteredContentWrapper>
  );
}

export const PageWithCenteredContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 100px;
  height: 100%;
  overflow: auto;
`;

export default PageWithCenteredContent;
