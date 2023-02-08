export interface IFormulationTitle {
  children: any;
}

const FormulationTitle: React.FC<IFormulationTitle> = ({ children }) => {
  return (
    <p className="capitalize  w-full text-slate-500 text-6xl p-8 text-center">
      {children}
    </p>
  );
};

export default FormulationTitle;
