import { gql } from '@apollo/client';
import client from 'client';

export default function Home(props) {
  console.log(props);
  return (
    <div className="h-full bg-white dark:bg-gray-800">
      <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Lorem ipsum...
      </p>
    </div>
  )
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
    query NewQuery {
      pages {
        nodes {
          title
        }
      }
    }
    `
  })
  return {
    props: {
      data,
      myexampleprop: "foo",
    }
  }
}