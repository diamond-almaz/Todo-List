import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';


// class WhoAmI extends Component 
// {
//     constructor(props)
//     {
//         super(props);
//         this.state=
//         {
//             years: 26
//         }
//         this.nextYear=()=>{this.setState(state=>state.years++)}        
//     }
//     render()
//     {
//         const {name,surname,link}=this.props;
//         const {years}=this.state;
//         return (
//             <React.Fragment>
//                 <button onClick={this.nextYear}>++</button>
//                 <h1>My name is {name}, surname - {surname}, years - {years} </h1>
//                 <a href={link}>My Profile</a>
//             </React.Fragment>)
//     }
// }



// const All=()=>{
//     return (
//         <>
//         <WhoAmI name="Almaz" surname="Sharipov" link="vk.com"/>
//         <WhoAmI name="Artem" surname="Pavlov" link="vk.com"/>
//         <WhoAmI name="Vlad" surname="Sergeev" link="vk.com"/>
//         </>
//     )
// }

ReactDOM.render(<App/>,  document.getElementById('root'));



