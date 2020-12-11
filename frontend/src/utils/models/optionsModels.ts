interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

// checkbox
export const checkboxYesNoOptions: CheckboxOption[] = [
  { id: 'yes', value: 'true', label: 'sim' },
  { id: 'no', value: 'false', label: 'não' },
];
export const checkboxGoodBadOptions: CheckboxOption[] = [
  { id: 'good', value: 'bom', label: 'bom' },
  { id: 'bad', value: 'ruim', label: 'ruim' },
];
export const checkbox3Options: CheckboxOption[] = [
  { id: 'good', value: 'bom', label: 'bom' },
  { id: 'medium', value: 'médio', label: 'médio' },
  { id: 'bad', value: 'ruim', label: 'ruim' },
];

// select
export const optionsCutaneoB = [
  { value: 'eudotermica', label: 'eudotérmica' },
  { value: 'lipidica', label: 'lipídica' },
  { value: 'alipica', label: 'alipica' },
  { value: 'mista', label: 'mista' },
];

export const optionsCutaneoE = [
  { value: 'normal', label: 'normal' },
  { value: 'desidratado', label: 'desidratado' },
  { value: 'sensibilizado', label: 'sensibilizado' },
  { value: 'seborreica', label: 'seborréica' },
];

export const optionsTexture = [
  { value: 'lisa', label: 'lisa' },
  { value: 'aspera', label: 'aspera' },
];

export const optionsExpessure = [
  { value: 'fina', label: 'fina' },
  { value: 'espessa', label: 'espessa' },
];

export const optionsOstios = [
  { value: 'dilatado', label: 'dilatado' },
  { value: 'contraido', label: 'contraido' },
];

export const optionsAcne = [
  { value: 'grau I', label: 'grau I' },
  { value: 'grau II', label: 'grau II' },
  { value: 'grau III', label: 'grau III' },
  { value: 'grau IV', label: 'grau IV' },
  { value: 'grau V', label: 'grau V' },
];

export const optionsInvolutionC = [
  { value: 'linhas', label: 'linhas' },
  { value: 'sulcos', label: 'sulcos' },
  { value: 'rulgas', label: 'rulgas' },
];

export const optionsFototipe = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
];

export const optionsLesions = [
  { value: 'comedoes', label: 'comedões' },
  { value: 'papulas', label: 'papulas' },
  { value: 'pustula', label: 'pustula' },
  { value: 'milliuns', label: 'milliuns' },
  { value: 'cisto', label: 'cisto' },
  { value: 'nodulo', label: 'nódulo' },
];

export const optionsScars = [
  { value: 'hipertrofica', label: 'hipertrofica' },
  { value: 'atrofica', label: 'atrofica' },
  { value: 'queloide', label: 'queloide' },
];

export const optionsFlaccidity = [
  { value: 'tissular', label: 'tissular' },
  { value: 'muscular', label: 'muscular' },
];
