import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Balance = () => {
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  const handleSubmit = () => {
    console.log(`Amount: ${amount}, Payment Method: ${paymentMethod}`)
  }

  return (
    <div>
      <Paper elevation={3} sx={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <Typography variant='h4' gutterBottom>
          Balance Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Amount'
                variant='outlined'
                value={amount}
                onChange={e => setAmount(e.target.value)}
                required
                type='number'
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle1' gutterBottom>
                Payment Method
              </Typography>
              <label>
                <input
                  type='radio'
                  name='paymentMethod'
                  value='TRC20'
                  checked={paymentMethod === 'TRC20'}
                  onChange={() => setPaymentMethod('TRC20')}
                />
                <img
                  src='/images/balance/usdt.png' // Replace with the path to your TRC20 image
                  alt='TRC20'
                  width={120}
                />
              </label>
              <label>
                <input
                  type='radio'
                  name='paymentMethod'
                  value='Bitcoin'
                  checked={paymentMethod === 'Bitcoin'}
                  onChange={() => setPaymentMethod('Bitcoin')}
                />
                <img
                  src='/images/balance/bitcoin.png' // Replace with the path to your Bitcoin image
                  alt='Bitcoin'
                  width={120}
                />
              </label>
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' color='primary' fullWidth size='large'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant='body1' sx={{ marginTop: '20px' }}>
          Rules:
          <ul>
            <li>Rule 1: Enter a valid amount.</li>
            <li>Rule 2: Select a payment method (TRC20 or Bitcoin).</li>
          </ul>
        </Typography>
      </Paper>
    </div>
  )
}

export default Balance
