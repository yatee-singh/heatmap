import React from 'react';
import { useEffect ,useState} from 'react';
import HeatMap from '@uiw/react-heat-map';
import CalendarHeatMap from "react-d3-calendar-heatmap";
// Include its styles in you build process as well
import "react-d3-calendar-heatmap/dist/react.d3.calendar.heatmap.css";


const data = [
  { "day": "2024-11-01", "value": 66.11286 ,projects: {
      projectOne: "200",
      projectTwo: "30",
      projectThree: "30",
      projectFour: "400",
      projectOne2: "200",
      projectTwo3: "30",
      projectThree4: "30",
      projectFour5: "400",
    },},
  { "day": "2024-11-02", "value": 72.32668 },
  { "day": "2024-11-03", "value": 86.99302 },
  { "day": "2024-11-04", "value": 73.41905 },
  { "day": "2024-11-05", "value": 70.97744 },
  { "day": "2024-11-06", "value": 82.79178 },
  { "day": "2024-11-07", "value": 50.82718 },
  { "day": "2024-11-08", "value": 50.67851 },
  { "day": "2024-11-09", "value": 89.53964 },
  { "day": "2024-11-10", "value": 85.21056 },
  { "day": "2024-11-11", "value": 92.19152 },
  { "day": "2024-11-12", "value": 75.06929 },
  { "day": "2024-11-13", "value": 75.39019 },
  { "day": "2024-11-14", "value": 85.85355 },
  { "day": "2024-11-15", "value": 59.06299 },
  { "day": "2024-11-16", "value": 59.24069 },
  { "day": "2024-11-17", "value": 61.24793 },
  { "day": "2024-11-18", "value": 99.8947 },
  { "day": "2024-11-19", "value": 75.39616 },
  { "day": "2024-11-20", "value": 74.19484 },
  { "day": "2024-11-21", "value": 95.75215 }
]

interface CalendarHeatMapItemType {
  day: string;
  value: number;
  projects?: Array<Record<string, number>>;
}


const Demo = () => {
  // const [data, setData] = useState(null); // To store fetched data
  // const [loading, setLoading] = useState(true); // To manage loading state
  // const [error, setError] = useState(null); // To handle errors

  // Function to load data from the API
  // const fetchData = async () => {
  //   try {
  //     setLoading(true); // Start loading
  //     setError(null); // Reset error
  //     const response = await fetch("https://api.example.com/data"); // Replace with your API URL
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const result = await response.json();
  //     setData(result); // Set the fetched data
  //   } catch (err) {
  //     setError(err.message); // Handle errors
  //   } finally {
  //     setLoading(false); // Stop loading
  //   }
  // };

  // // Load data when the component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // Render loading, error, or data
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
const timeRange = {
  from: new Date("2024-11-01"),
  to: new Date("2024-11-30"),
}
  return (
    <div className="calmap">
      <CalendarHeatMap<CalendarHeatMapItemType> data={data} 
      timeRange={timeRange}
      width={'500px'}
     
        fillToWidth={false}/>
    </div>
  )
};

export default Demo