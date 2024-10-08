import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import AssetTable from './AssetTable';
import StockChart from './StockChart';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DotIcon } from '@radix-ui/react-icons';
import { CrossIcon, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getCoinList, getTop50CoinList, searchCoin } from '@/Store/Coin/Action'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import SearchCoin from '../Search/SearchCoin';



const Home = () => {
    const [category, setCategory] = React.useState("all");
    const [inputValue, setInputValue] = React.useState("")
    const [isBotRealease, setIsBotRealease] = React.useState(false);
    const [page, setPage] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const[searchTerm,setSearchTerm]=useState("");


    const { coin } = useSelector(store => store)
  

    const dispatch = useDispatch();
    const handleBotRelease = () => setIsBotRealease(!isBotRealease);


    const handleCategory = (value) => {
        setCategory(value)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }


  const handleSearch=()=>{
    if(searchTerm.trim()!=""){
        console.log("HANDLESEARCH for:", searchTerm);
       dispatch(searchCoin(searchTerm));
       setIsActive(true);
    }
}

    const handleKeyPress = (event) => {
        if (event.key == "Enter") {
            console.log(inputValue)
        }

        setInputValue("");
    }
    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    }

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        if (category === "top50") {
            dispatch(getTop50CoinList());  // Llamada sin parámetros
        }
    }, [category]);


    useEffect(() => {

        dispatch(getCoinList(page))
    }, [page])

    useEffect(() => {
        if (searchTerm.trim() !== "") {
            dispatch(searchCoin(searchTerm));
        }
    }, [searchTerm, dispatch]);
    return (
        <div className='relative'>
            <div className="lg:flex">
                <div className="lg:w-[50%] lg:border-r">
                    <div className="p-3 flex items-center gap-4">
                        <Button
                            onClick={() => handleCategory("all")}
                            variant={category === "all" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            Todas las monedas
                        </Button>
                        <Button
                            onClick={() => handleCategory("top50")}
                            variant={category === "top50" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            Top50
                        </Button>
                        <Button
                            onClick={() => handleCategory("topGainers")}
                            variant={category === "topGainers" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            Ganadores
                        </Button>
                        <Button
                            onClick={() => handleCategory("topLosers")}
                            variant={category === "topLosers" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            Perdedores
                        </Button>

                        <div className="p-0">
                            <Button
                                onClick={handleSearch}
                                variant={isActive ? "default" : "outline"}
                                className={`flex items-center gap-3 rounded-full ${isActive ? ' text-white' : ''}`}
                            >
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Buscar cripto..."
                                    className="border-none outline-none bg-transparent flex-1"
                                />
                                <MagnifyingGlassIcon />
                            </Button>
                        </div>
                    </div>
                    <AssetTable coin={category === "all" ? coin.coinList : coin.top50} category={category} />
                    <div>
                        <Pagination>
                            <PaginationContent>
                                <PaginationPrevious
                                    href="#"
                                    onClick={handlePreviousPage}
                                    disabled={page === 1}
                                >
                                    Anterior
                                </PaginationPrevious>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        onClick={() => setPage(1)}
                                    >
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={handleNextPage}
                                >
                                    Siguiente
                                </PaginationNext>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-[50%] h-[70%] p-5">
                    <StockChart coinId='bitcoin' />
                    <div className="flex gap-5 items-center">
                        <div>
                            {coin.coinList[0] && (
                                <>
                                    <Avatar>
                                        <AvatarImage src={coin.coinList[0].image} />
                                    </Avatar>
                                    <div>
                                        <div className="flex gap-2 items-center">
                                            <p>{coin.coinList[0].name}</p>
                                            <DotIcon className='text-gray-400' />
                                            <p className="text-gray-400">
                                                {(coin.coinList[0].symbol).toUpperCase()}
                                            </p>
                                            <div className="flex items-end gap-2">
                                                <p className="text-xl font-bold">
                                                    {coin.coinList[0].current_price.toLocaleString('es-ES')}
                                                </p>
                                                <p className="text-red-600">
                                                    <span>{coin.coinList[0].market_cap_change_24h}</span>
                                                    <span>({coin.coinList[0].market_cap_change_percentage_24h})%</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <section className='absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2'>
                {isBotRealease && (
                    <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[45vh] bg-slate-900 text-white">
                        <div className="flex justify-between items-center border-b px-6 h-[12%]">
                            <p>Chat bot</p>
                            <Button
                                onClick={handleBotRelease}
                                variant="ghost"
                                size="icon"
                            >
                                <CrossIcon />
                            </Button>
                        </div>
                        <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
                            <div className='self-start pb-5 w-auto'>
                                <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                    <p>Hola</p>
                                    <p>¿Cuál es tu pregunta?</p>
                                </div>
                            </div>
                            {[1,1,1,1].map((item, i) => (
                                <div
                                    key={i}
                                    className={`${i % 2 === 0 ? "self-end" : "self-start"} pb-5 w-auto`}
                                >
                                    {i % 2 === 0 ? (
                                        <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                            <p>Tengo que agregar un la api de geminis aqui!</p>
                                        </div>
                                    ) : (
                                        <div className="justify-end self-start px-5 py-2 rounded-md bg-slate-800 w-auto">
                                            <p>Ok</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="h-[12%] border-t">
                            <Input
                                className="w-full h-full order-none outline-none"
                                placeholder="Escribe aqui"
                                onChange={handleChange}
                                value={inputValue}
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                    </div>
                )}
                <div className="relative w-[10rem] cursor-pointer group">
                    <Button
                        onClick={handleBotRelease}
                        className="w-full h-[3rem] gap-2 items-center"
                    >
                        <MessageCircle
                            size={30}
                            className='fill-[#1e293b] rotate-90 stroke-none group-hover:fill-[#1a1a1a]'
                        />
                        <span className='text-2xl'>Chat bot</span>
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default Home;

