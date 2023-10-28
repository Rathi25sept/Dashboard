import React from 'react';
import './App.css';
// import {BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill,} from 'react-icons/bs';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Table from './Table';

const cardsData = [
  {
    "id": 1,
    "imgData":
      {
        "backgroundColor": "lightgreen",
        "img": "https://cdn.iconscout.com/icon/free/png-512/free-add-income-1591092-1347007.png?f=webp&w=512",
      },
    "data":
      {
        "title": "Earning",
        "value": "$198k",
      },
      "type":
      {
        "details": "37.8% this month"
      }
  },
  {
    "id": 2,
    "imgData":
    {
      "backgroundColor": "#f0a1f0de",
      "img": "https://pic.onlinewebfonts.com/thumbnails/icons_233169.svg",
    },
    "data":
    {
      "title": "Orders",
      "value": "$2.4k",
    },
    "type":
    {
      "details": "2% this month"
    }
  },    
  {
    "id": 3,
    "imgData":
    {
      "backgroundColor": "lightskyblue",
      "img": "https://www.pinpng.com/pngs/m/140-1406092_png-file-svg-account-balance-icon-transparent-png.png",
    },
    "data":
    {
      "title": "Balance",
      "value": "$2.4k",
    },
    "type":
    {
      "details": "2% this month"
    }
  },
  {
    "id": 4,
    "imgData":
    {
      "backgroundColor": "lightpink",
      "img": "https://icons.veryicon.com/png/o/commerce-shopping/jinfeng-technology-icon-library/shopping-bag-37.png",
    },
    "data":
    {
      "title": "Total Sales",
      "value": "$89k",
    },
    "type":
    {
      "details": "11% this month"
    }
  }
]

function Home() {

  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Fab',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 3490,
      pv: 10000,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Nov',
      uv: 3490,
      pv: 2300,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 3490,
      pv: 1300,
      amt: 2100,
    },
  ];

  const renderData = cardsData.map(function(item, key){
    // console.log(item.imgData.backgroundColor)
    return <div className="card" key={key}>
      <div className='img-box' style={{backgroundColor: item.imgData.backgroundColor}} >
        <img src={item.imgData.img} alt="img" width={30} height={30}  />
      </div>
      <div className='card-inner'>
        <small>{item.data.title}</small>
        <h3>{item.data.value}</h3>
        <small>{item.type.details}</small>
      </div>
    </div>
  })

  return (
    <main className="main-container">

      <div className="main-cards">{renderData}</div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={900}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Table />
    </main>
  )
}

export default Home;

































// import React from 'react';
// import './App.css';
// // import Chart from 'react-apexcharts'

// const cardsData = [
//   {
//     "id": 1,
//     "imgData":
//       {
//         "backgroundColor": "lightgreen",
//         "img": "https://cdn.iconscout.com/icon/free/png-512/free-add-income-1591092-1347007.png?f=webp&w=512",
//       },
//     "data":
//       {
//         "title": "Earning",
//         "value": "$198k",
//       },
//       "type":
//       {
//         "details": "37.8% this month"
//       }
//   },
//   {
//     "id": 2,
//     "imgData":
//     {
//       "backgroundColor": "#f0a1f0de",
//       "img": "https://pic.onlinewebfonts.com/thumbnails/icons_233169.svg",
//     },
//     "data":
//     {
//       "title": "Orders",
//       "value": "$2.4k",
//     },
//     "type":
//     {
//       "details": "2% this month"
//     }
//   },    
//   {
//     "id": 3,
//     "imgData":
//     {
//       "backgroundColor": "lightskyblue",
//       "img": "https://www.pinpng.com/pngs/m/140-1406092_png-file-svg-account-balance-icon-transparent-png.png",
//     },
//     "data":
//     {
//       "title": "Balance",
//       "value": "$2.4k",
//     },
//     "type":
//     {
//       "details": "2% this month"
//     }
//   },
//   {
//     "id": 4,
//     "imgData":
//     {
//       "backgroundColor": "lightpink",
//       "img": "https://icons.veryicon.com/png/o/commerce-shopping/jinfeng-technology-icon-library/shopping-bag-37.png",
//     },
//     "data":
//     {
//       "title": "Total Sales",
//       "value": "$89k",
//     },
//     "type":
//     {
//       "details": "11% this month"
//     }
//   }
// ]

// function Home() {

//   const renderData = cardsData.map(function(item){
//     // console.log(item.imgData.backgroundColor)
//     return <div className="card">
//       <div className='img-box' style={{backgroundColor: item.imgData.backgroundColor}} >
//         <img src={item.imgData.img} alt="img" width={30} height={30}  />
//       </div>
//       <div className='card-inner'>
//         <small>{item.data.title}</small>
//         <h3>{item.data.value}</h3>
//         <small>{item.type.details}</small>
//       </div>
//     </div>
//   })

//   return (
//     <main className="main-container">

//       <div className="main-cards">{renderData}</div>

//       <div className="charts">
//       </div>
//     </main>
//   )
// }

// export default Home;

























































































































// const cardsData = [
//   {
//     id: 1,
//     img: "",
//     name: "Earning",
//     price: "$198k",
//     month: "37.8% this month"
//   },
//   {
//     id: 2,
//     img: "",
//     name: "Orders",
//     price: "$2.4k",
//     month: "2% this month"
//   },    {
//     id: 3,
//     img: "",
//     name: "Balance",
//     price: "$2.4k",
//     month: "2% this month"
//   },
//   {
//     id: 4,
//     img: "",
//     name: "Total Sales",
//     price: "$89k",
//     month: "11% this month"
//   }
// ]

// const renderData = cardsData.map(function(item){
//   console.log("=====",item);
//   return <div className="card">
//     <div className='img-box'>
//       <img src="" alt="img" />
//     </div>
//     <div className='card-inner'>
//       <small>{item.name}</small>
//       <h3>{item.price}</h3>
//       <small>{item.month}</small>
//     </div>
//   </div>
// })




      {/* <div className='main-cards'>
        <div className="card">
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card-icon' />
          </div>
          <h1>300</h1>
        </div>

        <div className="card">
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card-icon' />
          </div>
          <h1>12</h1>
        </div>

        <div className="card">
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card-icon' />
          </div>
          <h1>33</h1>
        </div>

        <div className="card">
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card-icon' />
          </div>
          <h1>42</h1>
        </div>
      </div> */}