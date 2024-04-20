import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function checkout(){
    
    
    return(
        <>
    <div>
        <Navbar/>
        <div className="container_chechkout">
<h1 className="container_sation_chekout">Check Out</h1>
            <h1 className="container_sation_chekout1">Billing Details</h1>
            <div className="main">
            <div className="container_section_inputs">
<h1>First Name*</h1>
            <input type="text" placeholder="First Name" className="inputs" />
            </div>
            <div className="container_section_inputs">
<h1>Last Name*</h1>
            <input type="text" placeholder="Last Name" className="inputs" />
            </div>
            </div>
            <div className="main1">

            <div className="container_section_inputs">
<h1>Country / Region*</h1>
            <input type="text" placeholder="Country / Region*" className="inputs" />
            </div>
            <div className="container_section_inputs">
<h1>Company Name*</h1>
            <input type="text" placeholder="Company Name" className="inputs" />
            </div>
            </div>
            <div className="main2">
            <div className="container_section_inputs">
<h1>Street Address*</h1>
            <input type="text" placeholder="House number and street name" className="inputs" />
            </div>
            <div className="container_section_inputs">
<h1>Apt, suite, unit</h1>
            <input type="text" placeholder="apartment, suite, unit, etc. (optional)" className="inputs" />
            </div>
            </div>
            <div className="main">
            <div className="container_section_inputs">
                <h1>City*</h1>
                <input type="text" placeholder="City*" className="inp" />
            </div>
            <div className="container_section_inputs">
                <h1>State*</h1>
                <input type="text" placeholder="State*" className="inp" />
            </div>
            <div className="container_section_inputs">
                <h1>Postal Code*</h1>
                <input type="text" placeholder="Postal Code*" className="inp" />
            </div>
            </div>
            <div className="container_section_inputs">
<h1>Phone</h1>
            <input type="text" placeholder="phone" className="inputs" />
            </div>
        </div>
        <button className="btn_btn_btn">Continue to deleviri</button>
        <h1 className='save'>Save my information for a faster checkout</h1>
        <h1 className="saveing">Shipping Address</h1>
        <h1 className="save">Select the address that matches your card or payment method.</h1>
        <img src="./Frame 436 (1).png" alt="png" className="save" />
        <h1 className="save">Shipping Method</h1>
        <img src="./Rectangle 742.png" alt="png" className="save" />
    <img src="./Frame 439.png" alt="png" className="savee"/>
    <h1 className="saveee">Payment Method</h1>
    <img src="./Frame 449.png" alt="png" className="saveee"/>
    <button className="button">Play Now</button>
    </div>
    <Footer/>
    </>
    )
    }