export const BlockRenderer = ({blocks}) => {
  return blocks.map(block => {
    switch (block.name) {
      case 'core/cover': {
        return <div className="h-full bg-white dark:bg-gray-800" key={block.id}>core cover</div>
      }
      default:
        return null;
    }
  })
}