import { BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import data from '../data/data.json';

const Spending = () => {
  return (
    <>
      <div>
        <h2>Spending - Last 7 days</h2>

        <BarChart
          style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
          responsive
          data={data}>

          <XAxis dataKey="day" stroke="#333" />
          <Bar dataKey="amount" fill="#8884d8" activeBar={{ fill: "#333" }} />
          <Tooltip />

          <RechartsDevtools />
        </BarChart>

        <div>
          <article>
            <hr />
            <p>Total this month</p>
            <h2>$000.00</h2>
          </article>
          <article>
            <p>+0.0%</p>
            <p>from last month</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Spending;