//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
import { Bar, Line } from 'react-chartjs-2';

const Chart = () => {
  const shoot = '60%';

  const labels = Utils.months({count: 7});
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },
    ]
  };

  return (
    <div>

      <p>Graph: Red Zone: --25% | Average Zone: 25%-50% | Green Zone: 50%++</p>

      <Line

      />

    </div>
  )
}

export default Chart;