import React from 'react';
import './App.css';
import { BsSearch } from 'react-icons/bs';

var data = [
    {sn: '1', img: "https://img.freepik.com/free-vector/gradient-3d-folds-background_23-2149181598.jpg?size=626&ext=jpg", 
    productName: "Abstract 3D", stock: "32 in stock", price: 45.99, totalSales: 20},
    {sn: '2', img: "https://wallpapersmug.com/download/1366x768/b59c20/windows-11-blue-design-abstract.jpg", 
    productName: "Sarphens Illustration", stock: "32 in stock", price: 45.99, totalSales: 20},
    {sn: '1', img: "https://img.freepik.com/free-vector/gradient-3d-folds-background_23-2149181598.jpg?size=626&ext=jpg", 
    productName: "Abstract 3D", stock: "32 in stock", price: 45.99, totalSales: 20},
    {sn: '2', img: "https://wallpapersmug.com/download/1366x768/b59c20/windows-11-blue-design-abstract.jpg", 
    productName: "Sarphens Illustration", stock: "32 in stock", price: 45.99, totalSales: 20},
] 

function Table() {
    return(
        <div className='table'>
            <div className="tableBox">
                <h3>Product Sell</h3>
                <div className='box'>
                    <div className="srchBox">
                        <BsSearch className='icon srch-icon' />
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className='daysBox'>Last 30 days</div>
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Total Sales</th>
                    </tr>
                    {data.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td><img src={item.img} alt="img" width={50} height={50} /></td>
                                <td>{item.productName}</td>
                                <td>{item.stock}</td>
                                <td>{item.price}</td>
                                <td>{item.totalSales}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Table;



