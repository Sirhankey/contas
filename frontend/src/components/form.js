import React, { useRef } from "react";
import axios from 'axios';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { toast } from "react-toastify";

const FormContainer = styled.form`
    width: 75%;
    margin: 30px 10px 10px 10px;
    display: flex;
    background-color: lightgrey;
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

const options = [
    { value: 'apartamento', label: 'Apartamento' },
    { value: 'cartao', label: 'Cartao' },
    { value: 'cesar', label: 'Cesar' },
    { value: 'daniel', label: 'Daniel' },
    { value: 'thais', label: 'Thais' },
    { value: 'escola', label: 'Escola' },
    { value: 'extras', label: 'Extras' },
    { value: 'lazer', label: 'Lazer' },
]

function validaCamposForm(e) {
    if (!e.target.elements.titulo.value) return false
    if (!e.target.elements.valor.value) return false
    if (!e.target.elements.grupo.value) return false
    if (!e.target.elements.vencimento.value) return false
    if (!e.target.elements.valor_fixo.value) return false
    if (!e.target.elements.mensal.value) return false
    if (!e.target.elements.desconto.value) return false
    if (!e.target.elements.obs.value) return false
    return true
}

const Form = () => {
    const ref = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validaCamposForm(e)) return

        try {
            const titulo = e.target.elements.titulo.value;
            const valor = e.target.elements.valor.value;
            const grupo = e.target.elements.grupo.value;
            const vencimento = e.target.elements.vencimento.value;
            const valor_fixo = e.target.elements.valor_fixo.value;
            const mensal = e.target.elements.mensal.value;
            const desconto = e.target.elements.desconto.value;
            const obs = e.target.elements.obs.value;

            const response = await axios.post('http://127.0.0.1:3333/contas/add', {
                titulo,
                valor: Number(valor),
                grupo,
                vencimento,
                valor_fixo,
                mensal,
                desconto: Number(desconto),
                obs
            });

            console.log(response)
            if(response.status === 200) 
            toast.success("Conta cadastrada com Sucesso!")

            e.target.elements.titulo.value = null;
            e.target.elements.valor.value = null;
            e.target.elements.grupo.value = null;
            e.target.elements.vencimento.value = null;
            e.target.elements.valor_fixo.value = false;
            e.target.elements.mensal.value = false;
            e.target.elements.desconto.value = null;
            e.target.elements.obs.value = null;


        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit} ref={ref}>

            <Typography variant="h6" gutterBottom>
                Cadastrar Conta
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="titulo"
                        name="titulo"
                        label="Título da Conta"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="grupo"
                        name="grupo"
                        select
                        label="Grupo"
                        defaultValue=""
                        variant="filled"
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
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
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="mensal" value="true" />}
                        label="É uma conta mensal?"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="valor_fixo" value="true" />}
                        label="O valor é fixo?"
                    />
                </Grid>
            </Grid>
            <Button type="submit"> Save </Button>

        </FormContainer>
    );

};

export default Form;