// Drink.js
import * as React from 'react';

import CenterContents from '../components/CenterContents/CenterContents'

const Drink = () => {
    return (
      <section id='drink'>
        <CenterContents
            id="drink"
            title="Drink"
            image="/images/wine.jpg"
            alt="Wine"
            description="当店では、イタリア各地から厳選したワインを豊富に取り揃えております。
            赤ワイン、白ワイン、スパークリングワインなど、お客様のお好みやお料理に合わせてお選びいただけます。
            また、イタリアの伝統的なリキュールやグラッパもございます。
            ソムリエが丁寧にお選びしたワインは、料理との相性も抜群です。
            ぜひ、お食事と一緒にイタリアの風味豊かなドリンクをお楽しみください。"
            backgroundImage="/images/texture.jpg"
            />
      </section>
    );
  };
  
  export default Drink;
