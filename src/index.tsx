import React, { FC } from 'react';
import { render } from "react-dom";
 

// function App() {
//   return (
//     <div>
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

 
/*
export interface ListProps<T> {
  visible?: boolean;
  list: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export function List<T>(props: ListProps<T>) {
  return <div>{
    props.list.map( (item,index) => props.renderItem(item, index) )
  }</div>
}
 
function Test() {
  return (
    <List
      list={[1, 2, 3]}
      renderItem={(item, i) => {
        return <span key={i}>{ item }</span>
      }}
    />
  );
}
*/

 

// type Name = { 
//   name: string; 
// }
// type User = Name & { age: number  };
// const obj:User  = {
//   name:'123',
//   age:12,
// }
 

/**
 * 抽取出通用的高阶组件类型
 */
// type HOC<InjectedProps, OwnProps = {}> = <P>(
//   Component: React.ComponentType<P & InjectedProps>,
// ) => React.ComponentType<P & OwnProps>;

// /**
//  * 声明注入的Props
//  */
// export interface ThemeProps {
//   primary: string;
//   secondary: string;
// }

// export const withTheme: HOC<ThemeProps> = Component => props => {
//   console.log(Component);
//   // 假设theme从context中获取
//   const fakeTheme: ThemeProps = {
//     primary: 'red',
//     secondary: 'blue',
//   };
//   return <Component {...fakeTheme} {...props} />;
// };

// const Foo: FC<{ a: number } & ThemeProps> = props => <div style={{ color: props.secondary }}  > xy2 </div>;
// const FooWithTheme = withTheme(Foo);



 
export function fixClass<
  T extends Element = HTMLDivElement,
  Attribute extends React.HTMLAttributes<T> = React.HTMLAttributes<T>
>(cls: string, type: keyof React.ReactHTML = 'div') {
  const FixedClassName: FC<Attribute> = props => {
    console.log(props);
    return React.createElement(type, { ...props, className: `${cls} ${props.className}` });
  };

  return FixedClassName;
}

// console.log(typeof React);

/**
 * Test
 */
const Container = fixClass('card');
const Header = fixClass('card__header', 'header');
const Body = fixClass('card__body', 'main');
const Footer = fixClass('card__body', 'footer');

const Test = () => {
  return (
    <Container>
      <Header>header</Header>
      <Body>header</Body>
      <Footer>footer</Footer>
    </Container>
  );
};

// interface Itest{
//   webName:string;
//   age:number;
//   address:string
// }
// type ant = keyof Itest;

 
// interface Map<T> {
//   [key: string]: T;
// }
// let keys: keyof Map<number>; //string
// let value: Map<number>['antzone']; //number
 
const rootElement = document.getElementById("app");
render(<Test />, rootElement);
