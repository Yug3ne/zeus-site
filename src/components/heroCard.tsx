const HeroCard = () => {
  return (
    <div className='flex flex-col text-white border-r-[0.1px] border-t-[0.1px] border-b-[0.1px] border-gray-300 p-8 hover:bg-[#252121e1] '>
        <span className="flex items-center gap-4">
            <img src="/icons/classes.svg" alt="" />
            <h1 className="text-white font-bold text-3xl italic">CLASSES</h1>
        </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam quibusdam laudantium est. Ea placeat tenetur et, voluptatem quos fugit. Officiis voluptates distinctio harum, soluta nostrum eos ipsam. Tempora, voluptate.</p>
    </div>
  )
}

export default HeroCard