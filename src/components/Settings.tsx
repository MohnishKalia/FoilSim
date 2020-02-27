import React from 'react';

export const Settings = () => {
    return (
        <>
            <h1>Calculated Values</h1>
            <hr />
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="lift">Lift</label>
                    <input type="number" className="form-control" readOnly name="lift" />
                </div>
                <div className="form-group col">
                    <label htmlFor="drag">Drag</label>
                    <input type="number" className="form-control" readOnly name="drag" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="cl">Cl</label>
                    <input type="number" className="form-control" readOnly name="cl" />
                </div>
                <div className="form-group col">
                    <label htmlFor="cd">Cd</label>
                    <input type="number" className="form-control" readOnly name="cd" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="r#">R#</label>
                    <input type="number" className="form-control" readOnly name="r#" />
                </div>
                <div className="form-group col">
                    <label htmlFor="l/d">L/D Ratio</label>
                    <input type="number" className="form-control" readOnly name="l/d" />
                </div>
            </div>
        </>
    )
}