/* eslint-disable no-unused-expressions */
import _ from 'lodash';

export const makeTags = (assets, language) => {
    const tags = [];
    if (language !== 'ru') return [];
    assets && _.map(assets, (asset) => {
        switch (asset) {
        case 'Currency':
            tags.push('рынки', 'мировые рынки');
            break;
        case 'Commodity':
            tags.push('нефть', 'сырьевые рынки', 'потребительский рынок');
            break;
        case 'Stock':
        case 'Indix':
            tags.push('акции', 'облигации', 'банки');
            break;
        case 'Crypto':
            tags.push('криптовалюты');
            break;
        default:
            break;
        }
    });
    return tags.length !== 0 ? tags.join() : [];
};
