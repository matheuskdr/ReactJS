"use client"

import Button from '@/components/Button';
import { GridItem } from '@/components/grid-item';
import { InfoItem } from '@/components/info-Item/infoItem';
import { items } from '@/data/items';
import { formatTimeElapsed } from '@/helpers/formatTimeElapsed';
import { GridItemType } from '@/types/grid-item-type';
import { useEffect, useState } from 'react';

const Page = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);

    useEffect(() => resetAndCreateGrid(), []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (playing) setTimeElapsed(timeElapsed + 1);
        }, 1000);
        return () => clearInterval(timer)
    }, [playing, timeElapsed]);

    // verificar se os abertos são iguais
    useEffect(() => {
        if (shownCount === 2) {
            let opened = gridItems.filter(item => item.shown === true);
            if (opened.length === 2) {


                if (opened[0].item === opened[1].item) {
                    // v1 - if both are equal, make every "shown" permanent
                    let tempGrid = [...gridItems];
                    for (let i in tempGrid) {
                        if (tempGrid[i].shown) {
                            tempGrid[i].permanentShown = true;
                            tempGrid[i].shown = false;
                        }
                    }
                    setGridItems(tempGrid);
                    setShownCount(0);
                } else {
                    // v2 - if they are not equal, close all "shown"
                    setTimeout(() => {
                        let tempGrid = [...gridItems];
                        for (let i in tempGrid) {
                            tempGrid[i].shown = false;
                        }
                        setGridItems(tempGrid);
                        setShownCount(0);
                    }, 1000)

                }


                setMoveCount(moveCount => moveCount + 1);
            }
        }
    }, [shownCount, gridItems]);

    // verify if game is over
    useEffect(() => {
        if (moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
            setPlaying(false);
        }
    }, [moveCount, gridItems]);

    const resetAndCreateGrid = () => {
        // step 1 - resetar o jogo
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);

        // step 2 - criar grid
        // 2.1 - criar um grid vazio
        let tmpGrid: GridItemType[] = []
        for (let i = 0; i < (items.length * 2); i++)
            tmpGrid.push({
                item: null, shown: false, permanentShown: false
            });
        // 2.2 - preecher o grid
        for (let w = 0; w < 2; w++) {
            for (let i = 0; i < items.length; i++) {
                let pos = -1;
                while (pos < 0 || tmpGrid[pos].item !== null) {
                    pos = Math.floor(Math.random() * (items.length * 2));
                }
                tmpGrid[pos].item = i;
            }
        }
        // 2.3 - jogar no state
        setGridItems(tmpGrid);

        // step 3 - começar o jogo
        setPlaying(true);
    }

    const handleItemClick = (index: number) => {
        if (playing && index !== null && shownCount < 2) {
            let tmpGrid = [...gridItems];
            if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
                tmpGrid[index].shown = true;
                setShownCount(shownCount + 1);
            }
            setGridItems(tmpGrid);
        }
    }

    return (
        <div className="w-full max-w-3xl m-auto flex py-12 max-md:flex-col">
            <div className="flex flex-col w-auto max-md:mb-12 max-md:items-center">
                <a href="" className="block">
                    <img src="/assets/devmemory_logo.png" alt="" width={200} />
                </a>

                <div className="w-full py-2.5 max-md:flex max-md:justify-around max-md:text-center">
                    <InfoItem label='Tempo' value={formatTimeElapsed(timeElapsed)} />
                    <InfoItem label='Movimentos' value={moveCount.toString()} />
                </div>

                <Button label={'Reiniciar'} icon="/svgs/restart.svg" onClick={resetAndCreateGrid} />
            </div>
            <div className="flex-1 flex justify-end max-md:justify-center max-md:mx-5">
                <div className='w-[430px] grid grid-cols-4 gap-2.5 max-md:grid-cols-3'>
                    {gridItems.map((item, index) => (
                        <GridItem
                            key={index}
                            item={item}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page;
