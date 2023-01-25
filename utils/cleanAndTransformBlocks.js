import {v4 as uuid} from 'uuid';

// pass blocksJSON into an object
export const cleanAndTransformBlocks = (blocksJSON) => {
  const blocks = JSON.parse(blocksJSON);
    // assign Ids to blocks and innerBlocks
  const assignId = (b) => {
    b.forEach(block => {
      block.id = uuid();
      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  }
  // run assignId on blocks object
  assignId(blocks);
  // return blocks object
  return blocks;
}
