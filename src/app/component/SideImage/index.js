import React from 'react';
import "./style.scss"

export default class SideImage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <div className="flex-box ">
                    <div className="item">
                    </div>
                    {this.props.children}
                </div>
            </section>
        )
    }
}