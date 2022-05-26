import { Wrapper } from "../components/wrapper";

const Layout = (props: any) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export { Layout };