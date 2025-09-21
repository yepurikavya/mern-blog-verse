
const ProductCard = () => {
  return( 
  <div className="border-1 border-black w-[300px] flex flex-col justify-center items-center gap-10 py-5 rounded-2xl "> 
        <img src="vite.svg"alt=""className="w-[150px] h-[150px] border-2 border-black-300 rounded-full "></img>
        <div className="flex flex-col gap-5 items-center ">
        <h2 className="font-bold text-3xl text-orange-400"> Product1</h2>
        <p className="text-xl text-blue-700">This is a sample product</p>
        <p className="text-size 2x font-bold text-green-600">price:$50</p>
        </div>
        <button className="bg-blue-400 text-white w-[90%] h-[50px] item-center py-5 rounded-2xl" >Add to cart</button>
  </div>
  )
}
export default ProductCard;