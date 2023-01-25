import { gql } from '@apollo/client';
import client from 'client';
import { BlockRenderer } from 'components/BlockRenderer';
import { cleanAndTransformBlocks } from 'utils/cleanAndTransformBlocks';

export default function Home(props) {
  console.log(props);
  return (
    <>
      <BlockRenderer blocks={props.blocks} />
    </>
  )

  //   return (
  //   <div className="h-full bg-white dark:bg-gray-800">
  //     <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
  //     <p className="text-gray-600 dark:text-gray-300">
  //       Lorem ipsum...
  //     </p>
  //   </div>
  // )
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `
  })
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON)
  return {
    props: {
      blocks: blocks,
      myexampleprop: 'foo',
    }
  }
}