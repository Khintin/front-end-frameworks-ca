import ContactImage from "../../assets/contactpix.png";
import HomeAddresIcon from "../../assets/icons8-address-100.png";
import CallIcon from "../../assets/icons8-call-100.png";
import ChatIcon from "../../assets/icons8-chat-48.png";
import FacebookIcon from "../../assets/icons8-facebook-48.png";
import InstIcon from "../../assets/icons8-instagram-48.png";

export default function ContactInfo() {
    return (
        <div className="flex flex-col justify-center max-w-lg mx-auto">
            <img src={ContactImage} alt="Contact image" className="w-150" />
            <h2 className="text-2xl text-red-600 text-center font-bold">eStore</h2>
            <div className="flex flex-row justify-center">
                <img src={HomeAddresIcon} alt="address icon" className="w-9" />
                <p>Addres: 123 Street, Oslo, Norway</p>
            </div>
            <div className="flex flex-row gap-1 justify-center">
                <img src={CallIcon} alt="phone icon" className="w-8" />
                <p>Phone: +47 12345678</p>
            </div>
            <div className="flex flex-row justify-center py-5 gap-5">
                <img src={FacebookIcon} alt="facebook icon" />
                <img src={InstIcon} alt="instagram icon" />
                <img src={ChatIcon} alt="chat icon" />
            </div>
        </div>
    );
}
