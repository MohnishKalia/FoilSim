import React, { useContext } from 'react'
import { GlobalContext, State } from '../context/GlobalContext'

const Main = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-6">
                    <Preview />
                    <MainForm />
                </div>
                <div className="col-md-6">
                    <Settings />
                    <DataDisplay />
                </div>
            </div>
        </main>
    )
}

export const MainForm = () => {
    const [state, dispatch] = useContext(GlobalContext);
    const InputChanger: React.FC<{ changing: keyof State }> = ({ changing }) =>
        <>
            <label htmlFor={changing} className="text-capitalize">{changing}</label>
            <input className="form-control" type="range" name={changing} min={0.1} max={19.9} defaultValue={state[changing]} onChange={e => dispatch({ type: changing, value: e.target.valueAsNumber })} step={0.1} />
        </>
    return (
        <div>
            {(Object.keys(state) as (keyof State)[]).map(
                (k) => <InputChanger key={k} changing={k} />)
            }
        </div>
    );
}



export const DataDisplay = () => {
    const [state] = useContext(GlobalContext);
    return (
        <div>
            <h1>hello from display</h1>
            {Object.entries(state).map(([k, v]) =>
                <div>
                    <p>key : {k}</p>
                    <p>value: {v}</p>
                </div>
            )}
        </div>
    )
}


export const Preview = () => {
    return (
        <img src="https://via.placeholder.com/360" alt="C/O https://placeholder.com/#How_To_Use_Our_Placeholders" />
    )
}


export const Settings = () => {
    return (
        <div>
            hello from settings
        </div>
    )
}




export default Main
