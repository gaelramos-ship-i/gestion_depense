import { BarChart, Bar, XAxis, Tooltip, Rectangle, Cell } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import data from '../data/data.json';
import '../styles/spending.scss'

const Spending = () => {

  function CustomTooltip({ payload, active }) {
    if (active && payload && payload.length) {
      return (
        <div className='tooltip'>
          <p>${payload[0].value}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      <section className='spendingSection'>
        <h2>Spending - Last 7 days</h2>

        <BarChart
          style={{ width: '100%', maxHeight: '200px', aspectRatio: 1.618 }}
          responsive
          data={data}>

          <XAxis dataKey="day" stroke="hsl(28, 10%, 53%)" />

          <Bar
            dataKey="amount"
            radius={[4, 4, 4, 4]}
            fill="hsl(10, 79%, 65%)"
            activeBar={(props) => {
              const fill = props.fill || "hsl(10, 79%, 65%)";

              const hoverFill = fill
                .replace(")", ", 0.6)")
                .replace("hsl", "hsla");

              return <Rectangle {...props} fill={hoverFill} />;
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.fill || "hsl(10, 79%, 65%)"}
              />
            ))}
          </Bar>

          <Tooltip content={CustomTooltip} cursor={false} />

          <RechartsDevtools />
        </BarChart>

        <hr />

        <div id='count'>
          <article>
            <p>Total this month</p>
            <h2>$478.33</h2>
          </article>
          <article>
            <p id='dark'>+2.4%</p>
            <p>from last month</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Spending;