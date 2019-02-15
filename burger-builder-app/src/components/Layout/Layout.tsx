import React, {ReactNode} from 'react'
import { checkPropTypes } from 'prop-types';

import classes from './Layout.module.css';

interface Props {
    children: ReactNode
}

const layout: React.FunctionComponent<Props> = (props) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
);

export default layout;