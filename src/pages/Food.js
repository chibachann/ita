// Food.js
import * as React from 'react';
import HalfBlockRight from '../components/HalfBlockRight/HalfBlockRight'
import HalfBlockLeft from '../components/HalfBlockLeft/HalfBlockLeft'

const Food = () => {
  return (
    <section id="food">
      <HalfBlockRight
        image="/images/pizza.jpg"
        alt="pizza"
        title="~ La Nostra Pizza Speciale ~"
        description="当店のピザは、イタリアから取り寄せた最高級の小麦粉と新鮮な具材を使用し、薪窯で焼き上げています。モチモチの生地と香ばしい風味が特徴です。
        トマトソースは、イタリア産の完熟トマトを使用し、シェフが秘伝のレシピで仕上げています。
        チーズは、イタリア各地から厳選したものを使用し、ピザの味を引き立てています。
        お好みのトッピングを選んでいただき、自分だけのオリジナルピザをお楽しみください。
        ワインとの相性も抜群です。
        ぜひ、当店自慢のピザをご賞味ください。"
        backgroundColor="#7b2020"
        textColor="#ffffff"
        titleFont="'Dancing Script', cursive"
        descriptionFont="'Shippori Mincho', serif"
      />
      <HalfBlockLeft
        image="/images/pasta.jpg"
        alt="pasta"
        title="~ Il Nostro Piatto di Pasta ~"
        description="当店のパスタは、イタリア各地から取り寄せた厳選された食材を使用し、ひとつひとつ手作りで提供しています。
        パスタ生地は、最高級のデュラム小麦粉を使用し、プロの職人が丁寧に仕上げています。
        ソースは、シェフが厳選した新鮮な野菜や肉、魚介類を使用し、伝統的なイタリアンレシピで調理しています。
        ペペロンチーノ、カルボナーラ、ボロネーゼなど、様々な種類のパスタをご用意しております。
        お好みのパスタを選んでいただき、イタリアの味をお楽しみください。
        ワインとの相性も抜群です。ぜひ、当店自慢のパスタをご賞味ください。"
        backgroundColor="#359265"
        textColor="#ffffff"
        titleFont="'Dancing Script', cursive"
        descriptionFont="'Shippori Mincho', serif"
      />
    </section>
  );
};

export default Food;
