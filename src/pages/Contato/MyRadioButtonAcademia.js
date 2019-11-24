import React, { Component } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(247,143,45,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#f78f2d',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#f78f2d',
    },
  },
});

const StyledLabel = styled(FormLabel)`
  @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
  margin-top: 10px;
  margin-bottom: 10px;
  h1 {
    color: #333;
    font-family: 'Be Vietnam';
    font-size: 20px;
    border: none;

    max-width: 90%;

    @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
      font-size: 14px;
    }
  }
`;

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function MyRadio() {
  return (
    <FormControl component="fieldset">
      <StyledLabel component="legend" className="Label">
        <h1>Qual modalidade de moradia que você procura?</h1>
      </StyledLabel>
      <RadioGroup
        defaultValue="Quarto Individual"
        aria-label="tipo_moradia"
        name="customized-radios"
      >
        <FormControlLabel
          value="Quarto Individual"
          control={<StyledRadio />}
          label="Quarto Individual"
        />
        <FormControlLabel
          value="Studio"
          control={<StyledRadio />}
          label="Studio"
        />
        <FormControlLabel
          value="Suite"
          control={<StyledRadio />}
          label="Suite"
        />
      </RadioGroup>
      <StyledLabel component="legend" className="Label">
        <h1>Qual bairro você procura moradia?</h1>
      </StyledLabel>
      <RadioGroup
        defaultValue="Próximo da UFRGS"
        aria-label="lugar_moradia"
        name="customized-radios_lugar_moradia"
      >
        <FormControlLabel
          value="Próximo da UFRGS"
          control={<StyledRadio />}
          label="Próximo da UFRGS"
        />
        <FormControlLabel
          value="Próximo do Gasômetro"
          control={<StyledRadio />}
          label="Próximo do Gasômetro"
        />
        <FormControlLabel
          value="Bom Fim"
          control={<StyledRadio />}
          label="Bom Fim"
        />
        <FormControlLabel
          value="Auxiliadora"
          control={<StyledRadio />}
          label="Auxiliadora"
        />
      </RadioGroup>
      <StyledLabel component="legend" className="Label">
        <h1>Qual tamanho de Coliving que você gostaria de morar?</h1>
      </StyledLabel>
      <RadioGroup
        defaultValue="Até 10 moradores"
        aria-label="lugar_moradia"
        name="customized-radios_tamanho_coliving"
      >
        <FormControlLabel
          value="Até 10 moradores"
          control={<StyledRadio />}
          label="Até 10 moradores"
        />
        <FormControlLabel
          value="Até 20 moradores"
          control={<StyledRadio />}
          label="Até 20 moradores"
        />
        <FormControlLabel
          value="Até 30 moradores"
          control={<StyledRadio />}
          label="Até 30 moradores"
        />
        <FormControlLabel
          value="Não importa"
          control={<StyledRadio />}
          label="Não importa"
        />
      </RadioGroup>
      <StyledLabel component="legend" className="Label">
        <h1>Qual valor você pretende gastar com todas as contas inclusas?</h1>
      </StyledLabel>
      <RadioGroup
        defaultValue="Até R$750"
        aria-label="valor_maximo"
        name="customized-radios_valor_maximo"
      >
        <FormControlLabel
          value="Até R$750"
          control={<StyledRadio />}
          label="Até R$750"
        />
        <FormControlLabel
          value="Até R$850"
          control={<StyledRadio />}
          label="Até R$850"
        />
        <FormControlLabel
          value="Até R$1000"
          control={<StyledRadio />}
          label="Até R$1000"
        />
        <FormControlLabel
          value="Até R$1300"
          control={<StyledRadio />}
          label="Até R$1300"
        />
        <FormControlLabel
          value="Até R$1500"
          control={<StyledRadio />}
          label="Até R$1500"
        />
      </RadioGroup>
      <StyledLabel component="legend" className="Label">
        <h1>O que você faz?</h1>
      </StyledLabel>
      <RadioGroup
        defaultValue="Trabalha"
        aria-label="ocupacao"
        name="customized-radios_ocupacao"
      >
        <FormControlLabel
          value="Trabalha"
          control={<StyledRadio />}
          label="Trabalha"
        />
        <FormControlLabel
          value="Estuda"
          control={<StyledRadio />}
          label="Estuda"
        />
        <FormControlLabel
          value="Ambos"
          control={<StyledRadio />}
          label="Ambos"
        />
      </RadioGroup>
    </FormControl>
  );
}
