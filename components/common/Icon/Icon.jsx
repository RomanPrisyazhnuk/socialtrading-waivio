import React from 'react';
import PropTypes from 'prop-types';

const icons = new Map([
    ['user', require('app/assets/icons/user.svg')],
]);

const rem_sizes = {
    '0_75x': '0.75',
    '0_95x': '0.95',
    '1x': '1.12',
    '1_25x': '1.25',
    '1_5x': '1.5',
    '1_75x': '1.75',
    '2x': '2',
    '3x': '3.45',
    '4x': '4.60',
    '5x': '5.75',
    '10x': '10.0',
};

export default class Icon extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        size: PropTypes.oneOf([
            '0_75x',
            '0_95x',
            '1x',
            '1_25x',
            '1_5x',
            '2x',
            '3x',
            '4x',
            '5x',
            '10x',
        ]),
    };

    render() {
        const { name, size, className } = this.props;
        let classes = 'Icon ' + name;
        let style;

        if (size) {
            classes += ' Icon_' + size;
            style = { width: `${rem_sizes[size]}rem` };
        }

        if (className) {
            classes += ' ' + className;
        }

        const passProps = { ...this.props };
        delete passProps.name;
        delete passProps.size;
        delete passProps.className;

        return (
            <span
                {...passProps}
                className={classes}
                style={style}
                dangerouslySetInnerHTML={{ __html: icons.get(name) }}
            />
        );
    }
}
