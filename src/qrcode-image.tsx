import React, {useEffect} from "react";

const QrcodeImage = function () {
    const img = localStorage.getItem("image");
    useEffect(() => {
        return () => {
            localStorage.removeItem('image');
        }
    }, [])
    return (
        <div className="mast">
            <div className="img_content">
                <img id="image" src={img || ""}/>
            </div>
        </div>
    );
};
export default QrcodeImage;
