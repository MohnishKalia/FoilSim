import React, { useContext } from 'react';
import { State, Action, GlobalContext } from '../context/GlobalContext';

export const MainForm = () => {
    const [state, dispatch] = useContext(GlobalContext);

    return (
        <>
            <h1>Data Form</h1>
            <hr />
            <form>
                <h5>Flight</h5>
                <InputChanger changing={'speed'} min={0} max={250} state={state} dispatch={dispatch} />
                <hr />
                <h5>Shape</h5>
                <InputChanger changing={'angle'} min={-20} max={20} state={state} dispatch={dispatch} />
                <InputChanger changing={'camber'} min={-20} max={20} state={state} dispatch={dispatch} />
                <InputChanger changing={'thickness'} min={1} max={20} state={state} dispatch={dispatch} />
                <Presets />
                <hr />
                <h5>Size</h5>
                <InputChanger changing={'chord'} min={-20} max={20} state={state} dispatch={dispatch} />
                <InputChanger changing={'span'} min={5} max={123.8} state={state} dispatch={dispatch} />
            </form>
        </>
    );
}

interface Input { changing: keyof State, min: number, max: number, state: State, dispatch: React.Dispatch<Action> };

const InputChanger: React.FC<Input> = ({ changing, min, max, state, dispatch }) =>
    <div className="form-group">
        <label htmlFor={changing} className="text-capitalize">{changing} : <span className="font-italic font-weight-bolder">{state[changing]}</span></label>
        <div className="d-flex align-content-center">
            {min}
            <input className="form-control-range mx-3" type="range" name={changing}
                min={min} max={max} value={state[changing]} step={0.1}
                onChange={e => dispatch({ type: changing, value: e.target.valueAsNumber })}
            />
            {max}
        </div>
    </div>

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
