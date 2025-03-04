import { items } from "@/data/items";
import { GridItemType } from "@/types/grid-item-type";

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <div onClick={onClick} className={
        `${item.permanentShown || item.shown ? 'bg-[#1550ff]' : 'bg-[#e2e3e3]'} h-24 rounded-3xl flex justify-center items-center cursor-pointer`}>
            {item.permanentShown === false && item.shown === false &&
                <img className="size-10 opacity-10" src="./svgs/b7.svg" alt="" />
            }
            {item.permanentShown || item.shown && item.item !== null &&
                <img className="size-10" src={items[item.item].icon} alt="" />
            }
        </div>
    );
}