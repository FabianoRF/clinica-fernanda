export default interface IFacialEvaluation {
  biotip: string;
  state: string;
  texture: string;
  espessure: string;
  ostilos: string;
  acne: string;

  cutaneous_involution: {
    degree: string;
    description: string;
  };

  photoaging: string;
  stains: string;
}
