"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Input } from "./ui/input";  
import  Image  from "next/image";
import  search  from './assets/search.png'
import { useState , useEffect } from "react";
import letrax from './assets/letra-x.png'
import axios from "axios";

export function IU002({card , setCard, propsEmail}:any){ 

    type dataType = {
        nome: '',
        telefone: undefined, 
        email: '', 
        segmento: '',
        informacao: '',
    }
   
    const [ data, setTData ] = useState<dataType[]>([])
   
    useEffect(()=>{ 

            const fetchData = async ()=>{

                try{
        
                const response = await fetch(`https://fjinfor.ddns.net/fvendas/api/api_contato.php?funcao=get_contato_email&email=${data}`)
                
                const result = await response.json()
    
                setTData(result)
    
                console.log(result)
                   
                }catch(error){
    
                    console.error(error)
                
                }
            }
            
            fetchData()
       
    },[])
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        
        const value = e.target.value
      
        setTData([(value as any)])
        
    }

    const handleClick = () => {
        
        new Promise(close =>{
            
            close(false)

        }).then(()=>{

            setCard(false)

        })

    }

    const showEmail = async ()=>{
       
        let inputemail= (document.getElementById('dataemail') as HTMLInputElement).value  
        
        const res = await axios.get(`https://fjinfor.ddns.net/fvendas/api/api_contato.php?funcao=get_contato_email&email=${inputemail}`).then(function (ress){
        
            setTData(data)
    
           const dataApi = ress.data

           if(dataApi.length == 0 ){
            
            window.alert('Não há pessoas cadastradas com o e-mail informado!')

           } else {

            if(Array.isArray(dataApi)){
           
                setTData(dataApi)
                
                console.log(ress.data)
               
            } else {
            
                console.error('Os dados retornados não são um array:', dataApi);
            
                setTData([]);
            } 
            
           }
      
        })
      
    }
   
    return( 

    <div className="fixed inset-0 bg-backgroundIU002">  

    <div className="absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1440px] h-[1024px]">

        <Card className="bg-branco w-[727px] h-[536px] top-[244px] left-[357px] gap-0 rounded-[10px] text-[20px] font-normal leading-[24.2px] text-left text-preto">

            <div className="absolute px-[687px] pt-[25px]"  onClick={handleClick}>   

                <Image src={letrax} className="w-[20.01px] h-[20.01px] absolute gap-0 " alt="letrax" onClick={handleClick} />

            </div>

            <div className="pt-[25px] px-[32px]">

            <CardTitle><p className=" w-[387px] h-[24px] top-[269px] left-[389px] gap-0 leading-[43.57px] text-[36px]">Dados</p></CardTitle>            

            <div className="pt-[53px] ">

            <p className="w-[172px] h-[24px] top-[346px] left-[389px] gap-0">Informe o e-mail:</p>

            </div>

            <div className="pt-[5px] flex flex-row space-x-[33px]">

            {data.map((data)=>(            

            <Input className="w-[541px] h-[45px] top-[375px] left-[389px] gap-0 rounded-[10px] border-[1px] bg-branco border-cinzaclaro " value={data.email} id="dataemail" onChange={handleChange}/>
            
            ))} 

            <Image src={search} alt="botão search" className=" w-[32px] h-[32px] top-[375px] left-[963px] gap-0" onClick={showEmail}/>
            
            </div>

            <div className="pt-[22px] ">

            <hr className="border-preto"/>

            </div>

            </div>

           <CardContent className="px-[32px] ">   

           {data.map((data) =>(    

            <div>
          
            <p  className="pt-[20px]">{data.nome}</p>

            <p className="pt-[26px] w-[237px] h-[24px] top-[512px] left-[389px] gap-0">Segmento: {data.segmento} </p>   
     
            </div>

            ))}

            </CardContent>
                      
            <div className="px-[32px]">

            <p className="pt-[26px] w-[237px] h-[24px] top-[562px] left-[389px] gap-0" >Mensagem:</p>
           
            {data.map((data) =>(   

            <p className="pt-[46px] w-[655px] h-[24px] top-[602px] left-[389px] gap-0" >{data.informacao} </p>

            ))}
          
            </div>          
            
        </Card>

    </div>
    </div>
    );
} 