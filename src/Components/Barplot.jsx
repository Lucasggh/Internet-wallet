import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Seg', value: 4000 },
  { day: 'Ter', value: 3000 },
  { day: 'Qua', value: 2000 },
  { day: 'Qui', value: 2780 },
  { day: 'Sex', value: 1890 },
  { day: 'Sab', value: 2390 },
  { day: 'Dom', value: 3490 },
];

function Barplot({ className }) {
  return (
    <div className={className} style={{ width: 320, height: 200 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barplot;