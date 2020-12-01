import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, Scope } from '@unform/core';
import { FiChevronUp } from 'react-icons/fi';
// import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import CheckBoxInput from '../../components/CheckBoxInput';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import { Content, Footer } from './styles';
import {
  checkboxYesNoOptions,
  checkboxGoodBadOptions,
  checkbox3Options,
  optionsCutaneoB,
  optionsCutaneoE,
  optionsTexture,
  optionsExpessure,
  optionsOstios,
  optionsAcne,
  optionsInvolutionC,
  optionsFototipe,
  optionsLesions,
  optionsScars,
  optionsFlaccidity,
} from '../../utils/models/optionsModels';

// interface RegisterFormDatsa {
//   name: string;
//   age: number;
//   adress: string;
//   number: string;
//   work: string;
//   objective: string;
// }

interface RegisterFormData {
  name: string;
  personal_data: object;
  habits: object;
  history: object;
  facial_evaluation: object;
  anotations: object;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: RegisterFormData) => {
    window.alert('Cadastro realizado com sucesso!');
    // const response = await api.post('/clients', data);
    console.log(data);
  }, []);

  return (
    <>
      <Header />

      <Content>
        <h1>Cadastro</h1>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <section>
            <h2>Dados Pessoais</h2>
            <Input name="name" type="text" labelTitle="Nome:" />
            <Scope path="personal_data">
              <Input name="age" type="number" labelTitle="Idade:" />
              <div id="grid1x1">
                <Input
                  name="birtday"
                  type="text"
                  labelTitle="Data de nascimento:"
                />
                <Input name="number" type="text" labelTitle="Telefone:" />
              </div>
              <Input name="adress" type="text" labelTitle="Endereço:" />
              <Input name="work" type="text" labelTitle="Profissão:" />
            </Scope>
          </section>

          <section>
            <h2>Hábitos Diários</h2>
            <div className="checkbox-section">
              <Scope path="habits">
                <CheckBoxInput
                  labelTitle="Usa Lente ou óculos:"
                  name="lens"
                  options={checkboxYesNoOptions}
                />
                <CheckBoxInput
                  labelTitle="Exposição solar:"
                  name="solar"
                  options={checkboxYesNoOptions}
                />
                <CheckBoxInput
                  labelTitle="Tabagismo:"
                  name="tabagism"
                  options={checkboxYesNoOptions}
                />
                <CheckBoxInput
                  labelTitle="Ingere bebida alcólica:"
                  name="alcool"
                  options={checkboxYesNoOptions}
                />

                <div id="group">
                  <CheckBoxInput
                    labelTitle="Qualidade do sono:"
                    name="sleep"
                    options={checkboxGoodBadOptions}
                  />
                  <Input
                    labelTitle="Horas por noite:"
                    name="fieldSleep"
                    isGroup
                  />
                </div>

                <CheckBoxInput
                  labelTitle="Funcionamento intestinal:"
                  name="intestine"
                  options={checkboxGoodBadOptions}
                />

                <Input
                  labelTitle="Ingestão de água por dia:"
                  name="waterQtd"
                  isGroup
                />
                <div id="group">
                  <CheckBoxInput
                    labelTitle="Alimentação:"
                    name="foods"
                    options={checkbox3Options}
                  />
                  <Input
                    labelTitle="Alimentos habituais:"
                    name="fieldFoods"
                    isGroup
                  />
                </div>

                <Input labelTitle="Atividade Física:" name="activity" isGroup />

                <CheckBoxInput
                  labelTitle="Usa anticoncepcional:"
                  name="contraceptive"
                  options={checkboxYesNoOptions}
                />

                <Input labelTitle="Gestações:" name="gestations" />
              </Scope>
            </div>
          </section>

          <section>
            <h2>Histórico clínico e estético</h2>
            <div className="checkbox-section">
              <Scope path="history">
                <div id="group">
                  <CheckBoxInput
                    labelTitle="Já fez procedimento estético:"
                    name="esteticProcediment"
                    options={checkboxYesNoOptions}
                  />
                  <Input
                    labelTitle="Qual:"
                    name="esteticProcedimentField"
                    isGroup
                  />
                </div>

                <div id="group">
                  <Input
                    labelTitle="Quais cosméticos utiliza:"
                    name="cosmethics"
                    isGroup
                  />
                  <Input labelTitle="Como utiliza:" name="cosmethicsField" />
                </div>

                <div id="group">
                  <CheckBoxInput
                    labelTitle="Alergia:"
                    name="alergic"
                    options={checkboxYesNoOptions}
                  />
                  <Input labelTitle="Quais:" name="alergicField" />
                </div>

                <div id="group">
                  <CheckBoxInput
                    labelTitle="Tratamento médico:"
                    name="medicTratament"
                    options={checkboxYesNoOptions}
                  />
                  <Input labelTitle="Qual:" name="medicTratamentField" />
                </div>

                <Input labelTitle="Medicamentos em uso" name="medicaments" />

                <CheckBoxInput
                  labelTitle="Implante metálico:"
                  name="implant"
                  options={checkboxYesNoOptions}
                />

                <CheckBoxInput
                  labelTitle="Hipertensão:"
                  name="hipertension"
                  options={checkboxYesNoOptions}
                />
                <CheckBoxInput
                  labelTitle="Disturbio circulátorio:"
                  name="disturbC"
                  options={checkboxYesNoOptions}
                />
                <CheckBoxInput
                  labelTitle="Distpurbio hormonal:"
                  name="disturbH"
                  options={checkboxYesNoOptions}
                />
                <CheckBoxInput
                  labelTitle="ansiedade:"
                  name="anxiety"
                  options={checkboxYesNoOptions}
                />
                <CheckBoxInput
                  labelTitle="Estresse:"
                  name="stress"
                  options={checkboxYesNoOptions}
                />
                <div id="group">
                  <CheckBoxInput
                    labelTitle="Antecedente oncológico:"
                    name="oncologic"
                    options={checkboxYesNoOptions}
                  />
                  <Input
                    labelTitle="Parentesco:"
                    name="oncologicField"
                    isGroup
                  />
                </div>

                <CheckBoxInput
                  labelTitle="Diabets:"
                  name="diabets"
                  options={checkboxYesNoOptions}
                />
                <CheckBoxInput
                  labelTitle="Cirugias:"
                  name="cirurgics"
                  options={checkboxYesNoOptions}
                />
              </Scope>
            </div>
          </section>

          <section>
            <h2>Avaliação facial: </h2>
            <div className="checkbox-section">
              <Scope path="facial_evoluation">
                <Select
                  labelTitle="Biotipo Cutâneo:"
                  name="cutaneoB"
                  options={optionsCutaneoB}
                />

                <div id="group">
                  <Select
                    labelTitle="Estado Cutâneo:"
                    name="cutaneoE"
                    options={optionsCutaneoE}
                  />
                  <Input name="cutaneoEField" labelTitle="Análise:" isGroup />
                </div>

                <Select
                  labelTitle="Estado Cutâneo:"
                  name="cutaneoE"
                  options={optionsCutaneoE}
                />

                <Select
                  labelTitle="Textura:"
                  name="texture"
                  options={optionsTexture}
                />
                <Select
                  labelTitle="Espessura:"
                  name="expressure"
                  options={optionsExpessure}
                />

                <div id="group">
                  <Select
                    labelTitle="Óstios:"
                    name="ostios"
                    options={optionsOstios}
                  />
                  <Input name="ostilosField" labelTitle="Região:" isGroup />
                </div>

                <Select labelTitle="Acne:" name="acne" options={optionsAcne} />

                <div id="group">
                  <Select
                    labelTitle="Involução Cutãnea:"
                    name="involutionC"
                    options={optionsInvolutionC}
                  />
                  <Input
                    name="invlolutionCField"
                    labelTitle="Região:"
                    isGroup
                  />
                </div>

                <Select
                  labelTitle="Fototipo Cutâneo:"
                  name="fototipe"
                  options={optionsFototipe}
                />
                <Select
                  isMulti
                  labelTitle="Lesões de Pele:"
                  name="lesions"
                  options={optionsLesions}
                />
                <Select
                  labelTitle="Cicatriz"
                  name="scars"
                  options={optionsScars}
                />
                <div id="group">
                  <Input name="stains" labelTitle="Manchas:" />
                  <Input name="stainsDiagnostic" labelTitle="Diagnóstico:" />
                </div>

                <Select
                  labelTitle="Flacidez"
                  name="flaccidity"
                  options={optionsFlaccidity}
                />
              </Scope>
            </div>
          </section>

          <section>
            <h2>Relato do incômodo:</h2>
            <Scope path="anotations">
              <div id="group">
                <h4>Objetivo</h4>
                <Textarea name="objective" />
              </div>

              <div id="group">
                <h4>Tratamento Proposto</h4>
                <Textarea name="tratament" />
              </div>

              <div id="group">
                <h4>Orientações dadas</h4>
                <Textarea name="orientations" />
              </div>

              <div id="group">
                <h4>Home Care proposto</h4>
                <Textarea name="homecare" />
              </div>

              <div id="group">
                <h4>Acompanhamento</h4>
                <Textarea name="monitoring" />
              </div>
            </Scope>
          </section>

          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </Form>
      </Content>

      <Footer>
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FiChevronUp size={30} color="#fff" />
          Voltar ao topo
        </button>
      </Footer>
    </>
  );
};

export default Register;
