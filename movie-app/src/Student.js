import { Component } from "react";

// export class Student extends Component {


   

//   render() {
//     const{name}=this.props;
// console.log(this.props)
//     return (
     
//       <>
//       <h1> Hello,{name}</h1>
//       </>
//     )
//   }
// }
function Student(props){
    const{name,}=props;
    return(
        <>
        <h1> Hello,{props.name}</h1>
        </>
    )
}
export default Student;