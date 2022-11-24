import React from 'react';
import { View } from 'react-native';

import TableRow from './TableRow';
import HeaderTable from './HeaderTable';

const CryptoPriceTable = (data) => {
    return (
        <View>
            <HeaderTable></HeaderTable>
            {
                [data]?.map((item, index) => {
                    return (
                        <TableRow
                            key={index}
                            item={item}
                        ></TableRow>
                    )
                })
            }
        </View>
    )
}

export default CryptoPriceTable

