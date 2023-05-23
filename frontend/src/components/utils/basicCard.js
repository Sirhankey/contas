import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getMonthName } from '../../utils/utils'
import axios from "axios"
import { toast } from "react-toastify";
import BasicModal from './basicModal'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'BRL',
});

const mes_filter = {
  padding: '2%',
  position: 'absolute',
  top: '5%',
  right: '5%'
}

const card_container = {
  position: 'relative',
}

const button_delete = {
  'margin-right': '10px',
  padding: '5px',
  'background-color': 'lightsalmon',
}

const deleteConta = async (conta) => {

  try {
    const res = await axios.delete(`http://127.0.0.1:3333/contas/${conta.id}`);
    if(res.data)
    toast.success("Conta deletada com sucesso!")
  }
  catch (error) {
    toast.error(error)
  }
}

const BasicCard = ({ conta }) => {
  return (
    <Card style={card_container} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {conta.titulo}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Valor: {currencyFormatter.format(conta.valor)}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Grupo: {conta.grupo}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Vencimento: {conta.vencimento}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={button_delete} onClick={() => deleteConta(conta)} size="small">Delete</Button>
        {conta.pago ? '' : <BasicModal conta={conta}></BasicModal>}
      </CardActions>

    <div style={mes_filter}>{getMonthName(conta.vencimento)}</div>

    </Card>
  );
}

export default BasicCard;
