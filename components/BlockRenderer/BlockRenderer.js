import { Cover } from 'components/Cover';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { theme } from 'theme';

export const BlockRenderer = ({blocks}) => {
  return blocks.map(block => {
    switch (block.name) {

      case 'core/heading': {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
      }

      case 'core/paragraph': {
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.align}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }

      case 'core/cover': {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }

      default:
        return null;
    }
  })
}