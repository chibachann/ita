// Floor.js
import * as React from 'react';
import HalfBlockRight from '../components/HalfBlockRight/HalfBlockRight'
import HalfBlockLeft from '../components/HalfBlockLeft/HalfBlockLeft'

const Floor = () => {
  return (
    <section id="floor">
        <HalfBlockLeft
            image="/images/table.jpg"
            alt="table"
            title="ゆったりとくつろげるテーブル席"
            description="当店のテーブル席は、広々とした空間にゆったりと配置されています。
            友人や家族との会話を楽しみながら、絶品のイタリア料理に舌鼓を打つことができます。
            テーブルクロスや食器にもこだわり、上質な雰囲気の中でお食事をお楽しみいただけます。"
            backgroundColor="#fff"
            textColor="#000"
            titleFont="'Shippori Mincho', serif"
            descriptionFont="'Shippori Mincho', serif"
        />

        <HalfBlockRight
            image="/images/table2.jpg"
            alt="table2"
            title="特別な日にぴったりのVIP席"
            description="特別な日のディナーや記念日に最適なVIP席をご用意しております。
            プライベート感溢れる空間で、大切な人とのひとときを味わえます。
            シェフ自慢の特別コースとソムリエ厳選のワインで、至福のひとときをお過ごしください。"
            backgroundColor="#fff"
            textColor="#000"
            titleFont="'Shippori Mincho', serif"
            descriptionFont="'Shippori Mincho', serif"
        />
    </section>
  );
};

export default Floor;
