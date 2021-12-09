import './FormGroup';
import './ModalCard.css';
import { AiFillEnvironment } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';

function ModalCard(props){
   return(
       <div className="cardName">
           <table className="cardTable">
               <tbody>
               <tr>
                    <td rowSpan="6">
                    <img
                        style={{
                            height: 280,
                            width: 210,
                            margin: 20,
                            marginTop: 30,
                            borderRadius: 10
                        }}
                        src={props.Photo} 
                        alt="ava"
                    />
                    </td>
               </tr>
               <tr>
                   <td>
                        <p className="textName">
                            {props.Name}
                        </p>
                   </td>
               </tr>
               <tr>
                   <td>
                        <p className="textJob">
                            {props.Job}
                        </p>
                        <div className="textDom">
                            < AiFillEnvironment />
                            <span> {props.Dom} </span>
                        </div>
                    </td>
               </tr>
               <tr>
                   <td>
                        <div className="textSoc">
                            < AiTwotonePhone />
                            <span> {props.Phone} </span>
                        </div>
                        <div className="textSoc">
                            < AiOutlineGithub />
                            <span> {props.Git} </span>
                        </div>
                        <div className="textSoc">
                            < AiOutlineMail />
                            <span> {props.Email} </span>
                        </div>
                   </td>
               </tr>
               </tbody>
            </table>
       </div>
   )
}
export default ModalCard;