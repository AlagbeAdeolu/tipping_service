import BulbContainer from "../components/BulbContainer";
import ArrowRight from "../svg/ArrowRight"
import Logo from "../unit_components/Logo"
import './SetAccount.css';
import { useNavigate } from "react-router-dom";


const AcctType = () => {
    const navigate = useNavigate();
    const text_margin= {
        // marginRight: "30%"
    }
    const bulb_container = {
        borderRadius: '10px',
        border: 'solid 1px gray',
        padding: '16px',
        backgroundColor: '#fff',
        height: '65px',
    }

  return ( 
    <div className="pages_container">
        <div className="logo">
            <Logo />
        </div>
         
        <h4>I’m here to...</h4>
        <div className="acct_type" onClick={() => {navigate('/earnPlan')}}>
            <div>
                <h3>Make money on KudiTip</h3>
                <p>as a creator or fundraiser</p>
            </div>
            <span>
                <ArrowRight />
            </span>
        </div>
        <div className="acct_type">
            <div>
                <h3>Support others</h3>
                <p>to help creators do what they love</p>
            </div>
            <span>
                <ArrowRight />
            </span>
        </div>

        <BulbContainer bulb_container={bulb_container} text_margin={text_margin} text='Everyone can give support and you can change your account type at any time.'/>
    </div>
  )
}
export default AcctType