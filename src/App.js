import useAxios from './hooks/useAxios';

const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230101',
  });
  // console.log(`Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`);

  return (
    <>
      <h1>{data && data.status}</h1>
      <h1>{loading && 'Loading'}</h1>
      <button onClick={refetch}>Refetch</button>
    </>
  );
};

export default App;
