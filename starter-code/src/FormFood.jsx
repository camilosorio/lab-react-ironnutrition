import React from 'react'

export default function FormFood({ clbkChange, clbkSubmit, status }) {
    return (
        <div className={status}>
            <form
                className="form"
                onChange={clbkChange}
                onSubmit={clbkSubmit}
            >
                <h2 className="title">Food form</h2>
                <label className="label" htmlFor="name">Food name</label>
                <input className="input" id="name" name="name" type="text" />
                <label className="label" htmlFor="name">Food picture</label>
                <input className="input" id="genre" name="image" type="text" />
                <label className="label" htmlFor="name">Calories</label>
                <input className="input" id="genre" name="calories" type="number" />

                <button className="btn">create !</button>
            </form>

        </div>

    )
}
