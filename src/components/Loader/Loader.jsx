import { Dna } from 'react-loader-spinner';
import css from './loaderWrapper.module.css';


export default function Loader() {
  return (
    <Dna visible={true} ariaLabel="dna-loading" wrapperClass={css.wrapper} />
  );
}