import React from 'react';

import styles from './Ingredients.module.css';
import classes from '*.module.sass';

interface Props {
    type: string
}

const ingredient: React.FunctionComponent<Props> = (props) => {
    let ingredient = null;

    switch(props.type) {
        case ('bread-bottom'):
            ingredient = <div className={styles.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredient = (
                <div className={styles.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );

            break;
    }
};

export default ingredient;