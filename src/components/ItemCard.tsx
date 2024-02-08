import {FaArrowCircleRight} from "react-icons/fa"

export default function ItemCard(props: {
    title : string,
    subTitle : string,
    price : number,
    image: string
   
}){
   

    const ProductImage = props.image;
    return (
        <div className='w-[295px] h-[475px] border-2 flex flex-col items-start justify-around p-[35px] cursor-pointer mt-[1rem]'>
            <img className="w-[220px] h-[250px]" src={ProductImage}/>
            <div>
                <div className="font-bold">{props.title}</div>
                 <div>{props.subTitle}</div>
            </div>
            
            <div className="flex items-center justify-between w-full">
                <div className="font-bold">${props.price}</div>
                <div><FaArrowCircleRight className="cursor-pointer text-xl"/></div>
            </div>
            
        </div>
    )
}