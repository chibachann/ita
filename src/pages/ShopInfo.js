// ShopInfo.js
import * as React from 'react';
import Infomation from '../components/Infomation/Infomation';

const ShopInfo = () => {
    const shopData = {
        shopName: 'Trattoria Della Luna',
        address: '〒165-8888 東京都中野区南台7-77-7 ファンタジービル 3F',
        accessInfo: '東西線「妄想駅」から徒歩5分',
        openingHours: (
          <>
            月曜日~金曜日<br />
            ランチ 11:30~14:30 (L.O. 14:00)<br />
            ディナー 18:00~23:00 (L.O. 22:30)
            <br />
            土曜日・日曜日・祝日<br />
            11:30~23:00 (L.O. 22:30)
          </>
        ),
        holiday: '創作の日 (毎月第3木曜日)',
        seatsCount: 32,
        privateRoom: '可能 (事前予約制、詳細はお問い合わせください)',
        parking: '有り (創作パーキング 5台分)',
        creditCards: '可 (VISA, Master, AMEX, JCB, Diners, 架空カード)',
        eMoney: '可 (ファンタジーPay、中野町ペイ)',
      };

    return (
        <section id='shopinfo'>
            <Infomation {...shopData} />
        </section>
    );
};

export default ShopInfo;
