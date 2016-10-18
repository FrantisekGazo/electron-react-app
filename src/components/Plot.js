var Plotly = require("plotly.js/dist/plotly.js")
import React from "react"

class Plot extends React.Component {

    drawPlot() {
        const elementId = "plot"

        const data = [{
            x: this.props.xData,
            y: this.props.yData,
            mode: 'markers',
            type: this.props.type
        }]

        const layout = {
            title: this.props.title,
            hovermode:'closest',
            margin: 50,
            xaxis: {
                zeroline: true,
                gridcolor: "transparent",
                title: "X axis label"
            },
            yaxis: {
                zeroline: true,
                title: "Y axis label"
            }
        }

        const opts = {
            displayModeBar: true
        }

        Plotly.newPlot(
            elementId,
            data,
            layout,
            opts
        )
        // set click callback
        document.getElementById('plot').on('plotly_click', this.props.onPlotClick)
    }

    componentDidMount() {
        this.drawPlot()
    }

    componentDidUpdate() {
        this.drawPlot()
    }

    render() {
        return (
            <div id="plot"></div>
        )
    }
}

export default Plot
