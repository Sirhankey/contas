import React, { useRef } from "react";
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import axios from "axios"
import { toast } from "react-toastify";

const FormContainer = styled.form`
    width: 75%;
    margin: 30px 10px 10px 10px;
    display: flex;
    background-color: lightgray;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    padding: 20px;
    align-content: center;
    flexDirection: row;
    border: solid 1px black;
`;

const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: none;
    height: 40px;
    color: white;
    background-color: blue;   
    padding: 10px;
`;

const divider = {
    width: '100%',
    margin: '10px 0px'
}

const updateConta = async (conta, dta_pagamento, forma_pagamento) => {

    const contaUpdate = {
        ...conta,
        forma_pagamento: forma_pagamento,
        dta_pagamento: dta_pagamento,
        pago: true
    };

    try {
        const res = await axios.put(`http://127.0.0.1:3333/contas/${conta.id}`, {
            contaUpdate
        });
        if (res.data)
            toast.success("Conta alterada com sucesso!")
    }
    catch (error) {
        toast.error(error)
    }
}


const ContaForm = (conta) => {
    const ref = useRef();
    let dta_pagamento;
    let forma_pagamento;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!e.target.elements.dta_pagamento.value || !e.target.elements.forma_pagamento.value) return
        dta_pagamento = e.target.elements.dta_pagamento.value;
        forma_pagamento = e.target.elements.forma_pagamento.value;
    };


    const contaSpread = { ...conta.conta.conta }

    return (
        <FormContainer onSubmit={handleSubmit} ref={ref}>
            <Typography variant="h6" gutterBottom>
                Editar Conta
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        disabled
                        id="id"
                        name="id"
                        label="Id"
                        fullWidth
                        variant="standard"
                        value={contaSpread.id ? contaSpread.id : ''}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="titulo"
                        name="titulo"
                        label="Título da Conta"
                        fullWidth
                        variant="standard"
                        value={contaSpread.titulo ? contaSpread.titulo : ''}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        id="grupo"
                        name="grupo"
                        label="Grupo"
                        defaultValue={contaSpread.grupo ? contaSpread.grupo : ''}
                        variant="standard"
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="valor"
                        name="valor"
                        type="number"
                        min={0}
                        label="Valor da Conta"
                        fullWidth
                        variant="standard"
                        value={contaSpread.valor ? contaSpread.valor : ''}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="vencimento"
                        name="vencimento"
                        label="Data de Vencimento"
                        fullWidth
                        variant="standard"
                        value={contaSpread.vencimento ? contaSpread.vencimento : ''}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="desconto"
                        name="desconto"
                        label="Desconto"
                        fullWidth
                        type="number"
                        min={0}
                        variant="standard"
                        value={contaSpread.desconto ? contaSpread.desconto : ''}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="obs"
                        name="obs"
                        label="Observação"
                        fullWidth
                        multiline
                        maxRows={4}
                        variant="standard"
                        value={contaSpread.obs ? contaSpread.obs : ''}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="mensal"
                            checked={contaSpread.mensal ? true : false}
                            value={contaSpread.mensal ? true : false}
                        />}
                        label="É uma conta mensal?"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="valor_fixo"
                            value={contaSpread.valor_fixo ? contaSpread.valor_fixo : false}
                            checked={contaSpread.valor_fixo ? true : false}
                        />}
                        label="O valor é fixo?"
                    />
                </Grid>
                <Divider style={divider} />
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="dta_pagamento"
                        name="dta_pagamento"
                        label="Data de Pagamento"
                        fullWidth
                        variant="standard"
                    // value={contaSpread.dta_pagamento ? contaSpread.dta_pagamento : ''}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="forma_pagamento"
                        name="forma_pagamento"
                        label="Forma de Pagamento"
                        fullWidth
                        variant="standard"
                    // value={contaSpread.forma_pagamento ? contaSpread.forma_pagamento : ''}
                    />
                </Grid>
            </Grid>
            <Button onClick={() => updateConta(contaSpread, dta_pagamento, forma_pagamento)} type="submit"> Save </Button>

        </FormContainer>
    );

};

export default ContaForm;