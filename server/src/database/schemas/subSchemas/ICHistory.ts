export default interface ICHistory {
  tratament: {
    use: boolean;
    description: string;
  };

  alergics_antecedents: {
    use: boolean;
    description: string;
  };

  pacemaker: boolean;
  cardiacs_alterations: boolean;
}
