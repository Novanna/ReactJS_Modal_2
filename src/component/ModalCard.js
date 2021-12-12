import { AiFillEnvironment } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';

function ModalCard(props) {
    return(
        <div className="cardName">
            <table className="cardTable">
                <tbody>
                    <tr>
                        <td rowSpan='6'>
                            <img 
                                className='imgAva'
                                src={props.userPhoto}
                                alt='ava'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='textName'>
                                {props.userName}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="textJob">
                                {props.userJob}
                            </p>
                            <div className="textDom">
                                <AiFillEnvironment /> 
                                <span> {props.userDom} </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="textSoc">
                                <AiTwotonePhone />
                                <span> {props.userPhone} </span>
                            </div>
                            <div className="textSoc">
                                <AiOutlineGithub />
                                <span> {props.userGit} </span>
                            </div>
                            <div className="textSoc">
                                <AiOutlineMail />
                                <span> {props.userEmail} </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ModalCard;