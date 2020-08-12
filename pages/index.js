import Container from '../components/container';
import ListItem from './components/ListItem';

function Index({ gifs: { data } }) {
  return (
    <Container>
      <ul className="flex flex-wrap">
        {data.map(({ id, images }) => (
          <ListItem key={id} {...images}></ListItem>
        ))}
      </ul>
    </Container>
  );
}

export async function getStaticProps() {
  const q = 'luigi';
  const apiKey = 'tu-api-key';
  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${apiKey}&limit=12`
  );
  const gifs = await response.json();

  return {
    props: {
      gifs,
    },
  };
}

export default Index;
