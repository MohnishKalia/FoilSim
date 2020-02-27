import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const DataDisplay = () => {
    const [state] = useContext(GlobalContext);
    return (
        <>
            <h1>Display</h1>
            <hr />
            <dl>
                {Object.entries(state).map(([k, v]) =>
                    <React.Fragment key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                    </React.Fragment>
                )}
            </dl>
        </>
    )
}