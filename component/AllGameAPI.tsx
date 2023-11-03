import axios from "axios";
import { useEffect, useState } from "react";
import { get } from "http";



export interface Game {
    id: number;
    name: string;
    description: string;
    releaseDate: string;
    price: number;
    genres: Genre[];
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  



const allGameDataAPI = () => {
  const url = "https://game-be-v2.vercel.app/games";
  const [allGameData, setAllGameData] = useState<Game[]>([]);


  useEffect(() => {
    const fetchData = async () => {
    
        try {
          const response = await axios.get('https://game-be-crud.vercel.app/game/getall')
          const gameData: Game[] = response.data;
          setAllGameData(gameData);
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu từ API:', error);
        }
      };
      fetchData();
    }, []); 
    // console.log(allGameData);
    

  return [{ allGameData }];
};

export default allGameDataAPI;
