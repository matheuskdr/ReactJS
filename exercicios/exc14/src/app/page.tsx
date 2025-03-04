"use client"

import Button from '@/components/Button';
import { InfoItem } from '@/components/info-Item/infoItem'
import RestartButton from "@/svgs/restart.svg";

const Page = () => {

    const resetAndCreateGrid = () => {

    }

    return (
        <div className="w-full max-w-3xl m-auto flex py-12 max-md:flex-col">
            <div className="flex flex-col w-auto max-md:mb-12 max-md:items-center">
                <a href="" className="block">
                    <img src="/assets/devmemory_logo.png" alt="" width={200} />        
                </a>

                <div className="w-full py-2.5 max-md:flex max-md:justify-around max-md:text-center">
                    <InfoItem label='Tempo' value='00:00' />
                    <InfoItem label='Movimentos' value='0' />
                </div>

                <Button label={'Reiniciar'} icon="/svgs/restart.svg" onClick={resetAndCreateGrid} />
            </div>
            <div className="flex-1 flex justify-end max-md:justify-center max-md:mx-5">
                ...
            </div>
        </div>
    );
}

export default Page;
