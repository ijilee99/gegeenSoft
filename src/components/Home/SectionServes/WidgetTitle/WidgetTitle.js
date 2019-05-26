import React from 'react';
import './WidgetTitle.css'
import SectionTitle from '../../../../assets/img/section-title-icon.png';
const WidgetTitle = () => {
    return (

        <div className="section-title">
            <img src={SectionTitle} alt="#" />
            <h2>Веб сайт хийх үйлчилгээ</h2>
            <p>Мэдээлэл технологи, график дизайн, програмчилалын
         чиглэлээр олон жил мэргэшсэн туршлагатай, чадварлаг мэргэжилтнүүд
         таньд зориулан дараахь үйлчилгээг чанарын өндөр түвшинд,найдвартай, түргэн
         шуурхайгаар хийж гүйцэтгэхээр санал болгож байна. Үүнд:</p>
        </div>

    );
};
export default WidgetTitle;