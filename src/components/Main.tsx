import React from 'react'
import { MainForm } from './MainForm'
import { DataDisplay } from './DataDisplay'
import { Settings } from './Settings'

const Main = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-6">
                    {/* <Preview /> */}
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

export const Preview = () => {
    return (
        <img className="img-fluid text-center" src="https://via.placeholder.com/320"
            alt="C/O https://placeholder.com/#How_To_Use_Our_Placeholders" />
    )
}

export default Main
