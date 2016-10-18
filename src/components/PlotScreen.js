import React from "react"
import { connect } from "react-redux"

import Plot from "./Plot"


class PlotScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            x: [],
            y: [],
            selected: null
        }
    }

    showChart(event) {
        let x = []
        let y = []

        for (var i = 0; i < 100; i++) {
            let xVal = Math.floor((Math.random() * 10) + 1)
            x.push(xVal)
            let yVal = Math.floor((Math.random() * 20) + 1)
            y.push(yVal)
        }

        this.setState({
            ...this.state,
            x,
            y
        })
    }

    onPlotClick(data) {
        console.log(data)

        this.setState({
            ...this.state,
            selected: {
                x: data.points[0].x,
                y: data.points[0].y
            }
        })
    }

    render() {
        let chartElement = null
        if (this.state.x.length > 0) {
            chartElement = (
                    <Plot
                        title="Some random points"
                        xData={this.state.x}
                        yData={this.state.y}
                        onPlotClick={this.onPlotClick.bind(this)}
                        type="scatter"
                    />
            )
        }

        let selectedInfoElement = null
        if (this.state.selected != null) {
            selectedInfoElement = (
                    <label>Selected point is ({this.state.selected.x}, {this.state.selected.y})</label>
            )
        }

        return (
            <div>
                <button onClick={this.showChart.bind(this)}>Show chart</button>

                { selectedInfoElement }
                { chartElement }
            </div>
        )
    }
}

export default connect(
    // state to props
    (state) => {
        return {
        }
    },
    // dispatch functions to props
    (dispatch) => {
        return {
            run: () => {
            }
        }
    }
)(PlotScreen)
