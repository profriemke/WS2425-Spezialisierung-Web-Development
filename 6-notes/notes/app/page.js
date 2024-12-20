import Hallo from '../components/Hallo';
const feste = ['Weihnachten', 'Ostern', 'Geburtstag', 'Bachelor bestanden','Ferienbeginn'];
export default function Home() {
  return (
    <div>
      <h1>Meine Lieblingsfeste</h1>
      {
        feste.map((fest) => (
        <Hallo key={fest} fest={fest} />
          ))
      }
    </div>
  );
}
