import React from 'react'
import { useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { searchCoin } from '@/Store/Coin/Action' 
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
const SearchCoin = () => {
 
  const [isActive, setIsActive] = useState(false);
  const[searchTerm,setSearchTerm]=useState("");
  const dispatch=useDispatch()
 
  const handleSearch=()=>{
    if(searchTerm.trim()!=""){
       searchCoin(searchTerm);
       setIsActive(true);
    }
}



return (
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
);
};

export default SearchCoin
