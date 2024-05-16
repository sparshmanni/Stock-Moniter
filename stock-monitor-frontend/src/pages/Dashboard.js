import React, { useState, useEffect } from 'react';
import api from '../api'; // Import your API module
import { Table,Modal,TextField, Button,TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Dashboard() {
  const [stocksData, setStocksData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    async function fetchStocks() {
      try {
        const response = await api.get('/all_stocks');
        setStocksData(response.data.stocks);
      } catch (error) {
        console.error('Error fetching stocks data:', error);
      }
    }

    fetchStocks();
  }, []);

    // Function to open modal
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    // Function to close modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const [stockSymbol, setStockSymbol] = useState('');

    const handleSymbolChange = (event) => {
        setStockSymbol(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send stockSymbol to backend to store in database
        // Clear input field after submission
        setStockSymbol('');
    };


  return (
    <div>
    <div id="w1">
      <div><h1>All Stocks</h1> </div> <div>       
        <div>
        <form onSubmit={handleSubmit}>
                <TextField
                    label="Stock Symbol"
                    variant="outlined"
                    value={stockSymbol}
                    onChange={handleSymbolChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Add to Watchlist
                </Button>
            </form>
        </div>
        </div> <div> <Button variant="contained" onClick={handleOpenModal}>WatchList</Button></div>
    </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticker</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Change Amount</TableCell>
              <TableCell>Change Percentage</TableCell>
              <TableCell>Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocksData.map((stock, index) => (
              <TableRow key={index}>
                <TableCell>{stock.ticker}</TableCell>
                <TableCell>{stock.price}</TableCell>
                <TableCell>{stock.change_amount}</TableCell>
                <TableCell>{stock.change_percentage}</TableCell>
                <TableCell>{stock.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

                  {/* Modal to display watchlist stocks */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                {/* Modal Content */}
                
                <div>
                    <h2 id="modal-title">Watchlist Stocks</h2>
                    <p id="modal-description">Here are your watchlisted stocks:</p>
                    {/* Render watchlist stocks here */}
                </div>
            </Modal>

    </div>
  );
}

export default Dashboard;
