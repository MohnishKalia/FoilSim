import React, { useContext } from 'react'
import { GlobalContext, State, Action } from '../context/GlobalContext'

const Main = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-6">
                    {/* <Preview /> */}
                    <MainForm />
                    <Presets />
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

    return (
        <form>
            <InputChanger changing={'angle'} min={-20} max={20} state={state} dispatch={dispatch} />
            <InputChanger changing={'camber'} min={-20} max={20} state={state} dispatch={dispatch} />
            <InputChanger changing={'chord'} min={-20} max={20} state={state} dispatch={dispatch} />
            <InputChanger changing={'span'} min={5} max={123.8} state={state} dispatch={dispatch} />
            <InputChanger changing={'speed'} min={0} max={250} state={state} dispatch={dispatch} />
            <InputChanger changing={'thickness'} min={1} max={20} state={state} dispatch={dispatch} />
        </form>
    );
}

interface Input { changing: keyof State, min: number, max: number, state: State, dispatch: React.Dispatch<Action> };

const InputChanger: React.FC<Input> = ({ changing, min, max, state, dispatch }) =>
    <div className="form-group">
        <label htmlFor={changing} className="text-capitalize">{changing}</label>
        <input className="form-control" type="range" name={changing} min={min} max={max} value={state[changing]}
            onChange={e => dispatch({ type: changing, value: e.target.valueAsNumber })} step={0.1} />
    </div>

export const DataDisplay = () => {
    const [state] = useContext(GlobalContext);
    return (
        <div>
            <h1>Display</h1>
            {Object.entries(state).map(([k, v]) =>
                <div key={k}>
                    <p>{k} : {v}</p>
                </div>
            )}
        </div>
    )
}

interface Datum { text: string, angle: number, camber: number, thickness: number };

export const Presets = () => {
    const [, dispatch] = useContext(GlobalContext);
    const data: Datum[] = [
        {
            text: 'Symmetric',
            angle: 0,
            camber: 0,
            thickness: 12.5
        },
        {
            text: 'High Camber',
            angle: 9,
            camber: 15,
            thickness: 12.5
        },
        {
            text: 'Flat Plate',
            angle: 9,
            camber: 15,
            thickness: 1
        },
        {
            text: 'Flat Bottom',
            angle: 7,
            camber: 5,
            thickness: 12.5
        },
        {
            text: 'Negative Camber',
            angle: -7,
            camber: -5,
            thickness: 12.5
        },
    ];
    return (
        <div className="btn-group" role="group">
            {data.map(val => <Btn data={val} dispatch={dispatch} />)}
        </div>
    )
}

const Btn: React.FC<{ data: Datum, dispatch: React.Dispatch<Action> }> = ({ data: { angle, camber, thickness, text }, dispatch }) =>
    <button type="button" className="btn btn-secondary" onClick={() => {
        dispatch({ type: 'angle', value: angle });
        dispatch({ type: 'camber', value: camber });
        dispatch({ type: 'thickness', value: thickness });
    }}>{text}</button>

export const Preview = () => {
    return (
        <img className="img-fluid text-center" src="https://via.placeholder.com/320"
            alt="C/O https://placeholder.com/#How_To_Use_Our_Placeholders" />
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
