import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';
import Header from '../../components/Header';
import Input from '../../components/Input';
import CheckBoxInput from '../../components/CheckBoxInput';

import { Content } from './styles';

interface RegisterFormData {
  name: string;
  age: number;
  adress: string;
  number: string;
  work: string;
}

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const checkboxYesNoOptions: CheckboxOption[] = [
    { id: 'yes', value: 'true', label: 'sim' },
    { id: 'no', value: 'false', label: 'não' },
  ];
  const checkboxGoodBadOptions: CheckboxOption[] = [
    { id: 'good', value: 'bom', label: 'bom' },
    { id: 'bad', value: 'ruim', label: 'ruim' },
  ];
  const checkbox3Options: CheckboxOption[] = [
    { id: 'good', value: 'bom', label: 'bom' },
    { id: 'medium', value: 'médio', label: 'médio' },
    { id: 'bad', value: 'ruim', label: 'ruim' },
  ];

  const handleSubmit = useCallback((data: RegisterFormData) => {
    console.log(data);
  }, []);

  return (
    <>
      <Header />

      <Content>
        <h2>Cadastro</h2>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <section>
            <h3>Dados Pessoais</h3>
            <div id="grid3x1">
              <Input name="name" type="text" labelTitle="Nome:" />
              <Input name="age" type="number" labelTitle="Idade:" />
            </div>
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
          </section>

          <section>
            <h3>Hábitos Diários</h3>
            <div className="checkbox-section">
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
            </div>
          </section>

          <section>
            <h3>Histórico clínico e estético</h3>
            <div className="checkbox-section">
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
                <Input labelTitle="Parentesco:" name="oncologicField" isGroup />
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
            </div>
          </section>

          <section>
            <h3>Avaliação facial:</h3>
            {/* <CheckBoxInput name="lens" options={checkboxYesNoOptions} /> */}
          </section>

          <section>
            <h3>Relato do incômodo:</h3>
            {/* <CheckBoxInput name="lens" options={checkboxYesNoOptions} /> */}
          </section>

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </>
  );
};

export default Register;
