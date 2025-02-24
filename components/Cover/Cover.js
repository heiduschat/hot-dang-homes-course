import Image from 'next/image';

export const Cover = ({children, background}) => {
  return (
    <div className="relative flex justify-center items-center h-screen min-h-[400px] text-slate-200 bg-slate-800 dark:bg-gray-800">
      <Image
        alt="Cover"
        src={background}
        layout="fill"
        objectFit="cover"
        className="mixed-blend-soft-light"
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  )
}