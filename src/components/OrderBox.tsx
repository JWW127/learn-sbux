import { useStore } from '../lib/store'

export const OrderBox = () => {
  const Drink = useStore((state) => state.currentDrink)
  
    return (
            <div className="flex flex-col pt-2 overflow-y-scroll text-center bg-yellow-100 h-3/5 basis-full">{Drink.iced}</div>
    )
}
